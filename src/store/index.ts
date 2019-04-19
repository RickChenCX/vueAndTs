import Vue from "vue";
import Vuex, { Commit, Dispatch } from 'vuex'
import {state} from "./states";
import getters from "./getter";
import mutations from "./mutation";
import actions from "./action";
// import m1 from './modules/m1.js';
import createLogger from "vuex/dist/logger"; // 修改日志

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production"; // 开发环境中为true，否则为false

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    // m1,放置模块的
  },
  plugins: debug ? [createLogger()] : [] // 开发环境下显示vuex的状态修改
});
