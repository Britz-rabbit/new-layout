<template>
  <div class="container">
    
  </div>
</template>

<script lang="ts" setup>
import {reactive,toRefs} from "vue"
  name:"App";
   const data = reactive({

   })
   const refData = toRefs(data)
</script>

<style lang="less" scoped>
@import url('../../assets/css/common.less');
.container{
  .fh;
  background: url('../../assets/img/main/right1/r1.png');
  background-size: cover;
  
}
</style>
