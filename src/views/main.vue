<template>
  <div class="container">
    <topmenu></topmenu>
    <div class="con">
      <div class="infoArea">
        <baseInfo></baseInfo>
      </div>
      <div class="centerArea">
        <centerVideo></centerVideo>
      </div>
      <div class="infoArea">
        <detectDevices></detectDevices>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onBeforeMount } from "vue"
//common components
import topmenu from "../components/common/topmenu.vue";
//main components
import baseInfo from "../components/main/baseInfo.vue";
import centerVideo from '../components/main/centerVideo.vue'
import detectDevices from "../components/main/detectDevices.vue"; 

//置前钩子
onBeforeMount(() => {
  
})

//信息栏切换
type SwitchFlages = {
  leftFlag: boolean,
  rightFlage: boolean
}
const infoSwitchFlages = reactive<SwitchFlages>({
  leftFlag: true,
  rightFlage: true
})
const changeArea = (falg:string):void=>{
  switch (falg){
    case 'l1':
      console.info('left 1');
    break;
    case 'l2':
      console.info('left 2');
      break;
    case 'r1':
      console.info('right 1');
      break;
    case 'r2':
      console.info('right 2');
      break;
  }
}

</script>

<style lang="less" scoped>
@import url('../assets/css/common.less');

.con {
  .container;
  .flex-a;
  // .ba;
  height: 94vh;
  margin-top: 1vh;

  .infoArea {
    // .bb;
    .fh;
    width: 23%;
    background-color: #24243680;
  }

  .centerArea {
    width: 50%;
  }
}
</style>
