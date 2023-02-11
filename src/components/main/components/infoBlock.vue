<template>
  <div class="container color-ff column">
   <div class="font-c bc" style="height: 25%;border-bottom: none;">{{ title }}</div>
    
   <div class="bc" style="font-size: 26px;height: 75%;">
    <div>
        <i class="iconfont icon-yiyanghuatan underline" style="font-size: 26px;"></i>
    </div>
    <div class="flex-b" style="height: 22px;width: 70%;margin: 0 auto;">
        <span style="color:aqua;margin: 0 auto;white-space: nowrap;" class="font-c">{{ data }} <span class="color-f">{{ unit }}</span></span>
    </div>
   </div>
  </div>
</template>

<script lang="ts" setup>
import {reactive,toRefs} from "vue"
const props = defineProps({
    title:{
        type:String,
        required:true
    },
    icon:{
        type:String,
        required:true
    },
    data:{
        type:String,
        required:true
    },
    unit:{
        type:String,
        required:true
    }
})
</script>

<style lang="less" scoped>
@import url('../../../assets/css/common.less');
.container{
    // border: 1px solid #8B97B4;
    height: 90%;
    width: 18%;
    margin:1% 3%;
}
</style>
