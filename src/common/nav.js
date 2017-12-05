import dynamic from 'dva/dynamic';

// wrapper of dynamic
const dynamicWrapper = (app, models, component) => dynamic({
  app,
  models: () => models.map(m => import(`../models/${m}.js`)),
  component,
});

// nav data
export const getNavData = app => [
  {
    component: dynamicWrapper(app, ['user', 'login'], () => import('../layouts/BasicLayout')),
    layout: 'BasicLayout',
    name: '首页', // for breadcrumb
    path: '/',
    children: [
      {
        name:'远程监控管理',
        icon: 'dashboard',
        path: 'digitalSignage',
        children:[
          {
          name:'电子看板',
          path: 'digitalSignage',
          component:dynamicWrapper(app, ['form'], () => import('../routes/Remote/DigitalSignage')),
        },
          {
            name: '总工艺图',
            path: 'processDrawing',
            component:dynamicWrapper(app, ['form'], () => import('../routes/Remote/Monitor')),
          },
          {
            name: '取水泵站',
            path: 'pumpStation',
            component:dynamicWrapper(app, ['form'], () => import('../routes/Remote/PumpStation')),
          },
          {
            name: '间细格栅',
            path: 'fineGrille',
            component:dynamicWrapper(app, ['form'], () => import('../routes/Remote/FineGrille')),
          },
          {
            name: '混合反应池',
            path: 'mixedReactionPool',
            component:dynamicWrapper(app, ['form'], () => import('../routes/Remote/MixedReactionPool')),
          },
          {
            name: '高效澄清池',
            path: 'highEfficiencyClarify',
            component:dynamicWrapper(app, ['form'], () => import('../routes/Remote/HighEfficiencyClarify')),
          },
          {
            name: 'V型滤池',
            path: 'VFilter',
            component:dynamicWrapper(app, ['form'], () => import('../routes/Remote/VFilter')),
          },
          {
            name: '送水泵房',
            path: 'pumpRoom',
            component:dynamicWrapper(app, ['form'], () => import('../routes/Remote/PumpRoom')),
          },
          {
            name: '组合水池',
            path: 'combinedPool',
            component:dynamicWrapper(app, ['form'], () => import('../routes/Remote/CombinedPool')),
          },
          {
            name: '加药房',
            path: 'Drugstore',
            component:dynamicWrapper(app, ['form'], () => import('../routes/Remote/Drugstore')),
          },
          {
            name: '污泥浓缩池',
            path: 'sludgeThickener',
            component:dynamicWrapper(app, ['form'], () => import('../routes/Remote/SludgeThickener')),
          },
        ]
      },
      {
        name: '视屏监控',
        path: 'videoMonitor',
        icon: 'form',
        children: [
          {
            name: '区间视频',
            path: 'waterPlant',
            component:dynamicWrapper(app, [], () => import('../routes/Video/IntervalVideo')),
          },{
            name: '泵房视频',
            path: 'pumpHouse',
            component:dynamicWrapper(app, [], () => import('../routes/Video/PumpVideo')),
          }
        ]
      },
      {
        name: '统计分析',
        path: 'countAnalysis',
        icon: 'table',
        children: [
          {
            name: '取水泵房报表',
            path: 'pumpHouseReport',
            component:dynamicWrapper(app, [], () => import('../routes/Count/PumpHouseReport')),
          },{
            name: '送水泵房报表',
            path: 'waterPumpHouse ',
            component:dynamicWrapper(app, [], () => import('../routes/Count/WaterPumpHouse')),
          },{
            name: '组合水池报表',
            path: 'combinedPoolReport',
            component:dynamicWrapper(app, [], () => import('../routes/Count/CombinedPoolReport')),
          },{
            name: '水处理间报表',
            path: 'waterTreatmentReport',
            component:dynamicWrapper(app, [], () => import('../routes/Count/WaterTreatmentReport')),
          }
        ]
      },
      // {
      //   name: '表单页',
      //   path: 'form',
      //   icon: 'form',
      //   children: [
      //     {
      //       name: '基础表单',
      //       path: 'basic-form',
      //       component: dynamicWrapper(app, ['form'], () => import('../routes/Forms/BasicForm')),
      //     },
      //     {
      //       name: '分步表单',
      //       path: 'step-form',
      //       component: dynamicWrapper(app, ['form'], () => import('../routes/Forms/StepForm')),
      //       children: [
      //         {
      //           path: 'confirm',
      //           component: dynamicWrapper(app, ['form'], () => import('../routes/Forms/StepForm/Step2')),
      //         },
      //         {
      //           path: 'result',
      //           component: dynamicWrapper(app, ['form'], () => import('../routes/Forms/StepForm/Step3')),
      //         },
      //       ],
      //     },
      //     {
      //       name: '高级表单',
      //       path: 'advanced-form',
      //       component: dynamicWrapper(app, ['form'], () => import('../routes/Forms/AdvancedForm')),
      //     },
      //   ],
      // },
      // {
      //   name: '列表页',
      //   path: 'list',
      //   icon: 'table',
      //   children: [
      //     {
      //       name: '查询表格',
      //       path: 'table-list',
      //       component: dynamicWrapper(app, ['rule'], () => import('../routes/List/TableList')),
      //     },
      //     {
      //       name: '标准列表',
      //       path: 'basic-list',
      //       component: dynamicWrapper(app, ['list'], () => import('../routes/List/BasicList')),
      //     },
      //     {
      //       name: '卡片列表',
      //       path: 'card-list',
      //       component: dynamicWrapper(app, ['list'], () => import('../routes/List/CardList')),
      //     },
      //     {
      //       name: '搜索列表（项目）',
      //       path: 'cover-card-list',
      //       component: dynamicWrapper(app, ['list'], () => import('../routes/List/CoverCardList')),
      //     },
      //     {
      //       name: '搜索列表（应用）',
      //       path: 'filter-card-list',
      //       component: dynamicWrapper(app, ['list'], () => import('../routes/List/FilterCardList')),
      //     },
      //     {
      //       name: '搜索列表（文章）',
      //       path: 'search',
      //       component: dynamicWrapper(app, ['list'], () => import('../routes/List/SearchList')),
      //     },
      //   ],
      // },
      // {
      //   name: '详情页',
      //   path: 'profile',
      //   icon: 'profile',
      //   children: [
      //     {
      //       name: '基础详情页',
      //       path: 'basic',
      //       component: dynamicWrapper(app, ['profile'], () => import('../routes/Profile/BasicProfile')),
      //     },
      //     {
      //       name: '高级详情页',
      //       path: 'advanced',
      //       component: dynamicWrapper(app, ['profile'], () => import('../routes/Profile/AdvancedProfile')),
      //     },
      //   ],
      // },
      // {
      //   name: '结果',
      //   path: 'result',
      //   icon: 'check-circle-o',
      //   children: [
      //     {
      //       name: '成功',
      //       path: 'success',
      //       component: dynamicWrapper(app, [], () => import('../routes/Result/Success')),
      //     },
      //     {
      //       name: '失败',
      //       path: 'fail',
      //       component: dynamicWrapper(app, [], () => import('../routes/Result/Error')),
      //     },
      //   ],
      // },
      // {
      //   name: '异常',
      //   path: 'exception',
      //   icon: 'warning',
      //   children: [
      //     {
      //       name: '403',
      //       path: '403',
      //       component: dynamicWrapper(app, [], () => import('../routes/Exception/403')),
      //     },
      //     {
      //       name: '404',
      //       path: '404',
      //       component: dynamicWrapper(app, [], () => import('../routes/Exception/404')),
      //     },
      //     {
      //       name: '500',
      //       path: '500',
      //       component: dynamicWrapper(app, [], () => import('../routes/Exception/500')),
      //     },
      //   ],
      // },
    ],
  },
  {
    component: dynamicWrapper(app, [], () => import('../layouts/UserLayout')),
    path: '/user',
    layout: 'UserLayout',
    children: [
      {
        name: '后台管理',
        icon: 'user',
        path: 'user',
        children: [
          {
            name: '登录',
            path: 'login',
            component: dynamicWrapper(app, ['login'], () => import('../routes/User/Login')),
          },
          {
            name: '注册',
            path: 'register',
            component: dynamicWrapper(app, ['register'], () => import('../routes/User/Register')),
          },
          {
            name: '注册结果',
            path: 'register-result',
            component: dynamicWrapper(app, [], () => import('../routes/User/RegisterResult')),
          },
        ],
      },
    ],
  },
];
