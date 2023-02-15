<template>
  <div class="container flex-a column fh">
    <topBar title="传感系统"></topBar>
    <dv-decoration3 style="width:250px;height:15px;" />

    <div class=" center cardBlock" style="height: 28%;">
      <div class=" cardCon ">
        <div class="fw hh  flex-a">
          <div class="card">
            烟雾传感
          </div>
          <div class="card">
            温振传感
          </div>
        </div>
        <div class="fw hh  flex-a">
          <div class="card">
            拉绳开关
          </div>
          <div class="card">
            皮带打滑
          </div>
        </div>
      </div>
    </div>

    <div class="infoBlock" style="height: 64%;margin-top: 2%;">
      <topBar_3 title="传感列表"></topBar_3>
      <div class="fh fw bc" style="padding: 4px;">
        <sensorList></sensorList>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from "vue"
import topBar from "../common/topBar.vue";
import topBar_3 from "../common/topBar_3.vue";
import sensorList from "./components/sensorList.vue";
const data = reactive({

})
const refData = toRefs(data)
</script>

<style lang="less" scoped>
@import url(../../assets/css/common.less);

.container {
  .cardBlock {
    border: 1px solid rgb(27, 120, 156);
    border-radius: 16px;
    .cardCon {
      width: 82%;
      height: 82%;

      .card {
        box-sizing: border-box;
        width: 48%;
        height: 98%;
        background: #29869430;
        border: 1px solid rgb(128, 128, 128);
        box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
        backdrop-filter: blur(6px);
        border-radius: 17px;
        text-align: center;
        cursor: pointer;
        transition: all 0.5s;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        font-weight: bolder;
        color: aliceblue;
        font-size: 24px;
        font-weight: 200;
        font-family: 'Times New Roman', Times, serif;
      }

      .card:hover {
        border: 1px solid white;
        transform: scale(1.05);
        // font-size: 18px;
        background-color: #29869460;
        color: #ffffff;
      }

      .card:active {
        transform: scale(0.95) rotateZ(0.7deg);
      }
    }
  }


}
</style>
