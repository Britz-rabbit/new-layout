<template>
  <div class="container">
    <topmenu></topmenu>
    <div class="con">
      <div class="infoArea">
        <transition name="el-zoom-in-center">
          <baseInfo v-if="leftAreaFlag"></baseInfo>
        </transition>
        <transition name="el-zoom-in-center">
          <robotControl v-if="!leftAreaFlag"></robotControl>
        </transition>
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
import { reactive, ref, onBeforeMount, getCurrentInstance } from "vue"
//common components
import topmenu from "../components/common/topmenu.vue";
//main components
import baseInfo from "../components/main/baseInfo.vue";
import robotControl from "../components/main/robotControl.vue";
import centerVideo from '../components/main/centerComponent.vue'
import detectDevices from "../components/main/detectDevices.vue"; 
import varableSensor from "../components/main/varableSensor.vue";

onBeforeMount(() => {
  
})

//changeArea
const instance = getCurrentInstance()
let leftAreaFlag = ref(true)
let rightAreaFlag = ref(true)

instance?.proxy?.$Bus.on('changeArea',(areaNumber)=>{
  if(areaNumber<3){
    leftAreaFlag.value = areaNumber===1?true:false
  }else{
    rightAreaFlag.value = areaNumber===3?true:false
  }
  
})
</script>

<style lang="less" scoped>
@import url('../assets/css/common.less');

.con {
  .container;
  .flex-a;
  height: 94vh;
  margin-top: 1vh;

  .infoArea {
    .fh;
    width: 23%;
    // background-color: #24243680;
    background-color: #8686a028;
    .hid;
  }

  .centerArea {
    width: 50%;
  }
}
</style>
