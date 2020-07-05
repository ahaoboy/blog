const fse = require("fs-extra");
const path = require("path");
const inquirer = require("inquirer");
const TEMPLATE_PATH = "./bin/template.md";
const ejs = require("ejs");
const yaml = require("js-yaml");
const POST_DIR = "./_posts";
// 获取所有博客的tag列表, 以供选择
function getTags() {}

// 返回数组, y,m,d
function getDate() {
  console.log(new Date().toDateString());
  return new Date()
    .toLocaleDateString()
    .split("/")
    .map((s) => {
      if (s.length < 2) s = "0" + s;
      return s;
    });
}
async function main() {
  const answers = await inquirer.prompt([
    {
      type: "String",
      name: "title",
      message: "输入博客标题",
      default: "新的博客",
    },
    {
      type: "String",
      name: "tags",
      message: "输入博客标签, 空格分割",
      default: "js",
      filter: (s) => s.split(" ").map((s) => s.trim()),
    },
  ]);
  //   console.log("结果为:");
  console.log(answers);
  const [y, m, d] = getDate();
  const fileName = [y, m, d, answers.title + ".md"].join("-");

  // 按照月分组, 文件名中包含所有信息
  const filePath = path.join(POST_DIR, y, m, fileName);
  console.log(filePath);
  ejs.renderFile(TEMPLATE_PATH, answers, function(err, str) {
    // str => Rendered HTML string
    // console.log("str", str);
    if (err) console.log("err", err);
    console.log("path", path.resolve("./"));
    let fm = {
      ...answers,
      date: new Date(),
      author: "ahaoboy",
      location: " Xia'an",
    };

    const content = `---\n${yaml.dump(fm)}---\n\n\n${str}`;
    fse.outputFileSync(filePath, content);
  });
}

main();
