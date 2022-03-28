import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";
import App from "./App.vue";
import router from "./router";
import setRem from "./setRem";
import { Search } from "vant";

Vue.use(Search);
Vue.config.productionTip = false;
Vue.use(Vant);
let vm = new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

setRem(750, 100);
window.addEventListener("resize", function () {
  setRem(750, 100);
});
console.log(vm);
