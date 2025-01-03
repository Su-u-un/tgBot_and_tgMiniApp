<template>
  <div class="popup" :style="style">
    +{{store.click.value}}
  </div>
</template>

<script setup>
import { ref,onMounted } from 'vue';
import { useMeritsStore } from "../store";
const store = useMeritsStore();
const emit = defineEmits(['ended']);

const props = defineProps(['initialX','initialY'])

const style = ref({
        position: 'absolute',
        left: `${props.initialX}px`,
        top: `${props.initialY}px`,
        opacity: 1,
        transition: 'transform 1s ease-out, opacity 1s ease-out',
        transform: 'translateY(0)'
      })


  onMounted(() => {
    requestAnimationFrame(() => {
      style.value.transform = 'translateY(-50px)';
      style.value.opacity = 0;
    });

    // 动画结束后触发事件，告知父组件移除
    setTimeout(() => {
      emit('ended')
    }, 1000); // 与CSS动画时间一致
  })
</script>

<style scoped>
.popup {
  -webkit-text-stroke: 0.1rem #c29b4f;
  font-weight: bold;
  text-align: center;
  line-height: 3rem;
  font-size: 1.8rem;
  color: white;
  pointer-events: none;
  height:3rem;
  width:3rem;
  background: url("../assets/images/plus.png") no-repeat center;
  background-size: contain;
}
</style>