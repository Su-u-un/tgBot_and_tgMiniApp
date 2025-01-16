<template>
  <div class="friend">
    <div style="font-size:0.8rem;width:100%;margin-top:1rem">
      <ul>
        <li>Your friend gets <span>20K</span></li>
        <li>You earn <span>5%</span> of your friend’s savings.</li>
        <li>Friend list updates every 24 hours. Next update at <span>Dec 24. 08:00</span></li>
      </ul>
    </div>
    <div class="invited">
      Invited Users: <span>0</span>
    </div>
    <div class="people"></div>
    <div style="display:flex;align-items:center;justify-content:space-between">
      <div style="margin-right:1rem;font-size:2rem;color:white;background-color:#ab8861;padding:0.5rem;border-radius:1rem;width:15rem;text-align:center">INVITE FRIENDS</div>
      <div class="copy">
        <img alt="" src="../assets/images/friend/copy.png">
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Score } from "../components";
import api from "../api";

export default {
  components: { Score },
  setup() {

    return {
    }
  }
};
</script>

<style scoped>
.friend {
  color:#675649;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 13.5rem);
}
.people{
  background: url(../assets/images/merits/people.png) no-repeat center center;
  background-size: auto 115% ;
  height:25rem;
  width: 22rem;
}
.copy{
  background-color:white;
  padding:1rem;
  border-radius:1rem;
  width:2rem;
  height:2rem;
  display: flex;
  justify-content: center;
}
.copy img{
  max-width:90%;
  max-height:90%;
}
span{
  color:black
}
.invited{
  font-size:1.5rem;
  background-color:#fff;
  width:15rem;
  height:3rem;
  border-radius:1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
