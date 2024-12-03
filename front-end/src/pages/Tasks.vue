<template>
  <div id="container">
    <Score/>
    <TaskBar class="bar"/>
    <router-view/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { TaskBar, Score } from "../components";

</script>

<style scoped>
#container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
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
.bar{
  margin-top: 4rem;
  margin-bottom:1rem;
  align-items: flex-start;
  background-color: #48413b99;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 22rem;
}
</style>
