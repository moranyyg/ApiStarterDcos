// 全局的一些配置
export default {
  rootPath: '/', // 发布到服务器的根目录，需以/开头但不能有尾/，如果只有/，请填写空字符串
  port: 8080, // 本地开发服务器的启动端口
  domain: 'github.com/moranyyg/ApiStarterDcos/', // 站点部署域名，无需协议和path等
  defaultLanguage: 'zh-cn',
  'en-us': {
    pageMenu: [{
        key: 'home', // 用作顶部菜单的选中
        text: 'HOME',
        link: '/en-us/index.html',
      },
      {
        key: 'docs',
        text: 'DOCS',
        link: '/en-us/docs/demo1.html',
      },
      {
        key: 'blog',
        text: 'BLOG',
        link: '/en-us/blog/index.html',
      }
    ],
    disclaimer: {
      title: 'License',
      content: 'MIT License',
    },
    documentation: {
      title: 'Documentation',
      list: [{
          text: 'Overview',
          link: '/en-us/docs/architecture.html',
        },
        {
          text: 'Quick start',
          link: '/en-us/docs/background.html',
        },
        {
          text: 'Developer guide',
          link: '/en-us/docs/dir/background.html',
        },
      ],
    },
    resources: {
      title: 'Resources',
      list: [{
          text: 'Blog',
          link: '/en-us/blog/index.html',
        },
        {
          text: 'Community',
          link: '/en-us/community/index.html',
        },
      ],
    },
    copyright: 'Copyright © 2019 xiaoguo',
  },
  'zh-cn': {
    pageMenu: [{
        key: 'home',
        text: '首页',
        link: '/zh-cn/index.html',
      },
      {
        key: 'docs',
        text: '文档',
        link: '/zh-cn/docs/background.html',
      },
      {
        key: 'blog',
        text: '博客',
        link: '/zh-cn/blog/index.html',
      }
    ],
    disclaimer: {
      title: '开源协议',
      content: 'MIT License',
    },
    documentation: {
      title: '文档',
      list: [{
          text: '概览',
          link: '/zh-cn/docs/architecture.html',
        },
        {
          text: '快速开始',
          link: '/zh-cn/docs/background.html',
        },
        {
          text: '开发者指南',
          link: '/zh-cn/docs/dir/background.html',
        },
      ],
    },
    resources: {
      title: '资源',
      list: [{
        text: '博客',
        link: '/zh-cn/blog/index.html',
      }],
    },
    copyright: 'Copyright © 2019 xiaoguo',
  },
};
