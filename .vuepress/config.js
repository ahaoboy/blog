module.exports = {
  title: "ahaoboy's blog",
  description: "This is a blog built by VuePress",
  theme: "@vuepress/theme-blog", // OR shortcut: @vuepress/blog
  markdown: { lineNumbers: true },
  dirname: "posts",
  themeConfig: {
    lastUpdated: "Last Updated", // string | boolean
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: false,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: false,

    frontmatters: [
      {
        // Unique ID of current classification
        id: "tag",
        // Decide that the frontmatter keys will be grouped under this classification
        keys: ["tag"],
        // Path of the `entry page` (or `list page`)
        path: "/tag/",
        // Layout of the `entry page`
        layout: "Tags",
        // Layout of the `scope page`
        scopeLayout: "Tag",
      },
    ],

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions;
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: "Blog",
        link: "/",
      },
      {
        text: "Tags",
        link: "/tag/",
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/ulivz",
        },
        {
          type: "twitter",
          link: "https://twitter.com/_ulivz",
        },
      ],
      copyright: [
        {
          text: "Privacy Policy",
          link: "https://policies.google.com/privacy?hl=en-US",
        },
        {
          text: "MIT Licensed | Copyright © 2018-present Vue.js",
          link: "",
        },
      ],
    },
  },
};
