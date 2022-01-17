import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/views/MainPage";
import UrlInput from "@/views/embed/urlInput";

Vue.use(VueRouter); // 뷰 어플리케이션에 라우터 플러그인을 추가한다.

// 라우터 객체를 생성
export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/main",
      name: "MainPage",
      component: MainPage
    },
    {
      path: "/embed/urlInput",
      namee: "UrlInput",
      component: UrlInput,
    }
  ]
});
