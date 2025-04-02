<template>
  <div :class="['navbar',  { 'light-mode': !isDarkMode }]">
    <li><a href="#overview" class="active">Overview</a></li>
    <li><a href="#tracks-prizes">Tracks & Prizes</a></li>
    <li><a href="#sponsors">Sponsors</a></li>
    <li><a href="#events">Events</a></li>
    <li><a href="#faq">FAQ</a></li>
    <li><a href="#handbook">Participant Handbook</a></li>
    <li><a href="#discord">Discord</a></li>
   
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { computed } from "vue";
import { defineProps, defineEmits } from "vue";

// 定义 Props
const props = defineProps({
  isDarkMode: {
    type: Boolean,
    required: true
  }
});

</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.navbar {
  width: 100vw;
  height: 70px;
  display: flex;
  background-color: #59525284;
  color: #ffffff;
  justify-content: space-around;
  align-items: center;
  /* border: 3px solid #f9f6f6; */
}

/* light模式 */
.navbar.light-mode li {
  background-color: #fff;
  color: #000;
  border: 3px solid #000;
  a{
    color: #000;
  }
}
.navbar li {
  flex: 1;
  height: 100%;
  list-style: none;
  border: 3px solid #faf5f5;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar li:hover {
  background-color: #507695;
}
.navbar a {
  text-decoration: none;
  color: #ffffff;

 
}



</style>
