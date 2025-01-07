<template>
  <div class="item" @click="click">
      <div class="left">
        <div class="img">
          <img class="image" alt="" :src="props.image">
        </div>
        <div class="text">
          <div>{{ props.label }}</div>
          
          <div style="display:flex;align-items:center;gap:0.3rem">
            <img alt="" src="../../assets//images/tasks/gongde.png" style="max-width:1.2rem;max-height:1.2rem">
            {{ props.cost }}<span style="color:#dfc587"> - level{{ props.level }}</span>
          </div>
        </div>
      </div>
      <img class="btn" :src="arrow" alt="">
      <BoostDrawer :isshow="isshow" :type="props.type" :imgPopup="img" :label="props.label" :cost="props.cost" :level="props.level" @update:isshow="updateShowModal"/>
  </div> 
</template>

<script setup>
import { useMeritsStore } from "../../store";
import arrow from '../../assets/images/boosts/arrow.png'
import BoostDrawer from '../BoostDrawer.vue'
import { ref } from 'vue';
import clickPopup from '../../assets/images/boosts/clickPopup.png'
const store = useMeritsStore();
const props = defineProps(['label','image', 'type', 'cost', 'level'])

const isshow = ref(false)
const img = ref('')
const cost = ref(20)
const level = ref(1)


const click = () => {
  isshow.value = true
  if(props.type === 'click') {
    img.value = clickPopup
  }
  else if(props.type === 'limit') {
    img.value = clickPopup
  }
  
}

const updateShowModal = (newVal) => {
  isshow.value = newVal;
};




</script>

<style scoped>
.img{
  width:3rem;
  height:3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: #877561;
  margin-right:0.5rem;
}
.image{
  max-width: 85%;
  max-height: 85%;
}
.item{
  align-items: flex-start;
  background-color: #9f8465;
  border-radius: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: 20rem;
  padding: 0.5rem 1rem ;
}
.left{
  display: flex;
  flex-direction: row;
}
.text{
  text-align: left;
  color:#ffe7ae;
}
.btn{
  max-width: 1rem;
  max-height: 1rem;
}
</style>