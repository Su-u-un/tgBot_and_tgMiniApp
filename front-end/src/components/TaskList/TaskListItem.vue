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
            2k
          </div>
        </div>
      </div>
      <div class="btn" @click="click" :style="{opacity: props.done ? 0.5 : 1}">{{ props.done ? 'DONE' : 'START'}}</div>
    </div>
</template>

<script setup>
import { useMeritsStore } from "../../store";
import api from "../../api";

const props = defineProps(['label','link','image', 'type', 'done'])
const store = useMeritsStore();

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
}

</script>

<style scoped>
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