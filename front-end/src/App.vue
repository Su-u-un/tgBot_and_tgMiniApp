<template>
  <div id="app">
    <NavBar />
    <div class="view">
      <router-view/>
    </div>
    <TabBar class="bar" />
  </div>
</template>

<script setup>
import { onBeforeMount,  } from 'vue';
import { useMeritsStore } from "./store";
import api from './api';
import { newDay } from "./utils";
import TabBar from './components/TabBar.vue';
import NavBar from './components/NavBar.vue';
const store = useMeritsStore();

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
.bar{
  align-items: flex-start;
  background-color: #48413b99;
  border-radius: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  overflow: hidden;
  width: 22rem;
  height:4.5rem;
  position: fixed;
  bottom: 3rem;
}
.view{
  margin-top:4rem;
  width: 100%;
  height:calc(100vh - 11.5rem);
  margin-bottom: 3rem;
}
</style>
