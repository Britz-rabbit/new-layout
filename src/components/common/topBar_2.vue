<template>
    <div class="container color-f flex-a ">
        <dv-decoration7 style="width:30%;height:30px;margin: 1%;" :color="['#4fd2dd', '#00ffff']">
            <div color-white font-300>
                {{ title }}
            </div>
        </dv-decoration7>
        <!-- <span class="gray" style="font-size: 16px;line-height: 38px;">/ / / /</span> -->
        <span class="gray font-b " style="width: 60%;line-height: 34px;">------------------------------------------</span>
    </div>
</template>

<script lang="ts" setup>
import { stringifyExpression } from "@vue/compiler-core";
import { reactive, ref, defineProps } from "vue"
let props = defineProps({
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
