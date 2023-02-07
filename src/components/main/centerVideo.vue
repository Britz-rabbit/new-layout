<template>
  <div class="container flex-a column">
    <div class="titleCon flex-a " style="height: 6%;transform: translateY(-10px);">
      <div class="changeBtn color-f" @click="changeArea('')">综合信息</div>
      <div class="changeBtn" @click="changeArea('')">控制中心</div>
      <div class="logo">
        <img src="../../assets/img/common/logo.png" class="fw fh">
      </div>
      <div class="changeBtn color-f" @click="changeArea('')">报警巡检</div>
      <div class="changeBtn" @click="changeArea('')">传感系统</div>
    </div>

    <div class="" style="height: 60%;transform: translateY(-10px);">
      <img src="../../assets/img/temp/video_placeholder.png" class="fw fh">
    </div>

    <div class="" style="height:28%;transform: translateY(-10px);">
      <topBar title="视频选择与巡检控制"></topBar>
      <div class="flex-a fh">
        <div class="" style="width: 31%;height: 78%;margin-top: 2%;">
          <img src="../../assets/img/temp/video_placeholder_2.png" class="fw fh">
        </div>
        <div class="" style="width: 31%;height: 78%;margin-top: 2%;">
          <img src="../../assets/img/temp/video_placeholder_2.png" class="fw fh">
        </div>
        <div class="color-f" style="width: 31%;height: 78%;margin-top: 2%;">
          <div class="par_item h33 ba tc" style="line-height: 60px;">
            <span><i class="iconfont icon-zidong-02"></i> 自动巡检</span>
            <div style=""></div>
          </div>
          <div class="par_item h33 ba tc" style="line-height: 60px;">
            <span><i class="iconfont icon-kuaisu"></i> 快速巡检</span>
            <div style=""></div>
          </div>
          <div class="par_item h33 ba tc" style="line-height: 60px;">
            <span><i class="iconfont icon-yusheyunjia"></i> 预设巡检</span>
            <div style=""></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"
import topBar from "../common/topBar.vue";
//change area
let lefttArea_flag = ref(true)
let reightArea_flag = ref(true)

function changeArea(route: string) {
  switch (route) {
    case 'baseInfo':
      console.info('baseInfo');
      break;
    case 'detectDevices':
      console.info('detectDevices');
    case 'robotControl':
      console.info('robotControl');
    case 'varableSensor':
      console.info('varableSensor');
    default:
      console.info('瞎搞');
  }
}

//change video


//change patrol mode

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



}
</style>
