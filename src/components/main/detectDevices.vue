<template>
  <div class="container fh flex-a column">
    <topBar title="报警巡检"></topBar>
    <dv-decoration3 style="width:250px;height:15px;" />

    <div class=" breakCon color-a flex-a column" style="height:26%;">
      <topBar_3 title="皮带撕裂检测"></topBar_3>

      <div class="flex-a" style="height: 22%;align-items: center;">
        <span style="color: #ffffff;">检测时间：<span style="color:#E2822C">{{ dayjs().format('MM/DD hh:mm') }}</span>
        </span>
        <span style="color: #ffffff;">检测状态：<span style="color:#48DBA3">正常</span></span>
        <el-button type="primary" round style="height:26px;">历史记录</el-button>
      </div>
      <div class="flex-a" style="height: 22%;align-items: center;">
        <span style="color: #ffffff;">检测时间：<span style="color:#E2822C">{{ dayjs(dayjs().valueOf() -
        900000).format('MM/DD hh:mm') }}</span> </span>
        <span style="color: #ffffff;">检测状态：<span style="color:#48DBA3">正常</span></span>
        <el-button type="primary" round style="height:26px;">历史记录</el-button>
      </div>
      <div class="flex-a" style="height: 22%;align-items: center;">
        <span style="color: #ffffff;">检测时间：<span style="color:#E2822C">{{ dayjs(dayjs().valueOf() - 900000 *
        2).format('MM/DD hh:mm') }}</span> </span>
        <span style="color: #ffffff;">检测状态：<span style="color:#48DBA3">正常</span></span>
        <el-button type="primary" round style="height:26px;">历史记录</el-button>
      </div>
      <div class="flex-a" style="height: 22%;align-items: center;">
        <span style="color: #ffffff;">检测时间：<span style="color:#E2822C">{{ dayjs(dayjs().valueOf() - 900000 *
        3).format('MM/DD hh:mm') }}</span> </span>
        <span style="color: #ffffff;">检测状态：<span style="color:#48DBA3">正常</span></span>
        <el-button type="primary" round style="height:26px;">历史记录</el-button>
      </div>

    </div>

    <div class="mutiCon" style="height:68%;">
      <topBar_3 icon="iconfont icon-biaotitubiao" title="多功能异物识别"></topBar_3>

      <div class="flex-a column" style="height: 20%;">
        <div class="conTitle center" style="height: 28px;color: #fff;line-height: 28px;font-size: 16px;transform: translateX(-122px);">
          <i class="iconfont icon-pianxia" style="color: #54C8E2;font-size: 28px;"></i> &nbsp;&nbsp;皮带跑偏
          <i style="color: gray;font-size: 26px;"> &nbsp;&nbsp;/ / / / /</i>
        </div>
        <div class=" ckeckCon flex-a center" style="height: 60%;">
          <div class="color-f " style="height: 100%;width: 220px;margin-right: 60px;">
            <div class="fw hh center" style="width: 86%;justify-content: space-between;">检测时间：<span style="color: #E2822C;">{{ dayjs(dayjs().valueOf() - 900000).format('MM/DD hh:mm') }}</span></div>
            <div class="fw hh center" style="width: 86%;justify-content: space-between;">检测状态：<span style="transform: translateX(-28px);color: #48DBA3;">正常</span></div>
          </div>
          <!-- picture -->
          <div class="pointer fh" style="border: 1px dotted gray;border-radius: 2%;height: 48px;width:48px;position: absolute;right: 120px;">
            <img src="../../assets/img/temp/video_placeholder_2.png" style="width: 100%;height: 100%;">
          </div>
          <label class="switch">
            <input type="checkbox" class="chk">
            <span class="slider"></span>
          </label>
        </div>
      </div>

      <div class="flex-a column" style="height: 20%;">
        <div class="conTitle center" style="height: 28px;color: #fff;line-height: 28px;font-size: 16px;transform: translateX(-122px);">
          <i class="iconfont icon-huaban5" style="color: #54C8E2;font-size: 30px;"></i> &nbsp;&nbsp;异物检测
          <i style="color: gray;font-size: 26px;"> &nbsp;&nbsp;/ / / / /</i>
        </div>
        <div class=" ckeckCon flex-a center" style="height: 60%;">
          <div class="color-f" style="height: 100%;width: 220px;margin-right: 60px;">
            <div class="fw hh center" style="width: 86%;justify-content: space-between;">检测时间：<span style="color: #E2822C;">{{ dayjs(dayjs().valueOf() - 900000).format('MM/DD hh:mm') }}</span></div>
            <div class="fw hh center" style="width: 86%;justify-content: space-between;">检测状态：<span style="transform: translateX(-28px);color: #48DBA3;">正常</span></div>
          </div>
          <!-- picture -->
          <div class="pointer fh" style="border: 1px dotted gray;border-radius: 2%;height: 48px;width:48px;position: absolute;right: 120px;">
            <img src="../../assets/img/temp/video_placeholder_2.png" style="width: 100%;height: 100%;">
          </div>
          <label class="switch">
            <input type="checkbox" class="chk">
            <span class="slider"></span>
          </label>
        </div>
      </div>

      <div class="flex-a column" style="height: 54%;">
        <div class="conTitle center" style="height: 28px;color: #fff;line-height: 28px;font-size: 16px;transform: translateX(-122px);">
          <i class="iconfont icon-kuangye" style="color: #54C8E2;font-size: 36px;"></i> &nbsp;&nbsp;料流料量
          <i style="color: gray;font-size: 26px;"> &nbsp;&nbsp;/ / / / /</i>
        </div>
        <div class="" style="height: 80%;">
          <detectMaterialShed></detectMaterialShed>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn'
import { reactive, toRefs } from "vue"
import topBar from "../common/topBar.vue";
import topBar_3 from "../common/topBar_3.vue";
import detectMaterialShed from '../echarts/main/detectMaterialShed.vue';

const data = reactive({

})
const refData = toRefs(data)
</script>

<style lang="less" scoped>
@import url('../../assets/css/common.less');

.container {
  .fh;

  // .breakCon {}

  .mutiCon {
    .ckeckCon {
      position: relative;
      /* The switch - the box around the slider */
      .switch {
        font-size: 17px;
        position: relative;
        display: inline-block;
        width: 1.2em;
        height: 3.3em;
      }

      /* Hide default HTML checkbox */
      .switch .chk {
        opacity: 0;
        width: 0;
        height: 0;
      }

      /* The slider */
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: .4s;
        border-radius: 5px;
      }

      .slider:before {
        position: absolute;
        content: "";
        height: .5em;
        width: 2.4em;
        border-radius: 5px;
        left: -0.6em;
        top: 0.2em;
        background-color: white;
        box-shadow: 0 6px 7px rgba(0, 0, 0, 0.3);
        transition: .4s;
      }

      .slider:before,
      .slider:after {
        content: "";
        display: block;
      }

      .slider:after {
        background: linear-gradient(transparent 50%, rgba(255, 255, 255, 0.15) 0) 0 50% / 50% 100%,
          repeating-linear-gradient(90deg, rgb(255, 255, 255) 0, rgb(255, 255, 255), rgb(255, 255, 255) 20%, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 40%) 0 50% / 50% 100%,
          radial-gradient(circle at 50% 50%, rgb(255, 255, 255) 25%, transparent 26%);
        background-repeat: no-repeat;
        border: 0.25em solid transparent;
        border-left: 0.4em solid #ffffff;
        border-right: 0 solid transparent;
        transition: border-left-color 0.1s 0.3s ease-out, transform 0.3s ease-out;
        transform: translateX(-22.5%) rotate(90deg);
        transform-origin: 25% 50%;
        position: relative;
        top: 0.5em;
        left: 0.55em;
        width: 2em;
        height: 1em;
        box-sizing: border-box;
      }

      .chk:checked+.slider {
        background-color: limegreen;
      }

      .chk:focus+.slider {
        box-shadow: 0 0 1px limegreen;
      }

      .chk:checked+.slider:before {
        transform: translateY(2.3em);
      }

      .chk:checked+.slider:after {
        transform: rotateZ(90deg) rotateY(180deg) translateY(0.45em) translateX(-1.4em);
      }
    }

  }

}
</style>
