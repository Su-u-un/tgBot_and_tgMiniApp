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
.frame{
  margin-top: 4rem;
  margin-bottom: 1rem;
  padding: 0 1rem;
  align-items: center;
  background-color: #fffef7;
  border-radius: 1rem;
  display: flex;
  overflow: hidden;
  width: 20rem;
  height: 3rem;
  gap:1rem;
}
.active {

}

.frame .overlap-group-wrapper {
  position: relative;
}

.frame .overlap-group {
  display: flex;
}

.frame .text-wrapper {
  color: #ffffff;
  text-align: center;
  white-space: nowrap;
}

.frame .img {
  max-width: 60%;
  max-height: 60%;
  display: block;
  margin: auto;
}

.frame .div {
  color: #ffffff;
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
  position: absolute;
  text-align: center;
  white-space: nowrap;
}

.frame .overlap-2 {
  position: relative;
}

.frame .img-3 {
  position: absolute;
}
</style>