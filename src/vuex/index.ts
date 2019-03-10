import vue from "vue";
import vuex from "vuex";
import state from "./states";
import * as getters from "./getter";
import mutations from "./mutation";
import actions from "./action";
// import m1 from './modules/m1.js';
import createLogger from "vuex/dist/logger"; // 修改日志

vue.use(vuex);

const debug = process.env.NODE_ENV !== "production"; // 开发环境中为true，否则为false

export default new vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    // m1,放置模块的
  },
  plugins: debug ? [createLogger()] : [] // 开发环境下显示vuex的状态修改
});
