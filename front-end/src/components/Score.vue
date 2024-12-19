<template>
  <div id="score">
    <span class="math">{{ store.merits }}</span>
    <img src="../assets/images/merits/icon.png" alt=""/>
  </div>
</template>

<script setup>
import { useMeritsStore } from "../store";
const store = useMeritsStore();
</script>

<style scoped>
#score{
  margin-top:3rem;
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
</style>