<template>
  <div class="container ">
    <topBar title="综合信息"></topBar>
    <dv-decoration3 style="width:250px;height:15px;" />
    <div class="flex-a column" style="height: 90%;">
      <div class="con1">

        <div class="con1-con flex-b column">
          <div class="font-c color-f flex-s">
            <i class="iconfont icon-power l-blue font-a gradient"></i>
            <span class="d-blue">&nbsp;机器人实时电量</span>
          </div>
          <div style="transform:translateX(140px) translateY(-14px)">
            <dv-percent-pond :config="powerConfig" style="width:280px;height:48px;" />
          </div>
        </div>

        <div class="con1-con">
          <div class="font-c color-f flex-s">
            <i class="iconfont icon-a-instrumentpanel-fill l-blue font-a gradient"></i>
            <span class="d-blue">&nbsp;机器人速度位置</span>
            <span class="gray font-c"
              style="transform: translateX(28px);">-------------------------------------------------------</span>
          </div>
          <div class="flex-b" style="height: 42px;">
            <div class="w33 fh font-b" style="line-height:42px;">
              <div class="color-f flex-a">位置&nbsp;&nbsp;<span class="l-blue">{{ robotPosition }}m</span></div>
            </div>
            <div class="w33 fh font-b" style="line-height:42px;">
              <div class="color-f flex-a">速度&nbsp;&nbsp;<span class="l-blue">{{ robotSpeed }}m/s</span></div>
            </div>
            <div class="w33 fh font-b" style="line-height:42px;">
              <div class="color-f flex-a">状态&nbsp;&nbsp;<span class="l-blue" :class="{ error: robotState === '异常' }">{{
                robotState
              }}</span></div>
            </div>
          </div>
        </div>

        <div class="con1-con">
          <div class="font-c color-f flex-s">
            <i class="iconfont icon-lightning-full l-blue font-a gradient"></i>
            <span class="d-blue">&nbsp;电机相关信息束</span>
            <span class="gray font-c"
              style="transform: translateX(28px);">-------------------------------------------------------</span>
          </div>
          <div class="flex-b" style="height: 42px;">
            <div class="w33 fh font-b" style="line-height:42px;">
              <div class="color-f flex-a">转速&nbsp;&nbsp;<span class="l-blue"> {{ Math.abs(evenRotateSpeed).toFixed(0) }}
                  r/s</span></div>
            </div>
            <div class="w33 fh font-b" style="line-height:42px;">
              <div class="color-f flex-a">温度&nbsp;&nbsp;<span class="l-blue"> {{ Math.abs(evenTemperat).toFixed(0) }}
                  °c</span></div>
            </div>
            <div class="w33 fh font-b" style="line-height:42px;">
              <div class="color-f flex-a">电流&nbsp;&nbsp;<span class="l-blue">{{
                Math.abs(evenRotote).toFixed(0)
              }}A</span></div>
            </div>
          </div>
        </div>
      </div>

      <div class="con2 ">
        <div class="hh flex-a color-f" style="transform: translateY(-10px);">
          <infoBlock v-for="i in infoArr[0]" :title="i.title" :icon="i.icon" :data="i.data" :unit="i.unit">
          </infoBlock>
        </div>
        <div class="hh flex-a color-f">
          <infoBlock v-for="i in infoArr[1]" :title="i.title" :icon="i.icon" :data="i.data" :unit="i.unit">
          </infoBlock>
        </div>
      </div>

      <div class="con3 flex-a column">
        <div class="con3-con flex-b hh ">
          <div class="flex-a column color-f "
            style="height:58px;width:60px;margin: auto 0;transform: translateY(10px);">
            <i class="iconfont icon-lashengliefengji color-ff underline" style="font-size: 24px;"></i>
            <span class="font-c">拉绳开关</span>
          </div>
          <div class="fh fw" style="overflow:visible">
            <contrastLine></contrastLine>
          </div>
        </div>

        <div class="con3-con flex-b hh">
          <div class="flex-a column color-f" style="height:58px;width:52px;margin: auto 0;transform: translateY(10px);">
            <i class="iconfont icon-zhendong color-ff underline" style="font-size: 24px;"></i>
            <span class="font-c">振动传感器</span>
          </div>
          <div class="fh fw">
            <contrastLine></contrastLine>
          </div>
        </div>
      </div>

      <div class="con4">
        <infoLine></infoLine>
        <!-- <controlSpeedPanel></controlSpeedPanel> -->
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, computed, watch, watchEffect, onMounted, getCurrentInstance } from "vue"
import topBar from "../common/topBar.vue";
import infoBlock from "./components/infoBlock.vue";
import contrastLine from "../echarts/main/infoColumn.vue";
import infoLine from "../echarts/main/infoLine.vue";
import { useCurrenInfo } from "../../store";

onMounted(() => {
  
})

var instance = getCurrentInstance()

//infos
var CurrenInfo = useCurrenInfo()
// let { sensor, position, battery, warning } = reactive(CurrenInfo?.robotInfo)// it will lose respond of data in pinia
let batteryPower = computed(() => Math.floor(Number(CurrenInfo?.robotInfo?.battery.cap_r) / Number(CurrenInfo?.robotInfo?.battery.cap_t) * 100))
let robotPosition = computed(() => Math.floor(Number(CurrenInfo?.robotInfo?.position?.position) / 1000))
let robotSpeed = computed(() => Math.floor(Number(CurrenInfo?.robotInfo?.position?.speed)))
let robotState = computed(() => Number(CurrenInfo?.robotInfo?.warning?.warning) === 0 ? '正常' : '异常')
let evenRotote = computed(() => (Number(CurrenInfo?.robotInfo?.motor?.m1_i)) + Number(CurrenInfo?.robotInfo?.motor?.m2_i) / 2)
let evenTemperat = computed(() => (Number(CurrenInfo?.robotInfo?.motor?.m1_t)) + Number(CurrenInfo?.robotInfo?.motor?.m2_t) / 2)
let evenRotateSpeed = computed(() => (Number(CurrenInfo?.robotInfo?.motor?.m1_v)) + Number(CurrenInfo?.robotInfo?.motor?.m2_v) / 2)

//conifgs
var powerConfig = reactive({
  value: batteryPower.value,
  colors: ['#01c4f9', '#c135ff'],
  lineDash: [10, 2],
  borderRadius: 10,
  formatter: '{value}%'
})

watch(() => batteryPower.value, (v) => {
  powerConfig = {
    value: v,
    colors: ['#01c4f9', '#c135ff'],
    lineDash: [10, 2],
    borderRadius: 10,
    formatter: '{value}%'
  }, { immediate: true }
})

// watchEffect(()=>{
//   powerConfig = {
//     value: batteryPower.value,
//     colors: ['#01c4f9', '#c135ff'],
//     lineDash: [10, 2],
//     borderRadius: 10,
//     formatter: '{value}%'
//   }
// })

//infoBlock
let infoArr = reactive([[
  { title: '环境温度', icon: 'iconfont ', data: CurrenInfo?.robotInfo?.sensor?.t1, unit: '°C' },
  { title: '环境湿度', icon: '', data: CurrenInfo?.robotInfo?.sensor?.h1, unit: '%' },
  { title: 'PM 2.5', icon: '', data: CurrenInfo?.robotInfo?.sensor?.pm, unit: 'ug/m³' },
  { title: '氧气浓度', icon: 'test', data: CurrenInfo?.robotInfo?.sensor?.o2, unit: '%' },
],
[
  { title: '内部温度', icon: '2-1', data: CurrenInfo?.robotInfo?.sensor?.t2, unit: '°C' },
  { title: '内部湿度', icon: '', data: CurrenInfo?.robotInfo?.sensor?.h2, unit: '%' },
  { title: '一氧化碳', icon: '', data: CurrenInfo?.robotInfo?.sensor?.co, unit: 'ppm' },
  { title: '甲烷浓度', icon: 'end', data: CurrenInfo?.robotInfo?.sensor?.ch4, unit: '°C' },
]])


</script>

<style lang="less" scoped>
@import url('../../assets/css/common.less');

.container {
  .fh;

  .con1 {
    height: 23%;
    .flex-a;
    .column;

    .con1-con {
      height: 33%;
    }

    transform: translateY(20px);
  }

  .con2 {
    height: 25%;
    margin-top: 2%;
    transform: translateY(20px);
  }

  .con3 {
    height: 23%;
    margin: 2% 0;
    transform: translateY(30px);
  }

  .con4 {
    height: 25%;
    margin-top: 2%;
    transform: translateY(30px);
  }
}
</style>
