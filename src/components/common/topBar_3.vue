<template>
    <div class="container color-f flex-a " style="height: 34px;line-height: 34px;">      
            <div class="center" style="color: #E9EAEA;">
                <i :class="icon" style="font-size: 26px;color: #54C8E2;"></i>
                &nbsp;{{ title }}&nbsp;
            </div>
        <div class="gray font-b" style="width: 60%;height: 2px;margin: auto 0;
        background-image: -webkit-linear-gradient(left, #3B83D7, #3678C5, #2A548860);"></div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, defineProps } from "vue"
let props = defineProps({
    icon:{
        type:String,
        default: 'iconfont icon-huaban5',
        required:true
    },
    title: {
        type: String,
        default: '二级标题',
        required: true
    }
})
</script>

<style lang="less" scoped>
@import url(../../assets/css/common.less);
.a{
    color: #00ffff;
}
</style>
