<template>
  <div id="app">
    <NavBar/>
    <div class="view">
      <router-view/>
    </div>
    <TabBar class="bar" v-if="show"/>
  </div>
</template>

<script setup>
import { onBeforeMount,ref, watch  } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useMeritsStore } from "./store";
import api from './api';
import { newDay } from "./utils";
import TabBar from './components/TabBar.vue';
import NavBar from './components/NavBar.vue';
const store = useMeritsStore();
const router = useRouter();
const route = useRoute();
const show = ref(true)

watch(() => route.path,(newPath, oldPath) => {
  show.value = newPath === '/budda'?false:true
  },{ immediate: true });

onBeforeMount(() => {
  // 通过bot api获取api
  const initData = window.Telegram.WebApp.initData; // 获取初始化数据
  if (initData) {
      const params = new URLSearchParams(initData);
      const user = params.get('user'); // 提取 'user' 数据
      if (user) {
          const userInfo = JSON.parse(user); // 转换为 JSON 对象
          store.user=userInfo
      }
  } else{
    store.user={ id:1 }
  }
  // 用户初始化
  api.getUser({id: store.user.id,username: store.user.first_name}).then((r) => {
    const res = r.data
    store.click = res.data.click
    store.limit = res.data.limit
  })
  // 获取用户功德体力
  api.getInfo({id: store.user.id}).then((r) => {
    const res = r.data
    const loginTime = new Date().getTime()
    if(newDay(res.data.updateTime, loginTime)){
      // 回满体力到上限
      res.data.stamina = store.limit.value;
      // 清空每日点击
      res.data.today = 0
      // 清空点击任务
      api.resetToday({id: store.user.id})
      // 回满bless和heal
      api.resetHeal({id: store.user.id})
      api.resetBless({id: store.user.id})
      // 获取用户任务状态
      api.getTask({id: store.user.id}).then((r) => {
        const res = r.data
        store.task = {
          joinTg: res.data.joinTg,
          followX: res.data.followX,
          todayTen: 0,
          todayHundred: 0,
          todayThousand: 0,
          heal: 3,
          bless: 3
        }
      })
    }else{
      // 获取用户任务状态
      api.getTask({id: store.user.id}).then((r) => {
        const res = r.data
        store.task = res.data
      })
    }
    store.setInfo(res.data)
    // 更新功德体力
    api.updateInfo({
        id: store.user.id,
        merits: store.merits,
        stamina: store.stamina,
        today: store.today
      })
  })
  

})


</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.view{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
