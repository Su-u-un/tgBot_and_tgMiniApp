<template>
  <div class="frame">
    <router-link v-for="item in tabs" :key="item.path" :to="item.path">
      <div :class="{ active: isActive(item.path) }" class="overlap-group-wrapper"  >
        <div class="overlap-group" >
          <div class="text-wrapper">{{ item.label }}</div>
          <img class="img" :alt="item.label" :src="item.img" />
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
.tab-bar {
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #f5f5f5;
  border-top: 1rem solid #ddd;
  padding: 10px 0;
}
.tab-item {
  text-align: center;
  text-decoration: none;
  color: #666;
  flex: 1;
}
 .active {
  opacity: 1!important;
 }

.frame .overlap-group-wrapper {
  height: 72px;
  opacity: 0.6;
  position: relative;
  width: 54px;
}

.frame .overlap-group {
  height: 59px;
  left: 3px;
  position: relative;
  width: 48px;
}

.frame .text-wrapper {
  color: #ffffff;
  font-family: "SF Pro Text-Bold", Helvetica;
  font-size: 12px;
  height: 12px;
  left: 6px;
  letter-spacing: -0.41px;
  line-height: 12px;
  position: absolute;
  text-align: center;
  top: 47px;
  white-space: nowrap;
}

.frame .img {
  height: 48px;
  left: 0;
  position: absolute;
  top: 0;
  width: 48px;
}

.frame .div {
  color: #ffffff;
  font-family: "SF Pro Text-Bold", Helvetica;
  font-size: 12px;
  font-weight: 700;
  height: 12px;
  left: 4px;
  letter-spacing: -0.41px;
  line-height: 12px;
  position: absolute;
  text-align: center;
  top: 47px;
  white-space: nowrap;
}

.frame .overlap-wrapper {
  height: 72px;
  position: relative;
  width: 54px;
}

.frame .overlap {
  height: 59px;
  position: relative;
  width: 53px;
}

.frame .img-2 {
  height: 48px;
  left: 3px;
  position: absolute;
  top: 0;
  width: 48px;
}

.frame .text-wrapper-2 {
  color: #ffffff;
  font-family: "SF Pro Text-Bold", Helvetica;
  font-size: 12px;
  font-weight: 700;
  height: 12px;
  left: 0;
  letter-spacing: -0.41px;
  line-height: 12px;
  position: absolute;
  text-align: center;
  top: 47px;
  white-space: nowrap;
}

.frame .overlap-2 {
  height: 59px;
  left: 1px;
  position: relative;
  width: 50px;
}

.frame .img-3 {
  height: 48px;
  left: 2px;
  position: absolute;
  top: 0;
  width: 48px;
}
</style>