<template>
  <div class="container">
    <topBar></topBar>
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
@import url('../../assets/css/common.less');

.container {
  .fh;
  .bb;
  

}
</style>
