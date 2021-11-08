import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/views/MainPage";
import GetUsers from "@/views/user/GetUsers";
import Register from "@/views/user/Register"
import UserDetail from "@/views/user/UserDetail"
import NotFound from "@/views/common/NotFound";
import ModifyUser from "@/views/user/modifyUser";
import DeleteUser from "@/views/user/deleteUser";

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
      path: "/auth/getUsers",
      name: "GetUsers",
      component: GetUsers,
    },
    {
      path: "/auth/register/:userId?",
      name: "Register",
      component: Register,
    },
    {
      path: "/auth/userDetail/",
      name: "UserDetail",
      component: UserDetail,
    },
    {
      path: "/auth/modifyUser",
      name: "ModifyUser",
      component: ModifyUser,
    },
    {
      path: "/auth/deleteUser",
      namee: "DeleteUser",
      component: DeleteUser,
    },
    {
      path: "*",
      component: NotFound
    }
  ]
});
