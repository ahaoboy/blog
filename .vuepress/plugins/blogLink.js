const path = require("path");
const { readSync } = require("fs");
const markdownItContainer = require("markdown-it-container");
const blogLinkMark = "blogLink";

module.exports = (options = {}, context) => {
  return {
    name: "blog-link",
    enhanceAppFiles: [path.resolve(__dirname, "enhanceAppFile.js")],
    extendMarkdown: (md) => {
      function render(tokens, idx) {
        console.log("idx", idx);
        const { nesting, info } = tokens[idx];
        if (nesting === -1) {
          return "</BlogLink>\n";
        }
        return "<BlogLink>";
      }

      console.log("extendMarkdown");
      md.use(markdownItContainer, blogLinkMark, {
        render,
        validate: function(params) {
          // 返回三个冒号后面的文字
          // console.log("validate", params);
          return params.trim().match(`^${blogLinkMark}`);
        },
      });
    },
    ready: (page) => {
      console.log("page", page);
    },
  };
};
