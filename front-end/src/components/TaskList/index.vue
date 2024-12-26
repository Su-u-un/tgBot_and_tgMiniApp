<template>
  <div id="list" >
    <TaskListItem label="Join Telegram" link="https://t.me/aibuddablessu" :image="tg"/>
    <TaskListItem label="Subscribe on X" link="https://x.com/aibuddablessu" :image="x"/>
    <!-- <TaskListItem label="Like and Repost on X"/> -->
  </div>
</template>

<script setup>
import TaskListItem from './TaskListItem.vue'
import tg from '../../assets/images/tasks/tg.png'
import x from '../../assets/images/tasks/x.png'

</script>

<style scoped>
#list{
  display:flex;
  flex-direction: column;
  gap:1rem;
}

</style>