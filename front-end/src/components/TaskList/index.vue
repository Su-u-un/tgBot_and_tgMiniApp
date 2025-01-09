<template>
  <div id="list" >
    <TaskListItem label="Join TG Community" link="https://t.me/aibuddaofficial" :image="tg" type="tg" :done="store.task.joinTg" reward="2k"/>
    <TaskListItem label="Follow X" link="https://x.com/aibuddablessu" :image="x" type="x" :done="store.task.followX" reward="2k"/>
    <TaskListItem label="click 10" link="todayTen" :image="x" type="today" :done="store.task.todayTen" reward="5"/>
    <TaskListItem label="click 100" link="todayHundred" :image="x" type="today" :done="store.task.todayHundred" reward="50"/>
    <TaskListItem label="click 1000" link="todayThousand" :image="x" type="today" :done="store.task.todayThousand" reward="500"/>
    <!-- <TaskListItem label="Like and Repost on X"/> -->
  </div>
</template>

<script setup>
import TaskListItem from './TaskListItem.vue'
import tg from '../../assets/images/tasks/tg.png'
import x from '../../assets/images/tasks/x.png'
import { useMeritsStore } from "../../store";

const store = useMeritsStore();


</script>

<style scoped>
#list{
  display:flex;
  flex-direction: column;
  gap:1rem;
}

</style>