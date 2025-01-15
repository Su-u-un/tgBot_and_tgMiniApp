<template>
  <div id="list">
    <div style="display:flex;flex-direction:column;gap:1rem">
      <BoostListItem label="Multi-Click" :image="click" type="click" :cost="store.click.cost" :level="store.click.level" :text="mutilText"/>
      <BoostListItem label="Energy-Limit" :image="energy" type="limit" :cost="store.limit.cost" :level="store.limit.level" :text="limitText"/>
      <BoostListItem label="Fast-Recovery" :image="fast" type="fast"/>
      <BoostListItem label="Auto-Budda" :image="budda" type="budda"/>


      <!-- <el-drawer v-model="isshow"  direction="btt" size="30rem" :with-header="false" style="background-color: #fffff3;border-top-left-radius: 2rem;border-top-right-radius: 2rem;">
        <div class="drawerBody">
          <div class="quit" @click="quit"></div>
          <img src="../../assets/images/boosts/clickPopup.png" alt="" style="width:13rem;height:13rem;">
          <div style="font-size:1.5rem;color:#7b5f35">Multi-Click</div>
          <div style="width:21rem;text-align:center;color:#9e7c4c">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena</div>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-top:1rem">
            <img src="../../assets/images/merits/icon.png" style="max-height:1.5rem;max-width:1.5rem;margin-right:2rem" alt=""/>
            <span style="color:#d6b363">{{ store.click.cost }}-Level{{ store.click.level }}</span>
          </div>
          <div class="btn" @click="buy">BUY</div>
        </div>
      </el-drawer>
      <div class="tipWrap" :style="{ display: tipShow ? 'flex' : 'none' }">
        <div class="tip">
          <div style="display:flex;gap:0.5rem;flex-direction:row">
            <div class="tipImg"></div>
            <div>
              <div style="color:#8d8072; font-size:1.2rem">{{ tipLabel }}</div>
              <div style="color: #bbac9a;font-size:0.9rem">{{ tipContent }}</div>
            </div>
          </div>
          <div @click="quitTip" class="quitTip"></div>
        </div>
      </div> -->
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

const mutilText = ref('Multi-Click allows you to earn more points with every click. Each upgrade increases the rewards, making it easier and faster to reach your goals.')
const limitText = ref('Energy-Limit increases the maximum stamina, allowing you to store more energy and extend your activity time.')
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