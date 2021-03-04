import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutation/index';
import state from './state/index';
import getters from './getter/index';
import actions from './action';


Vue.use(Vuex);
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    strict: false // 嚴格模式，禁止直接修改 state
});
