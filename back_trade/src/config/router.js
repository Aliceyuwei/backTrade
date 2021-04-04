// import Vue from 'vue'
// import VueRouter from 'vue-router'
// // import Home from '../views/Home.vue'
// import controlApp from '@/components/router/ControlApp.vue'
// import OverviewPage from '@/components/router/overview/OverviewPage'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     component: controlApp,
//     children: [
//       {
//         path: '/',
//         redirect: '/overview',
//         meta: {
//             titleKey: 'TEXT_TOTAL_VIEW'
//         }
//       },
//       // 總覽
//       {
//         name: 'overview',
//         path: '/overview',
//         component: OverviewPage,
//         caseSensitive: true,
//         meta: {
//             titleKey: 'TEXT_TOTAL_VIEW'
//         }
//       }
//     ]
//   }
// ]

// const router = new VueRouter({
//   routes
// })

// export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store';

Vue.use(VueRouter)

function getComponent (path) {
  store.dispatch('actionCommonLoading', true);
  return import(`../components/${path}`).then(res => {
      store.dispatch('actionCommonLoading', false);
      return res;
  });
}
const components = {
  common: {
    controlApp: () => getComponent('router/ControlApp'),
  },
  overview: {
    overview: () => getComponent('router/overview/OverviewPage'),
  },
  gameDownload: {
    gameDownload: () => getComponent('router/gameDownload/GameDownload'),
    tournamentDownload: () => getComponent('router/gameDownload/TournamentDownload')
  },
  gameOpen: {
    gameTemplate: () => getComponent('router/gameOpen/GameTemplate'),
    gameParam: () => getComponent('router/gameOpen/gameParam/GameParam'),
    wagers: () => getComponent('router/gameOpen/gameWager/WagersNormal'),
    wagersWait: () => getComponent('router/gameOpen/gameWager/WagersWait'),
    wagerTotal: () => getComponent('router/gameOpen/gameWager/WagerTotal'),
    wagerMemberBetDetail: () =>
        getComponent('router/gameOpen/gameWager/WagerMemberBetDetail'),
    gameBetCount: () => getComponent('router/gameOpen/gameTemplateSimple/gameBetCount'),
    statscoreLive: () =>
        getComponent('router/gameOpen/gameActions/statscoreLive'),
    matrixLive: () => getComponent('router/gameOpen/gameActions/matrixLive'),
    twitchLive: () => getComponent('router/gameOpen/gameActions/twitchLive')
  },
};

// 各頁的權限meta
// ...以下
const permission = {
  // 賽事下載
  gameDownload: {
      requiresPermission: true,
      permission: 'game_download'
  },
  // 賽事開盤
  gameOpen: {
      requiresPermission: true,
      permission: 'odds_manager'
  },
  // 風險監控
  riskMonitor: {
      requiresPermission: true,
      permission: 'risk_monitor'
  },
  // 比分輸入
  scoreInput: {
      limit_mode: 'Y',
      requiresPermission: true,
      permission: 'game_result_key_in'
  },
  // 預設參數
  presetParam: {
      requiresPermission: true,
      permission: 'default_parameter'
  },
  matrix: {
      requiresPermission: false,
      permission: 'default_parameter'
  },
  // 管理
  manage: {
      requiresPermission: true,
      permission: 'trade_manager'
  }
};

let router;
router = new VueRouter({
  routes: [
    {
      path: '/',
      component: components['common']['controlApp'],
      // component: controlApp,
      caseSensitive: true,
      children: [
        {
          path: '/',
          redirect: '/overview',
          meta: {
              titleKey: 'TEXT_TOTAL_VIEW'
          }
        },
        // 總覽
        {
          name: 'overview',
          path: '/overview',
          component: components['overview']['overview'],
          // component: OverviewPage,
          caseSensitive: true,
          meta: {
              titleKey: 'TEXT_TOTAL_VIEW'
          }
        },
        // // Matrix
        // {
        //     name: 'matrix',
        //     path: '/matrix',
        //     component: components['matrix']['matrix'],
        //     meta: {
        //         titleKey: 'TEXT_BETRADAR'
        //     }
        // },
        // {
        //     name: 'radar',
        //     path: '/radar',
        //     component: components['radar']['radar'],
        //     caseSensitive: true,
        //     meta: {
        //         titleKey: 'TEXT_Instant_Message'
        //     }
        // },
        // 賽事下載
        {
            name: 'gameDownload',
            path: '/gameDownload',
            component: components['gameDownload']['gameDownload'],
            caseSensitive: true,
            meta: {
                permissionGroup: 'matchDownload',
                permissionKey: 'gameDownload',
                ...permission['gameDownload'],
                titleKey: 'TEXT_GAME_DOWNLOAD'
            }
        },
        // 冠軍賽事下載
        {
            name: 'tournamentDownload',
            path: '/tournamentDownload',
            component: components['gameDownload']['tournamentDownload'],
            caseSensitive: true,
            meta: {
                permissionGroup: 'matchDownload',
                permissionKey: 'tournamentDownload',
                ...permission['gameDownload'],
                titleKey: 'TEXT_TOURNAMENT_DOWNLOAD'
            },
            params: {
                template: 'regular_events'
            }
        },
        // 賽事開盤
        {
          name: 'gameTemplate',
          path: '/gameOpen/gameTemplate/:template/:sport_id',
          component: components['gameOpen']['gameTemplate'],
          caseSensitive: true,
          // 賽事開盤的特例 用來判斷側邊選單是否出現簡易版與進階版按鈕
          meta: {
              ...permission['gameOpen'],
              isGameOpen: true,
              match_type: 1,
              titleKey: 'TEXT_GAME_OPENING',
              permissionGroup: 'matchOpen'
          }
        },
        // 冠軍賽事開盤
        {
            name: 'tournamentOpen',
            path: '/gameOpen/:template',
            component: components['gameOpen']['gameTemplate'],
            caseSensitive: true,
            meta: {
                ...permission['gameOpen'],
                isGameOpen: true,
                match_type: 2,
                titleKey: 'TEXT_TOURNAMENT'
            }
        },
      ],
    },
  ],
});

// router.beforeEach(async(to, from, next) => {
//   next();
// });
// router.afterEach((to, from) => {
// });
// router.beforeResolve((to, from, next) => {
//   next();
// });

export default router;
