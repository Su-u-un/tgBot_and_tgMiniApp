<template>
  <div class="frame">
    <router-link v-for="item in tabs" :key="item.path" :to="item.path">
      <div :class="{ active: isActive(item.path) }" class="overlap-group-wrapper"  >
        <div class="overlap-group" >
          <img class="img" :alt="item.label" :src="item.img" />
          <div class="text-wrapper">{{ item.label }}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import Merits from "../assets/images/Frame-13.svg";
import BOOSTS from "../assets/images/Frame-14.svg";
import TASKS from "../assets/images/Frame-15.svg";
import GAMES from "../assets/images/Frame-16.svg";
import friend from "../assets/images/friend-1.svg";

export default {
  name: "Frame",
  setup() {
    const route = useRoute();

    const tabs = [
      { path: '/friend', label: 'FRIEND' , img: friend},
      { path: '/tasks', label: 'TASKS' , img: TASKS},
      { path: '/merits', label: 'MERITS+' , img: Merits},
      { path: '/boosts', label: 'BOOSTS' , img: BOOSTS},
      { path: '/games', label: 'GAMES' , img: GAMES},
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

    return { tabs, isActive };
  },
};
</script>

<style scoped>
.frame a{
  text-decoration: none;
}
 .active {
  opacity: 1!important;
 }

.frame .overlap-group-wrapper {
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