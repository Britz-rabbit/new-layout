<template>
    <div class="container">
        <topmenu></topmenu>
        <div class="con">
            <div class="fh hw center">
                <el-form :model="form" label-width="120px">
                    <el-form-item label="修改人名称">
                        <el-input v-model="form.name" />
                    </el-form-item>
                    <el-form-item label="修改类型">
                        <el-select v-model="form.region" placeholder="请选择修改类型">
                            <el-option label="类型一" value="shanghai" />
                            <el-option label="类型二" value="beijing" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="生效时间">
                        <el-col :span="11">
                            <el-date-picker v-model="form.date1" type="date" placeholder="起始时间"
                                style="width: 100%" />
                        </el-col>
                        <el-col :span="2" class="text-center">
                            <span class="text-gray-500">-</span>
                        </el-col>
                        <el-col :span="11">
                            <el-time-picker v-model="form.date2" placeholder="终止时间" style="width: 100%" />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="立即生效">
                        <el-switch v-model="form.delivery" />
                    </el-form-item>
                    <el-form-item label="气体报警值">
                        <el-input-number v-model="form.num1" :min="30" :max="100" />
                    </el-form-item>
                    <el-form-item label="温度报警值">
                        <el-input-number v-model="form.num2" :min="30" :max="100" />
                    </el-form-item>
                    <el-form-item label="振动报警值">
                        <el-input-number v-model="form.num3" :min="30" :max="100" />
                    </el-form-item>
                    <el-form-item label="备注">
                        <el-input v-model="form.desc" type="textarea" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">提交</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>

            <div class="fh hw">
                <div class="center" style="height: 18%;margin: 1%;">
                    <span v-for="i, idx in currentInfo.sensor">
                        <span class="color-f">{{ idx }}</span> --- {{ i }} &nbsp;
                    </span>
                </div>
                <div class="center" style="height: 18%;margin: 1%;">
                    <span v-for="i, idx in currentInfo.position">
                        <span class="color-f">{{ idx }}</span> --- {{ i }} &nbsp;
                    </span>
                </div>
                <div class="center" style="height: 18%;margin: 1%;">
                    <span v-for="i, idx in currentInfo.battery">
                        <span class="color-f">{{ idx }}</span> --- {{ i }} &nbsp;
                    </span>
                </div>
                <div class="center" style="height: 18%;margin: 1%;">
                    <span v-for="i, idx in currentInfo.warning">
                        <span class="color-f">{{ idx }}</span> --- {{ i }} &nbsp;
                    </span>
                </div>
                <div class="center" style="height: 18%;margin: 1%;">
                    <span v-for="i, idx in currentInfo.motor">
                        <span class="color-f">{{ idx }}</span> --- {{ i }} &nbsp;
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"
import topmenu from "../components/common/topmenu.vue";
import { useCurrenInfo } from "../store";
let currentInfo = useCurrenInfo()?.robotInfo

const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    num1: 60,
    num2: 60,
    num3: 60,
    type: [],
    resource: '',
    desc: '',
})

const onSubmit = () => {
    console.log('submit!')
}

</script>

<style lang="less" scoped>
@import url(../assets/css/common.less);

.con {
    .container;
    .color-a;
    .flex-a;
    height: 94vh;
    margin-top: 1vh;

    :deep(.el-form-item__label){
        color: aliceblue;
    }
}
</style>
