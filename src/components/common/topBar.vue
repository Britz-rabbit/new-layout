<template>
  <div class="topBarCon">
    <div class="color-f flex-s" style="height: 23px;line-height: 23px;text-align: start;background-color: #123A9860;">&nbsp;
      <div class=" color-f font-b" style="color: #90FBFF;"><span class="iconfont icon-biaotitubiao"></span></div>
      <span class="color-f font-c"> &nbsp;{{ title }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, Prop } from "vue"
const props = defineProps({
  title: {
    type:String,
    default:'组件标题',
    required:true
  }
})
const { title } = toRefs(props)
</script>

<style lang="less" scoped>
@import url(../../assets/css/common.less);

.topBarCon {
  .fw;
  height: 23px !important;

}
</style>
