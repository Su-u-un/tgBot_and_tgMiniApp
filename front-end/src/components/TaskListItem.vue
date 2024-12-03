<template>
  <div class="item">
      <div class="left">
        <div class="img"></div>
        <div class="text">
          <div>{{ props.label }}</div>
          <div style="display:flex;align-items:center;gap:0.3rem">
            <img alt="" src="../assets//images/tasks/gongde.png">
            30k
          </div>
        </div>
      </div>
      <div class="btn">START</div>
    </div> 
</template>

<script setup>
const props = defineProps(['label'])

</script>

<style scoped>
.img{
  width:40px;
  height:40px;
  border-radius: 100%;
  background-color: blue;
  margin-right:0.5rem;
}
.item{
  align-items: flex-start;
  background-color: #48413b99;
  border-radius: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: 20rem;
  padding: 0.5rem 1rem ;
}
.left{
  display: flex;
  flex-direction: row;
}
.text{
  text-align: left;
  color:white;
}
.btn{
  background-color: #e2b36d;
  padding:0.5rem;
  border-radius: 0.5rem;
}
</style>