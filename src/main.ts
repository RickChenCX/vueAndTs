import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import store from "../src/vuex/index";
import {instance} from "@/util/http";
import vueAxios from "vue-axios";


Vue.config.productionTip = false;


// 挂载axios，以前绑定在prototype上的方法不行了
Vue.use(vueAxios, instance);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
