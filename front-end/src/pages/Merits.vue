<template>
  <div class="merits" ref="container">
    <score/>
    <!-- <img class="people" src="../assets/images/merits/people.png" alt="" /> -->
    <img class="fish" src="../assets/images/merits/fish.png" alt="" @click="clickFish"/>
    <img class="sticks" src="../assets/images/merits/sticks.png" alt="" @click="clickFish"/>

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
          <span>{{ live }}/1000</span>
        </div>
      </div>
    </div>

    <van-progress 
      class="progress"
      :percentage="live / 1000 * 100" 
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

export default {
  components: { Popup, Score },
  setup() {
    const container = ref(null);
    const count = ref(0);
    const live = ref(1000);
    const popups = ref([]);
    const store = useMeritsStore();
    let popupId = 0;
    const clickFish = (event)=>{
      store.merit++
      live.value--

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
      live,
      clickFish,
      removePopup,
      store
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
  position: absolute;
  left: 55%;
  top: 90%;
  transform: translate(-55%, -90%);
}
.sticks{
  position: absolute;
  left: 30%;
  top: 87%;
  transform: translate(-30%, -87%);
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
