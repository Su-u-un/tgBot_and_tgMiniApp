<template>
  <div class="boost">
    <Score/>
    <div>
      <div class="label">Daily Boosts</div>
      <div class="daily">
        <div class="item">
          <div>
            <div class="title">Budda Bless</div>
            <div>3/3</div>
          </div>
          <img src="../assets/images/boosts/burn.png" alt=""/>
        </div>
        <div class="item">
          <div>
            <div class="title">Budda Heal</div>
            <div>3/3</div>
          </div>
          <img src="../assets/images/boosts/light.png" alt=""/>
        </div>
      </div>
    </div>
    <div class="upgrade">
      <div class="label">Upgrades</div>
      <BoostList/>
    </div>
  </div>
</template>

<script setup>
import { BoostList, Score } from "../components";


</script>

<style scoped>
.boost{
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 18.5rem);
}
.label{
  font-size:2rem;
  color:#6a5b4a;
}
.daily {
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  width:22rem;
}
.item {
  border-radius:1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #b49470;
  padding: 0.8rem;
  color: #ffe7ae;
  height:3rem;
  width:9rem
}
.item .title{
  font-size:1.3rem;
  color:white;
}
.item img{
  margin-left:0.5rem;
  max-width: 2.5rem;
  max-height: 2.5rem;
}
.upgrade{
  height:60%;
}
</style>
