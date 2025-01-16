<template>
  <div id="list">
    <div style="display:flex;flex-direction:column;gap:1rem">
      <BoostListItem label="Multi-Click" :image="click" type="click" :cost="store.click.cost" :level="store.click.level" :text="mutilText"/>
      <BoostListItem label="Energy-Limit" :image="energy" type="limit" :cost="store.limit.cost" :level="store.limit.level" :text="limitText"/>
      <BoostListItem label="Fast-Recovery" :image="fast" type="fast"/>
      <BoostListItem label="Auto-Budda" :image="budda" type="budda"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ElDrawer } from 'element-plus'
import BoostListItem from './BoostListItem.vue'
import click from '../../assets/images/boosts/click.png'
import energy from '../../assets/images/boosts/energy.png'
import fast from '../../assets/images/boosts/fast.png'
import budda from '../../assets/images/boosts/budda.png'
import api from '../../api';
import { useMeritsStore } from '../../store';
const store = useMeritsStore();

const mutilText = ref(`For each level, the number of merit per tap increases. That's helps you earn merit in a faster and more efficient way.`)
const limitText = ref(`For each level, the total amount of energy increasea. That's increase the cap of earning merit per day.`)
</script>

<style scoped>
#list{
  max-height:20rem;
  overflow-y: auto;
  width:100%;
}
.tipWrap{
  z-index: 9999;
  width: 100%;
  position: fixed;
  top:0;
  left:0;
  display: flex;
  justify-content: center;
}
.quitTip{
  background: url(../../assets/images/boosts/close.png) no-repeat center;
  background-size: cover;
  width: 1rem;
  height: 1rem;
}
.tip{
  background-color: #fff;
  width: 100%;
  height:4rem;
  border-radius: 0.5rem;
  margin: 0.2rem 0.5rem;
  padding:  0 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tipImg{
  width: 2rem;
  height: 3rem;
  background: url(../../assets/images/boosts/click.png) no-repeat center;
  background-size: cover;
}
.quit{
  background: url(../../assets/images/boosts/close.png) no-repeat center;
  background-size: cover;
  position: absolute;
  top:1rem;
  right:1rem;
  width: 1.5rem;
  height: 1.5rem;
}
.drawerBody{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn{
  border-radius: 2rem;
  background-color: #9f8465;
  width:19rem;
  height:3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:1rem;
  color:white;
  font-size:1.8rem;
}
</style>