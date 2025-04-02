<template>
  <div :class="['home-header-top', { 'light-mode': !isDarkMode }]">
    <div class="header-left">
      <p class="welcometip">{{ welcomeTip }}</p>
    </div>
    <!-- 点击按钮时触发 ChangeModel 方法 -->
    <button class="header-right" @click="ChangeModel">{{ buttonText }}</button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { defineProps, defineEmits } from "vue";

// 定义 Props
const props = defineProps({
  isDarkMode: {
    type: Boolean,
    required: true
  }
});

// 定义 Emits
const emit = defineEmits(['toggle-theme']);

// 计算属性，根据模式返回不同的文本
const welcomeTip = computed(() => {
  return props.isDarkMode
    ? "これがおまえが行きたかった地獄だな"
    : "这里是安全的";
});
// 计算属性，根据模式返回不同的按钮文字
const buttonText = computed(() => {
  return props.isDarkMode
    ? "逃离"
    : "坠入";
});

// 切换主题的方法，通过 emit 通知父组件
function ChangeModel() {
  emit('toggle-theme');
}
</script>

<style scoped>
.home-header-top {
  position: fixed;
  width: 100vw;
  height: 60px;
  /* 默认 Dark 模式样式 */
  background-color: #121212; 
  color: #ffffff;
  border: 3px solid #ffffff; /* Dark 模式下边框颜色 */
  display: flex;
  justify-content: space-between;
  transition: all 0.3s ease; /* 添加过渡效果 */
}

/* Light 模式下的样式 */
.home-header-top.light-mode {
  background-color: #ffffff; /* Light 模式背景色 */
  color: #000000; /* Light 模式文字颜色 */
  border-color: #000000; /* Light 模式下边框颜色 */
}

.header-left {
  flex: 1;
  width: auto; /* 修改为自动宽度以适应内容 */
  height: 100%;
  background-color: #f8f6f644;
  text-align: center;
  line-height: 60px; /* 垂直居中 */
}

.header-left p {
  letter-spacing: 10px;
  margin: 0;
}

.header-right {
  width: 180px;
  height: 100%;
  text-align: center;
  line-height: 60px; /* 垂直居中 */
  cursor: pointer;
  background-color: #97b4aedd;
  transition: background-color 0.3s;
}

.header-right:hover {
  background-color: #859da8cc; /* 悬停效果 */
}
</style>