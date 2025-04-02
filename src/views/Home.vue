<template>
  <div :class="['home', { 'light-mode': !isDarkMode }]">
    <!-- 导航头顶部组件，传递 isDarkMode 并监听 toggle-theme 事件 -->
    <HomeHeaderTop :is-dark-mode="isDarkMode" @toggle-theme="toggleTheme" />

    <!-- 其他组件 -->
    <HomeHeader class="home-header" :is-dark-mode="isDarkMode" />
    <BubbleEffect />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import BubbleEffect from "../components/BubbleEffect.vue";
import HomeHeader from "../components/home/HomeHeader.vue";
import HomeHeaderTop from "../components/home/HomeHeaderTop.vue";

// 定义 isDarkMode 状态，默认为 Dark 模式
const isDarkMode = ref(true);

// 切换主题的方法
function toggleTheme() {
  isDarkMode.value = !isDarkMode.value;
}
// 组件逻辑可以在这里编写
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("../assets/png/bg.png");
  background-attachment: fixed;
}
/* Light 模式下的样式 */
.home.light-mode {
  background-color: #ffffff; /* Light 模式背景色 */
  color: #000000; /* Light 模式文字颜色 */
}
.home-header {
  position: absolute;
  bottom: 0;
  z-index: 999;
}
</style>
