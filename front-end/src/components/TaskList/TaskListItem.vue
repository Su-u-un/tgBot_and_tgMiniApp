<template>
  <div class="item">
      <div class="left">
        <div class="img">
          <img class="image" alt="" :src="props.image">
        </div>
        <div class="text">
          <div>{{ props.label }}</div>
          <div style="display:flex;align-items:center;gap:0.3rem">
            <img alt="" src="../../assets//images/tasks/gongde.png">
            {{ props.reward }}
          </div>
        </div>
      </div>
      <div class="btn" @click="click" :style="{opacity: props.done ? 0.5 : 1}">{{ props.done ? 'DONE' : 'START'}}</div>
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
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useMeritsStore } from "../../store";
import api from "../../api";

const props = defineProps(['label','link','image', 'type', 'done', 'reward'])
const store = useMeritsStore();

const tipShow = ref(false)
const tipLabel = ref('')
const tipContent = ref('')

const click = () => {
  if(!props.done && props.type == 'tg'){
    api.joinTg({
      id: store.user.id
    }).then((r) => {
      if(r.data.code === 200){
        store.merits = store.merits + 2000
        store.task.joinTg = 1
        props.done = 1
        window.location.href = props.link
      }else{
        console.log(r.message);
      }
    })
  }
  else if(!props.done && props.type == 'x'){
    api.followX({
      id: store.user.id
    }).then((r) => {
      if(r.data.code === 200){
        store.merits = store.merits + 2000
        store.task.followX = 1
        props.done = 1
        window.location.href = props.link
      }else{
        console.log(r.message);
      }
    })
  }
  else if(!props.done && props.type == 'today'){
    // 执行每日活跃度奖励
    api.today({
      id: store.user.id,
      type: props.link
    }).then((r) => {
      if(r.data.code === 200){
        store.merits = r.data.data.merits
        store.task[props.link] = 1
        props.done = 1
      }else{
        tipLabel.value = 'Incomplete'
        tipContent.value = 'Failed'

        tipShow.value = true
        setTimeout(() => {
          tipShow.value = false
        },1000)
      }
    })
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
  background: url(../../assets/images/boosts/click.png) no-repeat center;
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
.img{
  width:2rem;
  height:2rem;
  border-radius: 100%;
  margin-right:0.5rem;
}
.text img{
  max-width:1.5rem;
  max-height:1.5rem;
  border-radius: 100%;
  margin-right:0.5rem;
}
.image{
  max-width: 2rem;
  max-height: 2rem;
}
.item{
  align-items: flex-start;
  background-color: #9f8465;
  border-radius: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: 20rem;
  padding: 0.5rem 1rem ;
}
.left{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.text{
  text-align: left;
  color:#ffe7ae;
}
.btn{
  width: 4.2rem;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  background-color: #fff1cc;
  padding:0.5rem;
  border-radius: 0.5rem;
  color: #7a614d;
  text-decoration: none;
}
</style>