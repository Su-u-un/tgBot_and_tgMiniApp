<template>
  <div id="app">
    <NavBar />
    <div class="view">
      <router-view/>
    </div>
    <TabBar class="bar" />
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import { useMeritsStore } from "./store";
import api from './api';
import TabBar from './components/TabBar.vue';
import NavBar from './components/NavBar.vue';

const store = useMeritsStore();

onBeforeMount(() => {
  api.getInfo().then((res) => {
    store.setInfo(res.data)
  })
})
</script>

<style scoped>
.bar{
  align-items: flex-start;
  background-color: #48413b99;
  border-radius: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  overflow: hidden;
  width: 22rem;
  height:4.5rem;
  position: fixed;
  bottom: 3rem;
}
.view{
  margin-top:4rem;
  width: 100%;
  height:calc(100vh - 11.5rem);
  margin-bottom: 3rem;
}
</style>
