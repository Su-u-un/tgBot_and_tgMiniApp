<template>
  <div class="popup" :style="style">
    +1
  </div>
</template>

<script>
export default {
  props: {
    initialX: {
      type: Number,
      default: 0
    },
    initialY: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      style: {
        position: 'absolute',
        left: `${this.initialX}px`,
        top: `${this.initialY}px`,
        opacity: 1,
        transition: 'transform 1s ease-out, opacity 1s ease-out',
        transform: 'translateY(0)'
      }
    }
  },
  mounted() {
    // 开始动画
    requestAnimationFrame(() => {
      this.style.transform = 'translateY(-50px)';
      this.style.opacity = 0;
    });

    // 动画结束后触发事件，告知父组件移除
    setTimeout(() => {
      this.$emit('ended');
    }, 1000); // 与CSS动画时间一致
  }
}
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