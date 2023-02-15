<template>
  <div class="container fh scroll">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column type="index" />
      <el-table-column prop="date" label="日期" />
      <el-table-column prop="name" label="设备名称" />
      <el-table-column prop="position" label="位置" />
      <el-table-column prop="value" label="状态值" />
      <el-table-column prop="isDanger" label="是否异常">
        <template #default="scope">
          <el-tag v-if="scope.row.isDanger" type="danger">异常</el-tag>
          <el-tag v-else type="success">正常</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="isConfirm" label="确认状态">
        <template #default="scope">
          <el-switch v-model="scope.row.isConfirm" :disabled="!scope.row.isDanger" active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="detail" label="详细信息">
        <template #default="scope">
          <el-button type="primary" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import dayjs from "dayjs";
import { reactive, ref } from "vue"

const tableData = reactive([
  {
    name: '烟雾传感器',
    date: dayjs().format('YYYY-MM-DD'),
    position: `32米`,
    value: `50`,
    isDanger: true,
    isConfirm: false,
    detail: {

    }
  },
  {
    name: '红外传感器',
    date: dayjs().format('YYYY-MM-DD'),
    position: `168米`,
    value: `160`,
    isDanger: false,
    isConfirm: true,
    detail: {}
  },
  {
    name: '湿度传感器',
    date: dayjs().format('YYYY-MM-DD'),
    position: `98米`,
    value: `42`,
    isDanger: true,
    isConfirm: false,
    detail: {}
  },
  {
    name: '烟雾传感器',
    date: dayjs().format('YYYY-MM-DD'),
    position: `32米`,
    value: `160`,
    isDanger: true,
    isConfirm: true,
    detail: {}
  },
  {
    name: '烟雾传感器',
    date: dayjs().format('YYYY-MM-DD'),
    position: `32米`,
    value: `160`,
    isDanger: true,
    isConfirm: true,
    detail: {}
  },
  {
    name: '烟雾传感器',
    date: dayjs().format('YYYY-MM-DD'),
    position: `32米`,
    value: `160`,
    isDanger: true,
    isConfirm: false,
    detail: {}
  },
  {
    name: '烟雾传感器',
    date: dayjs().format('YYYY-MM-DD'),
    position: `32米`,
    value: `160`,
    isDanger: false,
    isConfirm: true,
    detail: {}
  },
  {
    name: '烟雾传感器',
    date: dayjs().format('YYYY-MM-DD'),
    position: `32米`,
    value: `160`,
    isDanger: false,
    isConfirm: true,
    detail: {}
  },
  {
    name: '烟雾传感器',
    date: dayjs().format('YYYY-MM-DD'),
    position: `32米`,
    value: `160`,
    isDanger: true,
    isConfirm: false,
    detail: {}
  },
  {
    name: '烟雾传感器',
    date: dayjs().format('YYYY-MM-DD'),
    position: `32米`,
    value: `160`,
    isDanger: false,
    isConfirm: true,
    detail: {}
  },
  {
    name: '烟雾传感器',
    date: dayjs().format('YYYY-MM-DD'),
    position: `32米`,
    value: `160`,
    isDanger: true,
    isConfirm: false,
    detail: {}
  },
  {
    name: '烟雾传感器',
    date: dayjs().format('YYYY-MM-DD'),
    position: `32米`,
    value: `160`,
    isDanger: true,
    isConfirm: true,
    detail: {}
  },
  {
    name: '烟雾传感器',
    date: dayjs().format('YYYY-MM-DD'),
    position: `32米`,
    value: `160`,
    isDanger: true,
    isConfirm: true,
    detail: {}
  },
  {
    name: '烟雾传感器',
    date: dayjs().format('YYYY-MM-DD'),
    position: `32米`,
    value: `160`,
    isDanger: true,
    isConfirm: false,
    detail: {}
  },
  {
    name: '烟雾传感器',
    date: dayjs().format('YYYY-MM-DD'),
    position: `32米`,
    value: `160`,
    isDanger: false,
    isConfirm: true,
    detail: {}
  },
  {
    name: '烟雾传感器',
    date: dayjs().format('YYYY-MM-DD'),
    position: `32米`,
    value: `160`,
    isDanger: false,
    isConfirm: true,
    detail: {}
  },
  {
    name: '烟雾传感器',
    date: dayjs().format('YYYY-MM-DD'),
    position: `32米`,
    value: `160`,
    isDanger: true,
    isConfirm: true,
    detail: {}
  },
  {
    name: '烟雾传感器',
    date: dayjs().format('YYYY-MM-DD'),
    position: `32米`,
    value: `160`,
    isDanger: true,
    isConfirm: true,
    detail: {}
  },
  {
    name: '烟雾传感器',
    date: dayjs().format('YYYY-MM-DD'),
    position: `32米`,
    value: `160`,
    isDanger: true,
    isConfirm: false,
    detail: {}
  },
  {
    name: '烟雾传感器',
    date: dayjs().format('YYYY-MM-DD'),
    position: `32米`,
    value: `160`,
    isDanger: false,
    isConfirm: true,
    detail: {}
  },
  {
    name: '烟雾传感器',
    date: dayjs().format('YYYY-MM-DD'),
    position: `32米`,
    value: `160`,
    isDanger: false,
    isConfirm: true,
    detail: {}
  },
])


</script>

<style lang="less" scoped>
@import url(../../assets/css/common.less);

.container {
  :deep(.el-table) {
    background-color: transparent;
    color: #9ddcfd;
    --el-table-header-bg-color: transparent;
    --el-table-bg-color: transparent;
    --el-table-tr-bg-color: transparent;
    --el-table-expanded-cell-bg-color: transparent;
    --el-table-current-row-bg-color: #1B223C;
    --el-table-row-hover-bg-color: #1B223C80;
  }

  :deep(.el-table th.el-table__cell){
    color: #67c3cf;
  }

  :deep(.el-table--striped .el-table__body tr.el-table__row--striped td.el-table__cell) {
    background-color: #1B223C80;
  }


}
</style>
