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

    <div class="ba infoBlock" style="height: 66%;">

    </div>

  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from "vue"
import topBar from "../common/topBar.vue";
const data = reactive({

})
const refData = toRefs(data)
</script>

<style lang="less" scoped>
@import url(../../assets/css/common.less);

.container {
  .cardBlock {
    .cardCon {
      width: 82%;
      height: 82%;
      border-radius: 12px;

      .card {
        box-sizing: border-box;
        width: 48%;
        height: 98%;
        background: #90FBFF30;
        border: 1px solid gray;
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
        font-size: 16px;
        font-weight: 200;
      }

      .card:hover {
        border: 1px solid white;
        transform: scale(1.05);
        // font-size: 18px;
        background-color: #90FBFF60;
        color: #ffffff;
      }

      .card:active {
        transform: scale(0.95) rotateZ(1.7deg);
      }
    }
  }


}
</style>
