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
};

// 各頁的權限meta
// ...以下

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
