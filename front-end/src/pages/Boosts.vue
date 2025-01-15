<template>
  <div class="boost">
    <Score/>
    <div>
      <div class="label">Daily Boosts</div>
      <div class="daily">
        <div class="item" @click="bless">
          <div>
            <div class="title">Budda Bless</div>
            <div style="display:flex;align-items:center;">
              <img alt="" src="../assets//images/tasks/gongde.png" style="max-width:1rem;max-height:1rem;margin-left:0">
              200 
              <span style="margin-left:1rem;">{{store.task.bless}}/3</span>
            </div>
          </div>
          <img src="../assets/images/boosts/burn.png" alt=""/>
        </div>
        <div class="item" @click="heal">
          <div>
            <div class="title">Budda Heal</div>
            <div style="display:flex;align-items:center;">
              <img alt="" src="../assets//images/tasks/gongde.png" style="max-width:1rem;max-height:1rem;margin-left:0">
              200 
              <span style="margin-left:1rem;">{{store.task.heal}}/3</span>
            </div>
          </div>
          <img src="../assets/images/boosts/light.png" alt=""/>
        </div>
        <BlessDrawer :isshow="isshow" @update:isshow="isshow = $event"/>
        <HealDrawer :isshowHeal="isshowHeal" @update:isshowHeal="isshowHeal = $event"/>
      </div>
    </div>
    <div class="upgrade">
      <div class="label">Upgrades</div>
      <BoostList/>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BlessDrawer from '../components/BlessDrawer.vue'
import HealDrawer from '../components/HealDrawer.vue'

import { BoostList, Score, } from "../components";
import { useMeritsStore } from "../store";
import api from "../api";

const store = useMeritsStore();
const isshow = ref(false)
const isshowHeal = ref(false)

const bless = () => {
  isshow.value = true
}
const heal = () => {
  isshowHeal.value = true
}
</script>

<style scoped>
.boost{
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 18.5rem);
}
.label{
  font-size:2rem;
  color:#6a5b4a;
}
.daily {
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  width:22rem;
}
.item {
  border-radius:1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #b49470;
  padding: 0.8rem;
  color: #ffe7ae;
  height:3rem;
  width:9rem
}
.item .title{
  font-size:1.3rem;
  color:white;
}
.item img{
  margin-left:0.5rem;
  max-width: 2.5rem;
  max-height: 2.5rem;
}
.upgrade{
  height:60%;
}
</style>
