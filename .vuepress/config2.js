// const {resolve} = require('path')

module.exports = {
  dest: './dist',
  // configureWebpack: {
  // resolve: {
  // alias: {
  // '@as': resolve(__dirname, './assets'),
  // '@imgs': resolve(__dirname, './assets/imgs')
  // }
  // }
  // },
  plugins: [
    // 回到顶部
    require('@vuepress/plugin-back-to-top'),
    // 右边的侧边栏, 宽度有时候有点太长了, 应该默认收起来
    ['vuepress-plugin-right-anchor'],
  ],

  title: 'ahaoboy blog',
  description: 'This is a blog example built by VuePress',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  // 代码显示行号
  markdown: {lineNumbers: true},
  themeConfig: {
    // frontmatters: [
    //   {
    //     // Unique ID of current classification
    //     id: 'tag',
    //     // Decide that the frontmatter keys will be grouped under this classification
    //     keys: ['tag'],
    //     // Path of the `entry page` (or `list page`)
    //     path: '/tag/',
    //     // Layout of the `entry page`
    //     layout: 'Tags',
    //     // Layout of the `scope page`
    //     scopeLayout: 'Tag'
    //   },
    // ],

    // md文件夹名称
    dirname: 'posts',
    // 侧边栏啥深度
    // sidebarDepth: 2,
    // 是否显示所有的链接
    // displayAllHeaders: true, // 默认值：false

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    // modifyBlogPluginOptions(blogPluginOptions) {
    //   return blogPluginOptions
    // },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'home',
        link: '/home',
      },{
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    home: false,
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/ulivz',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/_ulivz',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2018-present Vue.js',
          link: '',
        },
      ],
    },
  },
}
