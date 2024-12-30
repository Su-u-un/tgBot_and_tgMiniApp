<template>
  <div class="merits" ref="container">
    <div>敲了{{ cishi }}次</div>
    <div @click="goBudda">Budda></div>
    <div style="position: absolute;bottom:4rem;height:10rem;width:10rem;">
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
    <div class="people" @click="clickFish"></div>

    <div class="life-wrap">
      <div class="life">
        <img style="height:1.5rem;margin-right:0.5rem" src="../assets/images/merits/Rectangle-3.png" alt="" >
        <div>
          <span>{{ store.stamina }}/1000</span>
        </div>
      </div>
    </div>
    <audio ref="clickSound" id="nimade">
      <source src="../assets/music.mp3">
    </audio>

    <van-progress 
      class="progress"
      :percentage="store.stamina / 1000 * 100" 
      stroke-width="8" 
      :show-pivot="false" 
      track-color="#816b51"
      color="#ffd02e"
    />
  </div>
</template>

<script>
import mp3url from "../assets/music.mp3";
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { useMeritsStore } from "../store";
import { Popup, Score } from "../components";
import api from "../api";
import { Howl } from 'howler'

export default {
  components: { Popup, Score },
  setup() {
    const router = useRouter();
    const isHitting = ref(false);
    const container = ref(null);
    const count = ref(0);
    const popups = ref([]);
    const clickSound = ref(null);
    const store = useMeritsStore();
    let popupId = 0;
    const mp3 = ref()
    const cishi = ref(0)

    onBeforeMount(() => {
      mp3.value = new Howl({
        src: [mp3url],
        volume: 1.0,
        onend: function() {
          console.log('click');
        }
      })
    })
    
    const clickFish = (event)=>{
      let nimade = document.getElementById("nimade")
      cishi.value++
      mp3.value.currentTime = 0
      mp3.value.play()
      // nimade.currentTime = 0
      // nimade.play();
      

      isHitting.value = false;
      isHitting.value = true;
      setTimeout(() => {
        isHitting.value = false;
      },100)

      store.merits++
      store.stamina--
      
      // api.updateInfo({
      //   id: store.user.id,
      //   merits:store.merits ,
      //   stamina:store.stamina
      // })
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

    const goBudda = () => {
      router.push("/budda");
    };

    return {
      popups,
      container,
      count,
      clickSound,
      clickFish,
      removePopup,
      goBudda,
      store,
      isHitting,
      cishi
    }
  }
};
</script>

<style scoped>
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
  height: calc(100vh - 11.5rem);
}
.people{
  background: url(../assets/images/merits/people.png) no-repeat center center;
  background-size: auto 115% ;
  height:30rem;
  width: 20rem;
}
.life-wrap{
  position: absolute;
  background-color: #736a5c;
  border-radius: 10px;
  bottom: 3rem;
  background-color:white;
}
.life{
  padding: 0.3rem 1rem;
  display: flex;
  align-items: center;
  color: #806a50;
}
.progress{
  position: absolute;
  bottom: 2rem;
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
