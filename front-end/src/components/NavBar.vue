<template>
  <div class="container">
    <close/>
    <div id="title">aiBudda</div>
    <more/>
  </div>
  
</template>

<script setup>
import Close from './Close.vue';
import More from './More.vue';

</script>

<style scoped>
#title{
  position: absolute;
  margin-left:11rem;
  margin-top: 0.5rem;
}
.container{
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height:2rem;
  padding:1rem 0;
}
</style>