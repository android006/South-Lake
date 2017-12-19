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
    path: '/home',
    children: [
      {
        name:'远程监控管理',
        icon: 'dashboard',
        path: 'digital',
        children:[
          {
          name:'电子看板',
          path: 'digitalSignage-list',
          component:dynamicWrapper(app, ['list'], () => import('../routes/Remote/DigitalSignage')),
        },
          {
            name: '总工艺图',
            path: 'processDrawing-list',
            component:dynamicWrapper(app, ['list'], () => import('../routes/Remote/Monitor')),
          },
          {
            name: '取水泵站',
            path: 'pumpStation-list',
            component:dynamicWrapper(app, ['list'], () => import('../routes/Remote/PumpStation')),
          },
          {
            name: '间细格栅',
            path: 'fineGrille-list',
            component:dynamicWrapper(app, ['list'], () => import('../routes/Remote/FineGrille')),
          },
          {
            name: '混合反应池',
            path: 'mixedReactionPool-list',
            component:dynamicWrapper(app, ['list'], () => import('../routes/Remote/MixedReactionPool')),
          },
          {
            name: '高效澄清池',
            path: 'highEfficiencyClarify-list',
            component:dynamicWrapper(app, ['list'], () => import('../routes/Remote/HighEfficiencyClarify')),
          },
          {
            name: 'V型滤池',
            path: 'VFilter-list',
            component:dynamicWrapper(app, ['list'], () => import('../routes/Remote/VFilter')),
          },
          {
            name: '送水泵房',
            path: 'pumpRoom-list',
            component:dynamicWrapper(app, ['list'], () => import('../routes/Remote/PumpRoom')),
          },
          {
            name: '组合水池',
            path: 'combinedPoo-listl',
            component:dynamicWrapper(app, ['list'], () => import('../routes/Remote/CombinedPool')),
          },
          {
            name: '加药房',
            path: 'Drugstore-list',
            component:dynamicWrapper(app, ['list'], () => import('../routes/Remote/Drugstore')),
          },
          {
            name: '污泥浓缩池',
            path: 'sludgeThickener-list',
            component:dynamicWrapper(app, ['list'], () => import('../routes/Remote/SludgeThickener')),
          },
        ]
      },
      {
        name: '视屏监控',
        path: 'video',
        icon: 'form',
        children: [
          {
            name: '区间视频',
            path: 'waterPlant-list',
            component:dynamicWrapper(app, ['list'], () => import('../routes/Video/IntervalVideo')),
          },{
            name: '泵房视频',
            path: 'pumpHouse-list',
            component:dynamicWrapper(app, ['list'], () => import('../routes/Video/PumpVideo')),
          }
        ]
      },
      {
        name: '统计分析',
        path: 'count',
        icon: 'table',
        children: [
          {
            name: '取水泵房报表',
            path: 'pumpHouseReport-form',
            component:dynamicWrapper(app, ['form'], () => import('../routes/Count/PumpHouseReport')),
          },{
            name: '送水泵房报表',
            path: 'waterPumpHouse-form',
            component:dynamicWrapper(app, ['form'], () => import('../routes/Count/WaterPumpHouse')),
          },{
            name: '组合水池报表',
            path: 'combinedPoolReport-form',
            component:dynamicWrapper(app, ['form'], () => import('../routes/Count/CombinedPoolReport')),
          },{
            name: '水处理间报表',
            path: 'waterTreatmentReport-form',
            component:dynamicWrapper(app, ['form'], () => import('../routes/Count/WaterTreatmentReport')),
          }
        ]
      },
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
