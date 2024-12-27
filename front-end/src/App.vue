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
  } 
  // 用户初始化
  api.getUser({id: store.user.id,username: store.user.first_name})
  // 获取用户功德体力
  api.getInfo({id: store.user.id}).then((r) => {
    const res = r.data
    const loginTime = new Date().getTime()
    if(newDay(res.data.updateTime, loginTime)){
      res.data.stamina = 1000;
    }
    store.setInfo(res.data)
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
