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
              <div class="color-f flex-a">位置&nbsp;&nbsp;<span class="l-blue">320m</span></div>
            </div>
            <div class="w33 fh font-b" style="line-height:42px;">
              <div class="color-f flex-a">速度&nbsp;&nbsp;<span class="l-blue">0.7m/s</span></div>
            </div>
            <div class="w33 fh font-b" style="line-height:42px;">
              <div class="color-f flex-a">状态&nbsp;&nbsp;<span class="l-blue">正常</span></div>
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
              <div class="color-f flex-a">转速&nbsp;&nbsp;<span class="l-blue">1.4m/s</span></div>
            </div>
            <div class="w33 fh font-b" style="line-height:42px;">
              <div class="color-f flex-a">温度&nbsp;&nbsp;<span class="l-blue">36°c</span></div>
            </div>
            <div class="w33 fh font-b" style="line-height:42px;">
              <div class="color-f flex-a">电流&nbsp;&nbsp;<span class="l-blue">3A</span></div>
            </div>
          </div>
        </div>
      </div>

      <div class="con2 ">
        <div class="hh flex-a color-f" style="transform: translateY(-10px);">
          <infoBlock v-for="i in infos[0]" :title="i.title" :icon="i.icon" :data="i.data" :unit="i.unit">
          </infoBlock>
        </div>
        <div class="hh flex-a color-f">
          <infoBlock v-for="i in infos[1]" :title="i.title" :icon="i.icon" :data="i.data" :unit="i.unit">
          </infoBlock>
        </div>
      </div>

      <div class="con3 flex-a column">
        <div class="con3-con flex-b hh ">
          <div class="flex-a column color-f " style="height:58px;width:60px;margin: auto 0;transform: translateY(10px);">
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
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from "vue"
import topBar from "../common/topBar.vue";
import infoBlock from "./components/infoBlock.vue";
import contrastLine from "../echarts/main/infoColumn.vue";
import infoLine from "../echarts/main/infoLine.vue";
//conifgs
const powerConfig = reactive({
  value: 66,
  colors: ['#01c4f9', '#c135ff'],
  lineDash: [10, 2],
  borderRadius: 10,
  formatter: '{value}%'
})

//infos
let infos = reactive([[
  { title: '温度', icon: 'iconfont ', data: '17-28', unit: '°C' },
  { title: '湿度', icon: '', data: '17-28', unit: '°C' },
  { title: '气体', icon: '', data: '17-28', unit: '°C' },
  { title: '震动', icon: 'test', data: '17-28', unit: '°C' },
],
[
  { title: '温度', icon: '2-1', data: '17-28', unit: '°C' },
  { title: '温度', icon: '', data: '17-28', unit: '°C' },
  { title: '温度', icon: '', data: '17-28', unit: '°C' },
  { title: '温度', icon: 'end', data: '17-28', unit: '°C' },
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
