<template>
  <div class="item" @click="click">
    <div style="position: absolute;height:100%;width:100%;color: #fff;font-size: 1.8rem;justify-content: center;align-items: center;backgroundColor: #48413b99" :style="{ display: props.type === 'fast'||props.type === 'budda'? 'flex' : 'none' }">Coming soon</div>
    <div class="left">
      <div class="img">
        <img class="image" alt="" :src="props.image">
      </div>
      <div class="text">
        <div>{{ props.label }}</div>
        
        <div style="display:flex;align-items:center;gap:0.3rem">
          <img alt="" src="../../assets//images/tasks/gongde.png" style="max-width:1.2rem;max-height:1.2rem">
          {{ props.cost||200 }}<span style="color:#dfc587"> - level{{ props.level||1 }}</span>
        </div>
      </div>
    </div>
    <img class="btn" :src="arrow" alt="">
    <BoostDrawer :isshow="isshow" :type="props.type" :imgPopup="img" :label="props.label" :cost="props.cost" :level="props.level" @update:isshow="updateShowModal"
    :text="props.text"/>
  </div> 
</template>

<script setup>
import { useMeritsStore } from "../../store";
import arrow from '../../assets/images/boosts/arrow.png'
import BoostDrawer from '../BoostDrawer.vue'
import { ref } from 'vue';
import clickPopup from '../../assets/images/boosts/clickPopup.png'
import limitPopup from '../../assets/images/boosts/limitPopup.png'
const store = useMeritsStore();
const props = defineProps(['label','image', 'type', 'cost', 'level','text'])

const isshow = ref(false)
const img = ref('')
const cost = ref(20)
const level = ref(1)


const click = () => {
  if(props.type === 'click') {
    isshow.value = true
    img.value = clickPopup
  }
  else if(props.type === 'limit') {
    isshow.value = true
    img.value = limitPopup
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
  position: relative;
  align-items: flex-start;
  background-color: #9f8465;
  border-radius: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: 20rem;
  padding: 0.5rem 0 ;
}
.left{
  display: flex;
  flex-direction: row;
  margin-left: 0.5rem;
}
.text{
  text-align: left;
  color:#ffe7ae;
}
.btn{
  margin-right: 0.5rem;
  max-width: 1rem;
  max-height: 1rem;
}
</style>