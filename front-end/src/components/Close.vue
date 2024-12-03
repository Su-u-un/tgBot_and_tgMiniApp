<template>
  <div class="frame">
    <div class="text-wrapper">Close</div>
  </div>
</template>

<script>
export default {
  name: "Frame",
};
</script>

<style scoped>
.frame {
  background-color: #8b806f;
  border-radius: 15px;
  height: 32px;
  overflow: hidden;
  position: relative;
  width: 74px;
  margin-left: 1rem;
}

.frame .text-wrapper {
  color: #ffffff;
  font-family: "SF Pro Text-Bold", Helvetica;
  font-size: 18px;
  font-weight: 700;
  height: 18px;
  left: 12px;
  letter-spacing: -0.41px;
  line-height: 18px;
  position: absolute;
  top: 6px;
  white-space: nowrap;
}
</style>