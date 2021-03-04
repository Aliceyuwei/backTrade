import Vue from 'vue'
import Index from './Index.vue'
import './registerServiceWorker'
import router from './config/router';
import store from './store'
import Vuex from 'vuex';
// 套件
import drag from 'v-drag';
import VueCookie from 'vue-cookie';
import Element from 'element-ui';
import vmodal from 'vue-js-modal';
import VueDND from 'awe-dnd';
// 過濾器
import {
  formatMoney,
  formatOdds
} from './common/func';

// i18n
import 'element-ui/lib/theme-chalk/index.css';
export const functionBus = new Vue();

require('flatpickr/dist/themes/material_blue.css');
require('font-awesome/css/font-awesome.css');
require('sweetalert2/dist/sweetalert2.min.css');

// 使用套件
Vue.use(drag);
Vue.use(Vuex);
Vue.use(VueCookie);
Vue.use(Element);
Vue.use(vmodal);
Vue.use(VueDND);

// 註冊過濾器
Vue.filter('formatMoney', formatMoney);
Vue.filter('formatOdds', formatOdds);


// 註冊過濾器

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Index)
}).$mount('#app')
