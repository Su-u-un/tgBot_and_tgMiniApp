<template>
  <div class="frame" :style="{ display: display ? 'flex' : 'none' }">
    <router-link v-for="item in tabs" :key="item.path" :to="item.path === '/friend'? null : item.path">
      <div :class="{ active: isActive(item.path), overlapGroupWrapper: item.path === '/friend'? false : true }"  >
        <div style="height:100%;position: absolute;color: #fff;font-size: 1.1rem;padding-top: 0.8rem;text-align: center;backgroundColor: #48413b99;" :style="{ display: item.path === '/friend'? 'flex' : 'none' }">
          Coming<br>soon
        </div>
        <div class="overlap-group" :class="{ overlapGroupWrapper: item.path === '/friend'? true : false }">
          <img class="img" :alt="item.label" :src="item.img" />
          <div class="text-wrapper">{{ item.label }}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import Merits from "../assets/images/Frame-13.svg";
import BOOSTS from "../assets/images/Frame-14.svg";
import TASKS from "../assets/images/Frame-15.svg";
import AGENTS from "../assets/images/Frame-16.svg";
import friend from "../assets/images/friend-1.svg";

export default {
  name: "Frame",
  setup() {
    const route = useRoute();
    const display = ref(true);
    const tabs = [
      { path: '/friend', label: 'FRIEND' , img: friend},
      { path: '/tasks', label: 'TASKS' , img: TASKS},
      { path: '/merits', label: 'MERITS+' , img: Merits},
      { path: '/boosts', label: 'BOOSTS' , img: BOOSTS},
      { path: '/games', label: 'AGENTS' , img: AGENTS},
    ];

    const pattern = /^\/[^/]+/;

    const isActive = (path) => {
      if (route.path.split('/').filter(Boolean).length > 1) {
        // 使用正则提取第一部分
        const match = route.path.match(pattern)
        return path === match[0];
      }
      else return path === route.path;
    }

    return { tabs, isActive, display };
  }
};
</script>

<style scoped>
.frame{
  align-items: flex-start;
  background-color: #48413b99;
  border-radius: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  overflow: hidden;
  width: 22rem;
  height:4.5rem;
  position: fixed;
  bottom: 3rem;
}
.frame a{
  text-decoration: none;
}
 .active {
  opacity: 1!important;
 }

.frame .overlapGroupWrapper {
  opacity: 0.6;
  position: relative;
}

.frame .overlap-group {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.frame .text-wrapper {
  color: #ffffff;
  text-align: center;
  white-space: nowrap;
}

.frame .div {
  color: #ffffff;
  position: absolute;
  text-align: center;
  white-space: nowrap;
}

.frame .overlap-wrapper {
  position: relative;
}

.frame .overlap {
  position: relative;
}

.frame .img-2 {
  position: absolute;
}

.frame .text-wrapper-2 {
  color: #ffffff;
  left: 0;
  position: absolute;
  text-align: center;
  white-space: nowrap;
}

.frame .overlap-2 {
  position: relative;
}

.frame .img-3 {
  height: 48px;
  left: 2px;
  position: absolute;
  top: 0;
  width: 48px;
}
</style>