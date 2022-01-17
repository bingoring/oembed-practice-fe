import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios'; //axios 호출
import { store } from './store/index';
// https://bootstrap-vue.js.org/
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

//Vue.component("AlertDialog", { "@/components/module/AlertDialog.vue"})
Vue.prototype.$axios = axios; //전역변수로 설정 컴포넌트에서 this.$axios 호출할 수 있음
Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  store,
  router, // 라우터 객체를 넘겨준다
  render: h => h(App),
}).$mount("#app");
