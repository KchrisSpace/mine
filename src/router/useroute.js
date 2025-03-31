import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue"; // 确保路径正确
import Home from "../views/Home.vue"; // 确保路径正确
// 你可以在这里导入其他视图组件

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  }, // 在这里添加更多路由
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
