import React from 'react';

export default {
  'zh-cn': {
    brand: {
      brandName: 'ApiStarter',
      briefIntroduction: '一款基于SpringBoot的Api服务器&基于Vue的后台管理系统 脚手架',
      buttons: [
        {
          text: '立即开始',
          link: '/zh-cn/docs/background.html',
          type: 'primary',
        },
        {
          text: '查看Git',
          link: 'https://gitee.com/weixin54321a/ApiStarter',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: 'ApiStarter',
      desc: '一款基于SpringBoot的Api服务器&基于Vue的后台管理系统 脚手架,风格简洁,简单实用.',
      img: '/img/architecture.png',
    },
    features: {
      title: '特性一览',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: '前后分离',
          content: '接口与页面分离,通过json交互数据',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: '基础封装',
          content: '通用的java服务器开发脚手架封装,无需繁琐环境搭建配置,基础工具类封装',
        },
        {
          img: '/img/feature_service.png',
          title: '后台通用管理系统',
          content: '基于vue的后台管理系统,简单方便',
        },
        {
          img: '/img/feature_hogh.png',
          title: '通用权限管理',
          content: '项目对通用的角色资源权限做了抽象封装,无需花费额外精力即可实现基本的权限管理',
        },
        {
          img: '/img/feature_runtime.png',
          title: '模块化开发',
          content: '基于maven模块化开发,模块之间解耦,互不干扰',
        },
        {
          img: '/img/feature_maintenance.png',
          title: '丰富的文档',
          content: '除了基本的项目使用文档,项目对涉及的技术栈都有一定的技术扩展,方便上手',
        },
      ],
    },
    start: {
      title: '快速开始',
      desc: '简单描述',
      img: '/img/quick_start.png',
      button: {
        text: '阅读更多',
        link: '/zh-cn/docs/background.html',
      },
    },
    users: {
      title: '',
      desc: <span />,
      list: [],
    },
  },
  'en-us': {
    brand: {
      brandName: 'ApiStarter',
      briefIntroduction: 'An API server based on spring boot & the scaffolding of the background management system based on Vue, simple and practical',
      buttons: [
        {
          text: 'Quick Start',
          link: '/en-us/docs/background.html',
          type: 'primary',
        },
        {
          text: 'View on Github',
          link: '',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: 'ApiStarter',
      desc: 'An API server based on spring boot & the scaffolding of the background management system based on Vue, simple and practical',
      img: '/img/architecture.png',
    },
    features: {
      title: 'Feature List',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: 'feature1',
          content: 'feature description',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: 'feature2',
          content: 'feature description',
        },
        {
          img: '/img/feature_service.png',
          title: 'feature3',
          content: 'feature description',
        },
        {
          img: '/img/feature_hogh.png',
          title: 'feature4',
          content: 'feature description',
        },
        {
          img: '/img/feature_runtime.png',
          title: 'feature5',
          content: 'feature description',
        },
        {
          img: '/img/feature_maintenance.png',
          title: 'feature6',
          content: 'feature description',
        }
      ]
    },
    start: {
      title: 'Quick start',
      desc: 'some description text',
      img: '/img/quick_start.png',
      button: {
        text: 'READ MORE',
        link: '/en-us/docs/background.html',
      },
    },
    users: {
      title: 'users',
      desc: <span>some description</span>,
      list: [],
    },
  },
};
