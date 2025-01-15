<template>
  <div style="position:absolute">
    <el-drawer v-model="props.isshowHeal" :close-on-click-modal="false" direction="btt" size="15rem" :with-header="false" style="background-color: #fffff3;border-top-left-radius: 2rem;border-top-right-radius: 2rem;">
      <div class="drawerBody">
        <div class="quit" @click="quit"></div>
        <div style="font-size: 2rem;">Budda Heal</div>

<div style="font-size: 1.3rem;text-align:center">Do you want to spend 50 points to restore all your stamina? </div>
<div>(If your stamina is full, you cannot restore it)</div>

        <div class="btn" @click="buy">
            <img alt="" src="../assets//images/tasks/gongde.png" style="max-width:1rem;max-height:1rem;margin-left:0">
            200 
            <span style="margin-left:1rem;">{{store.task.heal}}/3</span>
        </div>
      </div>
    </el-drawer>
    <div class="tipWrap" :style="{ display: tipShow ? 'flex' : 'none' }">
      <div class="tip">
        <div style="display:flex;gap:0.5rem;flex-direction:row">
          <!-- <div class="tipImg"></div> -->
          <div>
            <div style="color:#8d8072; font-size:1.2rem">{{ tipLabel }}</div>
            <div style="color: #bbac9a;font-size:0.9rem">{{ tipContent }}</div>
          </div>
        </div>
        <div @click="quitTip" class="quitTip"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ElDrawer } from 'element-plus'
import { useMeritsStore } from '../store';
import api from '../api';

const props = defineProps(['isshowHeal'])

const store = useMeritsStore();


const timer = ref(null)
const tipShow = ref(false)
const tipLabel = ref('')
const tipContent = ref('')

// 定义事件
const emit = defineEmits(['update:isshowHeal']);

const quit = () => {
  emit('update:isshowHeal',false); // 触发父组件传入的回调
}

const quitTip = () => { 
  tipShow.value = false
}

const buy = ()=>{
  if(store.task.heal <= 0 || store.merits < 200 || store.stamina == store.limit.value) {
    tipLabel.value = 'Incomplete'
    tipContent.value = 'Failed'

    tipShow.value = true
    if(timer.value) clearTimeout(timer.value)
    timer.value = setTimeout(() => {
      tipShow.value = false
    },1000)
  }else{
    store.task.heal -= 1
    store.merits = Number(store.merits) - 200

    if(store.limit.value-store.stamina < 200) store.stamina = store.limit.value
    else store.stamina = Number(store.stamina) + 200

    // 体力回复-1
    api.heal({id: store.user.id})
    // 直接更新后端的功德体力
    api.updateInfo({
      id: store.user.id,
      merits: store.merits,
      stamina: store.stamina,
      today: store.today
    })
    tipLabel.value = 'Congratulations'
    tipContent.value = ""


    tipShow.value = true
    if(timer.value) clearTimeout(timer.value)
    timer.value = setTimeout(() => {
      tipShow.value = false
    },1000)
  }
  
}

</script>

<style scoped>
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
  background: url(../assets/images/boosts/close.png) no-repeat center;
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
  background: url(../assets/images/boosts/click.png) no-repeat center;
  background-size: cover;
}
.quit{
  background: url(../assets/images/boosts/close.png) no-repeat center;
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
  margin-top:2rem;
  color:white;
  font-size:1.8rem;
}
.probability-container {
      display: grid;
      grid-template-columns: 1fr 1fr; /* 两列布局 */
      gap: 1.5rem;
      max-width: 15rem;
      margin: auto;
      margin-top:1rem;
    }
    .probability-item {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0.1rem solid #ccc;
      border-radius: 0.5rem;
      padding: 0.5rem;
      box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.1);
      text-align: center;
    }
    .probability-text {
      display:flex;
      align-items: center;
      justify-content: center;
      gap:0.8rem;
      font-size: 1.2rem;
    }
</style>