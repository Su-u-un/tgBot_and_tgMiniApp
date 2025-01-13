<template>
  <div id="container">
    <Score/>
    <!-- <TaskBar class="bar"/> -->
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
  gap:5rem;
}
</style>
