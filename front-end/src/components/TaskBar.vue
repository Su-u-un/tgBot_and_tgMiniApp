<template>
  <div class="frame">
    <router-link v-for="item in tabs" :key="item.path" :to="item.path">
      <div  class="overlap-group-wrapper"  >
        <div class="overlap-group" >
          <img class="img" :class="{ active: isActive(item.path) }" :alt="item.label" :src="item.img" />
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import fish from "../assets/images/tasks/fish.png";
import fire from "../assets/images/tasks/fire.png";
import rate from "../assets/images/tasks/rate.png";
import duihuakuang from "../assets/images/tasks/duihuakuang.png";
import game from "../assets/images/tasks/game.png";
import lingli from "../assets/images/tasks/lingli.png";


export default {
  name: "Frame",
  setup() {
    const route = useRoute();

    const tabs = [
      { path: '/tasks/lingli',  img: lingli},
      { path: '/tasks/rate',  img: rate},
      { path: '/tasks/duihuakuang',  img: duihuakuang},
      { path: '/tasks/fish',  img: fish},
      { path: '/tasks/fire',  img: fire},
      { path: '/tasks/game',  img: game},
      
    ];

    const isActive = (path) => route.path === path;

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
  border-radius: 1rem;
  background-color: #423a35;
 }

.frame .overlap-group-wrapper {
  opacity: 0.6;
  position: relative;
  width: 54px;
}

.frame .overlap-group {
  height: 48px;
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