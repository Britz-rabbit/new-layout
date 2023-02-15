<template>
  <div class="container">
    <topmenu></topmenu>
    <div class="con">
      <div class="btnsCon flex-a " style="height: 6%;justify-content: flex-start;align-items: center;">

        <el-button style="margin-left: 16px;" type="primary" size="large" plain>全部设备</el-button>
        <el-badge :value="0" class="item">
          <el-button style="margin-left: 16px;" type="danger" size="large">异常设备</el-button>
        </el-badge>

        <div style="width: 380px;margin-left: 16px;">
          <el-date-picker v-model="dataRange" type="daterange" unlink-panels range-separator="至"
            start-placeholder="起始日期" end-placeholder="终止日期" :shortcuts="shortcuts" size="large" />
        </div>

        <el-button style="margin-left: 16px;" type="default" size="large" plain>确定查询</el-button>
        <el-button style="margin-left: 16px;" type="success" size="large">生成报表</el-button>
  
      </div>

      <div class=" list" style="height: 80%;border: 1px solid snow;">
        <reportList></reportList>
      </div>

      <div class=" pager flex-a center" style="height: 6%;justify-content: flex-end;margin-right: 20px;">
        <el-pagination layout="prev, pager, next" :total="50" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"
import topmenu from "../components/common/topmenu.vue";
import reportList from '../components/reportHistory/reportList.vue'

let dataRange = ref()

const shortcuts = [
  {
    text: '近一周',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: '近一月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: '近三月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  },
]

</script>

<style lang="less" scoped>
@import url(../assets/css/common.less);

.con {
  .container;
  .color-a;
  .flex-a;
  .column;
  height: 94vh;
  margin-top: 1vh;

  .btnsCon {
    :deep(.el-button) {
      color: aliceblue;
      border-radius: 8px;
      background-color: transparent;
    }
  }

  .list {}

  .pager {
    :deep(.el-pagination){
      --el-pagination-bg-color:transparent;
      --el-pagination-text-color:#127EFF;
      --el-pagination-button-color:#fefefe;
      --el-pagination-button-disabled-bg-color: transparent;;
    }
  }
}
</style>