<template>
  <div class="item">
      <div class="left">
        <div class="img">
          <img class="image" alt="" :src="props.image">
        </div>
        <div class="text">
          <div>{{ props.label }}</div>
          
          <div style="display:flex;align-items:center;gap:0.3rem">
            <img alt="" src="../../assets//images/tasks/gongde.png" style="max-width:1.2rem;max-height:1.2rem">
            2k<span style="color:#dfc587"> - level1</span>
          </div>
        </div>
      </div>
      <img class="btn" :src="arrow" alt="">
      
    </div> 
</template>

<script setup>
import arrow from '../../assets/images/boosts/arrow.png'
const props = defineProps(['label','image'])
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