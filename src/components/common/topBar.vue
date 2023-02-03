<template>
  <div class="topBarCon">
    <dv-decoration3 style="width:250px;height:15px;"/>
    <div class="color-f" style="height: 23px;line-height: 23px;text-align: start;">
      <div class="bb"></div>
      <span class="color-f font-b">test</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, Prop } from "vue"
const data = reactive({

})
const refData = toRefs(data)
</script>

<style lang="less" scoped>
@import url(../../assets/css/common.less);

.topBarCon {
  .fw;
  height: 38px !important;

}
</style>
