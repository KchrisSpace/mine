import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";
import App from "./App.vue";
import router from "./router/use-route";


const app = createApp(App);

// 使用插件
app.use(router);
app.use(ElementPlus);

app.mount("#app");
