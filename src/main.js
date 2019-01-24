import Vue from "vue";
import Vant from "vant";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "vant/lib/index.css";

// axios全局配置
Vue.prototype.axios = axios;
Vue.config.productionTip = false;

Vue.use(Vant);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
