<template>
  <div class="page">
    <div>Coming soon</div>
    <div @click="click">multi-click : Level{{ clickLevel }}</div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const clickLevel = ref(1)


const click = ()=>{
  // 向后端发起请求，进行升级
  
}



</script>
<style scoped>
.page{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  font-size: 3rem;
}
</style>
