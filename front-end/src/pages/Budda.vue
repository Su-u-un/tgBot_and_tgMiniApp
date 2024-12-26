<template>
  <div class="budda" ref="container">
    <div style="margin-top: 1rem;font-size: 1.5rem">Earned:</div>
    <Score style="margin-top: 0.5rem"/>
    <div class="close" @click="close">close</div>
    <div style="font-size: 4rem">Budda</div>
    <div class="people"></div>
    <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
 labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena</div>
    <div class="cost">
      <img src="../assets/images/merits/icon.png" alt=""/>10M
    </div>

    <div class="btn">
      <img src="../assets/images/budda/left.png" alt=""/>
      <img src="../assets/images/budda/right.png" alt=""/>
    </div>
  </div>
</template>

<script>
import { Score } from "../components";
import { useRouter } from "vue-router";

export default {
  components: { Score },
  setup() {
    const router = useRouter();
      
    const close = () => {
      router.push("/merits");
    }
    return {
      close
    }
  }
};
</script>

<style scoped>
.budda {
  color:#675649;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  
}
.close{
  position: absolute;
  top:2rem;
  left:1rem;
  background-color: #7f7365;
  border-radius: 1rem;
  color:white;
  height:1rem;
  line-height: 1rem;
  font-size:1rem;
  padding: 0.3rem 0.5rem;
  align-content: center;
  text-align: center;
}
.people{
  background: url(../assets/images/merits/people.png) no-repeat center center;
  background-size: 18rem ;
  height:100%;
  width: 100%;
}
.text{
  width:18rem;
  text-align:center;
  background: url(../assets/images/budda/textbg.png) no-repeat center center;
  background-size: contain;
  padding: 0.3rem 0;
}
.cost{
  background-color: #9f8465;
  color:white;
  font-size:1.5rem;
  margin:1rem 0;
  padding: 0 0.5rem;
  border-radius:0.5rem;
  width:5rem;
  text-align:center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.cost img{
  width:1.5rem;
  height: 1.5rem;
}
.btn{
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top:20rem;
}
.btn img{
  max-width: 2rem;
  max-height: 2rem;
  margin:1rem;
}
</style>
