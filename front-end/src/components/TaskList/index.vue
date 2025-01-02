<template>
  <div id="list" >
    <TaskListItem label="Join TG Community" link="https://t.me/aibuddaofficial" :image="tg" type="tg" :done="tgDone"/>
    <TaskListItem label="Follow X" link="https://x.com/aibuddablessu" :image="x" type="x" :done="xDone"/>
    <!-- <TaskListItem label="Like and Repost on X"/> -->
  </div>
</template>

<script setup>
import TaskListItem from './TaskListItem.vue'
import tg from '../../assets/images/tasks/tg.png'
import x from '../../assets/images/tasks/x.png'
import { useMeritsStore } from "../../store";

const store = useMeritsStore();
const tgDone = store.task.joinTg
const xDone = store.task.followX


</script>

<style scoped>
#list{
  display:flex;
  flex-direction: column;
  gap:1rem;
}

</style>