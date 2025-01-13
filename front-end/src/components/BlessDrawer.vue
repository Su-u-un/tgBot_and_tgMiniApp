<template>
  <div style="position:absolute">
    <el-drawer v-model="props.isshow" :close-on-click-modal="false" direction="btt" size="30rem" :with-header="false" style="background-color: #fffff3;border-top-left-radius: 2rem;border-top-right-radius: 2rem;">
      <div class="drawerBody">
        <div class="quit" @click="quit"></div>
        <div style="font-size: 2rem;">Budda Bless</div>
        <div class="probability-container">
    <div class="probability-item">
      <div class="probability-text"><span>10%</span> <div>10<img alt="" src="../assets//images/tasks/gongde.png" style="max-width:0.9rem;max-height:0.9rem;margin-left:0"></div></div>
    </div>
    <div class="probability-item">
      <div class="probability-text"><span>10%</span> <div>20<img alt="" src="../assets//images/tasks/gongde.png" style="max-width:0.9rem;max-height:0.9rem;margin-left:0"></div></div>
    </div>
    <div class="probability-item">
      <div class="probability-text"><span>30%</span> <div>50<img alt="" src="../assets//images/tasks/gongde.png" style="max-width:0.9rem;max-height:0.9rem;margin-left:0"></div></div>
    </div>
    <div class="probability-item">
      <div class="probability-text"><span>20%</span> <div>120<img alt="" src="../assets//images/tasks/gongde.png" style="max-width:0.9rem;max-height:0.9rem;margin-left:0"></div></div>
    </div>
    <div class="probability-item">
      <div class="probability-text"><span>10%</span> <div>150<img alt="" src="../assets//images/tasks/gongde.png" style="max-width:0.9rem;max-height:0.9rem;margin-left:0"></div></div>
    </div>
    <div class="probability-item">
      <div class="probability-text"><span>10%</span> <div>250<img alt="" src="../assets//images/tasks/gongde.png" style="max-width:0.9rem;max-height:0.9rem;margin-left:0"></div></div>
    </div>
    <div class="probability-item">
      <div class="probability-text"><span>5%</span> <div>500<img alt="" src="../assets//images/tasks/gongde.png" style="max-width:0.9rem;max-height:0.9rem;margin-left:0"></div></div>
    </div>
    <div class="probability-item">
      <div class="probability-text"><span>5%</span> <div>1000<img alt="" src="../assets//images/tasks/gongde.png" style="max-width:0.9rem;max-height:0.9rem;margin-left:0"></div></div>
    </div>
  </div>
        <div class="btn" @click="buy">
            <img alt="" src="../assets//images/tasks/gongde.png" style="max-width:1rem;max-height:1rem;margin-left:0">
            200 
            <span style="margin-left:1rem;">{{store.bless}}/3</span>
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

const props = defineProps(['isshow'])

const store = useMeritsStore();


const timer = ref(null)
const tipShow = ref(false)
const tipLabel = ref('')
const tipContent = ref('')

// 定义事件
const emit = defineEmits(['update:isshow']);

const quit = () => {
  emit('update:isshow',false); // 触发父组件传入的回调
}

const quitTip = () => { 
  tipShow.value = false
}

function getRandomCoin() {
  // 定义概率区间和对应的结果
  const probabilities = [
    { value: 10, weight: 10 },  // 10% 概率
    { value: 20, weight: 10 },  // 10% 概率
    { value: 50, weight: 30 },  // 30% 概率
    { value: 120, weight: 20 }, // 20% 概率
    { value: 150, weight: 10 }, // 10% 概率
    { value: 250, weight: 10 }, // 10% 概率
    { value: 500, weight: 5 },  // 5% 概率
    { value: 1000, weight: 5 }, // 5% 概率
  ];

  // 计算总权重
  const totalWeight = probabilities.reduce((sum, item) => sum + item.weight, 0);

  // 生成 0 到 totalWeight 的随机数
  const random = Math.random() * totalWeight;

  // 根据随机数确定结果
  let cumulativeWeight = 0;
  for (const item of probabilities) {
    cumulativeWeight += item.weight;
    if (random <= cumulativeWeight) {
      return item.value;
    }
  }
}


const buy = ()=>{
  if(store.merits < 200 || store.bless <= 0){
    tipLabel.value = 'Incomplete'
    tipContent.value = 'Failed'

    tipShow.value = true
    if(timer.value) clearTimeout(timer.value)
    timer.value = setTimeout(() => {
      tipShow.value = false
    },1000)
  }else{
    store.merits -= 200

    const coin = getRandomCoin()
    store.merits += coin
    store.bless -= 1
    tipLabel.value = 'Congratulations'
    tipContent.value = 'GET '+coin

    tipShow.value = true
    if(timer.value) clearTimeout(timer.value)
    timer.value = setTimeout(() => {
      tipShow.value = false
    },1000)
  }
}


const buyLimit = () => {
  // 向后端发起请求，执行升级
  api.upgradeLimit({
    id: store.user.id
  }).then((r) => {
    const res = r.data
    if(res.code === 200){
      store.limit.level = res.data.level
      store.limit.cost = res.data.cost
      store.limit.value = res.data.value
      store.merits = res.data.merits

      tipLabel.value = 'Congratulations!'
      tipContent.value = 'Reward received'

      tipShow.value = true
      setTimeout(() => {
        tipShow.value = false
      },1000)
    }
    else{

      tipLabel.value = 'Incomplete'
      tipContent.value = 'Failed'

      tipShow.value = true
      setTimeout(() => {
        tipShow.value = false
      },1000)
    }
  })
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
  margin-top:3rem;
  color:white;
  font-size:1.8rem;
}
.probability-container {
      display: grid;
      grid-template-columns: 1fr 1fr; /* 两列布局 */
      gap: 1.5rem;
      max-width: 15rem;
      margin: auto;
      margin-top:2rem;
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