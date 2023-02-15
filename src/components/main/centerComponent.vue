<template>
  <div class="container flex-a column">
    <div class="titleCon flex-a " style="height: 6%;transform: translateY(-10px);">
      <div class="changeBtn color-f" @click="changeArea(1)">综合信息</div>
      <div class="changeBtn" @click="changeArea(2)">控制中心</div>
      <div class="logo">
        <img src="../../assets/img/common/logo.png" class="fw fh">
      </div>
      <div class="changeBtn color-f" @click="changeArea(3)">报警巡检</div>
      <div class="changeBtn" @click="changeArea(4)">传感系统</div>
    </div>

    <div class="mainVideo" style="height: 60%;transform: translateY(-10px);">
      <img v-show="is_leftVideo" :src="visible_video" class="fw fh">
      <img v-show="!is_leftVideo" :src="IR_video" class="fw fh">
    </div>

    <div class="viceVideo" style="height:28%;transform: translateY(-10px);">
      <topBar title="视频选择与巡检控制"></topBar>
      <div class="flex-a fh">

        <div class="" @click="is_leftVideo = true" style="width: 31%;height: 78%;margin-top: 2%;">
          <img :src="visible_video"  class="fw fh">
        </div>
        <div class="" @click="is_leftVideo = false" style="width: 31%;height: 78%;margin-top: 2%;">
          <img :src="IR_video"  class="fw fh">
        </div>

        <div class="color-f par_con" style="width: 31%;height: 78%;margin-top: 2%;">
          <div class="par_item h33 tc flex-a" style="line-height: 40px;">
            <span class="w33 "><i
                style="color: orange;" class="iconfont icon-zidong-02"></i>
              自动巡检</span>
            <div class="hid pointer" @click="changePatrolMode(1)">
              <img :class="currentMode===1?'active':'ready'" src="../../assets/img/main/switch.png" style="width: 160%;height: 100%;">
            </div>
          </div>

          <div class="par_item h33 tc flex-a" style="line-height: 40px;">
            <span class="w33 "><i style="color: orange;" class="iconfont icon-kuaisu"></i>
              快速巡检</span>
            <div class="hid pointer" @click="changePatrolMode(2)">
              <img :class="currentMode===2?'active':'ready'" src="../../assets/img/main/switch.png" style="width: 160%;height: 100%;">
            </div>
          </div>

          <div class="par_item h33 tc flex-a" style="line-height: 40px;">
            <span class="w33 "><i
                style="color: orange;" class="iconfont icon-yusheyunjia"></i>
              预设巡检</span>
            <div class="hid pointer" @click="changePatrolMode(3)">
              <img :class="currentMode===3?'active':'ready'" src="../../assets/img/main/switch.png" style="width: 160%;height: 100%;">
            </div>
          </div>

        </div>

      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, getCurrentInstance, onMounted, onBeforeUnmount } from "vue"
import topBar from "../common/topBar.vue";

onMounted(()=>{
  initWs()
})

onBeforeUnmount(()=>{
  CenterWs.close()
})

//#region change area
let lefttArea_flag = ref(true)
let reightArea_flag = ref(true)
const instance = getCurrentInstance()

function changeArea(areaNumber: number) {
 instance?.proxy?.$Bus.emit('changeArea',areaNumber)
} 
//#endregion

//#region ws
var CenterWs = new WebSocket(
  'ws://192.168.2.7:30008'
)
let visible_video = ref()
let IR_video = ref()
let is_leftVideo = ref(true)

function initWs(){
  CenterWs.onmessage = function(e){
    let data = JSON.parse(e.data)
    if(data?.type === 'IR') IR_video.value = 'data:image/jpeg;base64,' + data.src
    else visible_video.value = 'data:image/jpeg;base64,' + data.src
  }
  CenterWs.onerror = function(){
    console.warn('CenterWs error');
  }
}
//#endregion

//#region change patrol mode
let currentMode = ref(0)
function changePatrolMode(mode: number) {
  currentMode.value = currentMode.value===mode?0:mode
  console.info(`change to ${mode} mode`);
}
//#endregion

</script>

<style lang="less" scoped>
@import url(../../assets/css/common.less);

.container {
  .fh;

  .titleCon {
    .changeBtn {
      .color-f;
      .pointer;
      .gray;
      height: 40px;
      line-height: 40px;
      text-align: center;
      width: 80px;
      border-radius: 16px;
      margin: auto 0;
      font-size: 16px;
      background-color: #1063A780;

      &:hover {
        transition: all 0.3s;
        background-color: #1A87C180;
        color: #fff;
      }

    }

    .logo {
      width: 180px;
      height: 60px;
      margin: auto 0;
    }
  }

  .viceVideo {
    .par_con {
      .par_item {
        span {
          height: 40px;
          line-height: 40px;
          margin: auto 0;
          border: 1px solid gray;
          border-radius: 8px;
        }

        div {
          width: 32%;
          height: 60%;
          transform: translateX(-16px) translateY(8px);
          border-radius: 20px;
          position: relative;
          img{
            position: relative;
            transition: all 0.3s;
          }
        }
        .ready{
          left: 0;
          left: -58px;
        }
        .active{
          left: -58px;
          left: 0px;
        }
      }
    }
  }

}
</style>
