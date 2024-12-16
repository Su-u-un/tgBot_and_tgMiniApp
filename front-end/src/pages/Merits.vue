<template>
  <div class="merits" ref="container">
    <score/>
    <div style="position: absolute;bottom:3rem;height:10rem;width:10rem;">
      <img class="fish" src="../assets/images/merits/fish.png" alt="" @click="clickFish"/>
      <img class="sticks" :class="{ 'animate-hit': isHitting }"  src="../assets/images/merits/sticks.png" alt="" @click="clickFish"/>
    </div>
    <Popup
      v-for="(popup, index) in popups"
      :key="popup.id"
      :initialX="popup.x"
      :initialY="popup.y"
      @ended="removePopup(index)"
    />

    <div class="life-wrap">
      <div class="life">
        <img src="../assets/images/merits/Rectangle-3.png" alt="" >
        <div>
          <span>{{ store.stamina }}/1000</span>
        </div>
      </div>
    </div>
    <audio ref="clickSound">
      <source src="../assets/music.mp3" type="audio/mpeg">
    </audio>

    <van-progress 
      class="progress"
      :percentage="store.stamina / 1000 * 100" 
      stroke-width="8" 
      :show-pivot="false" 
      track-color="#9f9081"
      color="#edb34a"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import { useMeritsStore } from "../store";
import { Popup, Score } from "../components";
import api from "../api";

export default {
  components: { Popup, Score },
  setup() {
    const isHitting = ref(false);
    const container = ref(null);
    const count = ref(0);
    const popups = ref([]);
    const clickSound = ref(null);
    const store = useMeritsStore();
    let popupId = 0;
    
    const clickFish = (event)=>{
      clickSound.value.currentTime = 0
      clickSound.value.play()

      isHitting.value = false;
      isHitting.value = true;
      setTimeout(() => {
        isHitting.value = false;
      },100)

      store.merits++
      store.stamina--
      
      api.updateInfo({
        id: store.user.id,
        merits:store.merits ,
        stamina:store.stamina
      })
      // 生成弹出提示
      const x = event.clientX + 50
      const y = event.clientY - 100

      popups.value.push({
        id: popupId++,
        x,
        y
      });
    }

    const removePopup = (index) => {
      popups.value.splice(index, 1);
    };

    return {
      popups,
      container,
      count,
      clickSound,
      clickFish,
      removePopup,
      store,
      isHitting
    }
  }
};
</script>

<style scoped>
#score{
  margin-top:0rem;
  font-size: 28px;
  font-weight: bold;
  line-height: 38px;
  height: 38px;
  display: flex;
  align-items: center;
}
.math{
  margin-right: 10px;
}
.people{
  width: 100%;
}
.fish{
  left:2rem;
  position: absolute;
  
}
.sticks{
  position: absolute;
  left:-2rem;
  top:-2rem;
  transform-origin: bottom left;
  transition: transform 0.2s;
}
.animate-hit {
  transform: rotate(10deg); /* 敲击的旋转角度 */
}
.merits {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: url(../assets/images/merits/people.png) no-repeat center center;
  background-size: contain;
}
.life-wrap{
  position: absolute;
  background-color: #736a5c;
  border-radius: 10px;
  bottom: 2rem;
  color:white;
}
.life{
  padding: 0 10px;
  display: flex;
  align-items: center;
}
.progress{
  position: absolute;
  bottom: 1rem;
  width: 300px;
}
.subtitleCountTip {
  height: 35px;
  line-height: 35px;
  /* color: #FFFFFF; */
  position: absolute;
  left: 50%;
  font-size: 36px;
  animation: mymove 1s;
  opacity: 0;
}

@keyframes mymove {
  from {top: -40px; opacity: 1;}
  to {top: -80px; opacity: 0;}
}
</style>
