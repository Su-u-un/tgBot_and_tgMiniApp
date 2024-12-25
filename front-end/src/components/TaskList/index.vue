<template>
  <div id="list" >
    <TaskListItem label="Join Telegram"/>
    <TaskListItem label="Join Telegram"/>
    <TaskListItem label="Subscribe on X"/>
    <TaskListItem label="Like and Repost on X"/>

  </div>
</template>

<script setup>
import TaskListItem from './TaskListItem.vue'

</script>

<style scoped>
#list{
  display:flex;
  flex-direction: column;
  gap:1rem;
}

</style>