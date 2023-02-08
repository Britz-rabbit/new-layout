<template>
  <div class="container fh ">
    <topBar title="控制中心"></topBar>
    <dv-decoration3 style="width:250px;height:15px;" />
    <div class="flex-a column" style="height: 90%;margin-top: 20px;">
      <div class="functionBar fw flex-a" style="height:6%;">
        <div class="functionBlock">
          <i class="iconfont icon-chongdian"></i>
          <span>回程充电</span>
        </div>
        <div class="functionBlock">
          <i class="iconfont icon-fuwei-02"></i>
          <span>故障复位</span>
        </div>
        <div class="functionBlock ">
          <i class="iconfont icon-cheqianbu-01 active" style="font-size: 48px;"></i>
          <span class="active" style="transform: translateX(-20px)">前灯</span>
        </div>
        <div class="functionBlock">
          <i class="iconfont icon-chehoubu-01" style="font-size: 48px;"></i>
          <span style="transform: translateX(-20px)">后灯</span>
        </div>
      </div>

      <div class="robotControl fw" style="height:50%;">
        <topBar_2 title="机器人控制"></topBar_2>
        <div class=" flex-a" style="height: 80%;">
          <div class=" fh" style="width: 50%;">
            <controlSpeedPanel></controlSpeedPanel>      
          </div>

          <div class=" fh color-f flex-a column" style="width: 50%;">
            <div style="font-size: 14px;">当前位置 :&nbsp;<span class="color-a" style="font-size: 18px;">{{ 645 }} </span> m</div>
            <div class="bb" style="height: 10%;">
              <div></div>
            </div>

            <div class="bb flex-a" style="height: 75%;align-items: center;">
              <div class="w33 gray " style="font-size: 60px;">
                <el-icon><CaretLeft/></el-icon>
              </div>
              <div class="w33 ba fh">

              </div>
              <div class="w33 gray active" style="font-size: 60px;">
                <el-icon><CaretRight /></el-icon>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div class="TripodControl bb fw" style="height: 40%;">
        <topBar_2 title="云台控制"></topBar_2>
        
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"
import topBar from "../common/topBar.vue";
import topBar_2 from "../common/topBar_2.vue";
import controlSpeedPanel from "../echarts/main/controlSpeedPanel.vue";
</script>

<style lang="less" scoped>
@import url('../../assets/css/common.less');

.container{
  .active{
        color: aqua !important;
      }
  .functionBar{
    width: 98%;
    margin: auto;
    // .ba;
    .functionBlock{
      .pointer;
      border: 2px solid #ffffff90;
      color: #5094BC;
      border-radius: 6%;
      height: 100%;
      text-align: center;
      line-height: 48px;
      width: 22%;
      &:hover{
        color: aqua;
      }
      i{
        font-size: 32px;
      }
      span{
        font-size: 14px;
      }
    }
  }

  .robotControl{

  }

  .TripodControl{

  }
}
</style>
