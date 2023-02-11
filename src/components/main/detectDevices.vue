<template>
  <div class="container fh bb flex-a column">
    <topBar title="报警巡检"></topBar>
    <dv-decoration3 style="width:250px;height:15px;" />

    <div class="ba mutiCon" style="height:26%;">
     <topBar_2 title="多功能检测"></topBar_2>

    </div>

    <div class="ba breakCon" style="height:26%;">
      <topBar_2 title="撕裂跑偏检测"></topBar_2>
    </div>

    <div class="ba volume" style="height:42%;">
      <topBar_2 title="料流料量监控"></topBar_2>
    </div>

  </div>
</template>

<script lang="ts" setup>
import {reactive,toRefs} from "vue"
import topBar from "../common/topBar.vue";
import topBar_2 from "../common/topBar_2.vue";
  name:"App";
   const data = reactive({

   })
   const refData = toRefs(data)
</script>

<style lang="less" scoped>
@import url('../../assets/css/common.less');
.container{
  .fh;
  // background: url('../../assets/img/main/right1/r1.png');
  // background-size: cover;
  
  .mutiCon{

  }

  .breakCon{

  }

  .volume{

  }
}
</style>
