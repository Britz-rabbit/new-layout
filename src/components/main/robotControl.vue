<template>
  <div class="container fh ">
    <topBar title="控制中心"></topBar>
    <dv-decoration3 style="width:250px;height:15px;" />
    <div class="flex-a column" style="height: 90%;margin-top: 20px;">
      <div class="functionBar fw flex-a" style="height:6%;">
        <div class="functionBlock">
          <i class="iconfont icon-chongdian"></i>
          <span>回程充电</span>
        </div>
        <div class="functionBlock">
          <i class="iconfont icon-fuwei-02"></i>
          <span>故障复位</span>
        </div>
        <div class="functionBlock ">
          <i class="iconfont icon-cheqianbu-01 active" style="font-size: 48px;"></i>
          <span class="active" style="transform: translateX(-20px)">前灯</span>
        </div>
        <div class="functionBlock">
          <i class="iconfont icon-chehoubu-01" style="font-size: 48px;"></i>
          <span style="transform: translateX(-20px)">后灯</span>
        </div>
      </div>

      <div class="robotControl fw" style="height:50%;">
        <topBar_2 title="机器人控制"></topBar_2>
        <div class=" flex-a" style="height: 80%;">
          <div class=" fh" style="width: 50%;">
            <controlSpeedPanel></controlSpeedPanel>
          </div>

          <div class=" fh color-f flex-a column" style="width: 50%;">
            <div style="font-size: 14px;">当前位置 :&nbsp;<span class="color-a" style="font-size: 18px;">{{ location }}
              </span> m
            </div>
            <div class="" style="height: 10%;">
              <div class="barCon">
                <div class="progress" ref="progress">
                  <div class="point grey"></div>
                </div>
              </div>
            </div>

            <div class=" flex-a" style="height: 75%;align-items: center;">
              <div class="w33 gray pointer" style="font-size: 76px;">
                <el-icon>
                  <CaretLeft />
                </el-icon>
              </div>
              <div class="w33 fh" style="position: relative;">
                <span style="color:#AC7B49;white-space: nowrap;position: absolute;right: -20px;">设置速度:
                  <span style="color:aqua;font-size: 20px;">{{ customSpeed }}</span> m/s
                </span>

              </div>
              <div class="w33 gray active pointer" style="font-size: 76px;">
                <el-icon>
                  <CaretRight />
                </el-icon>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div class="TripodControl  fw" style="height: 40%;">
        <topBar_2 title="云台控制"></topBar_2>
        <div class=" flex-a" style="height: 90%;">
          <div class="fh" style="width:66%">
            <div class="TripodPanel">
              <div class="panelTop" @click="sendControlMsg('t1', '云台上旋')">上俯</div>
              <div class="panelRight" @click="sendControlMsg('t2', '云台右旋')">右旋</div>
              <div class="panelBottom" @click="sendControlMsg('t3', '云台下旋')">下仰</div>
              <div class="panelLeft" @click="sendControlMsg('t4', '云台左旋')">左旋</div>
              <div class="panelCenter" @click="sendControlMsg('t5', '云台复位')">
                <el-icon><Refresh /></el-icon>
              </div>
            </div>
          </div>

          <div class=" fh color-f flex-b column" style="width:30%">
            <div class="" style="color:#AC7B49;white-space: nowrap;height: 10%;">设置亮度：
              <span class="color-a" style="font-size: 18px;">{{ customLight }}</span>
            </div>

            <div class="bb flex-a" style="height: 88%;">
              <div class=" fh color-f" style="width: 40%;display: flex;align-items: center;">
                <i class="iconfont icon-ludeng ba circle" style="font-size: 46px;width: 100%;height: 46px;"></i>
              </div>
              <div class="ba fh" style="width: 20%;">

              </div>
              <div class=" fh color-f" style="width: 40%;display: flex;align-items: center;">
                <i class="iconfont icon-bulb ba circle" style="font-size: 36px;width: 100%;height: 42px;text-align: center;padding-top: 2px;"></i>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted, onBeforeUnmount } from "vue"
import topBar from "../common/topBar.vue";
import topBar_2 from "../common/topBar_2.vue";
import controlSpeedPanel from "../echarts/main/controlSpeedPanel.vue";

onMounted(() => {
  timer.value = setInterval(() => {
    changeLocationPoint()
    // changeSpeed(true)
  }, 400)
})

onBeforeUnmount(() => {
  clearInterval(timer.value)
})

let timer = ref()

// location movement
let progress = ref()
let location = ref(200)
let totalDistance = 1200

function changeLocationPoint() {
  let percent = Number((location.value / totalDistance).toFixed(2)) * 200 - 200
  progress.value.style = `transform: translateX(${percent}px);`
  location.value = location.value > totalDistance - 10 ? 0 : location.value += 6
}

// speed change controller
let customSpeed = ref(0.6)



//control Tripod
let customLight = ref(10)

function sendControlMsg(flag: string, msg: string) {
  console.info('num:' + flag, msg);
}
</script>

<style lang="less" scoped>
@import url('../../assets/css/common.less');

.container {
  .active {
    color: aqua !important;
  }

  .functionBar {
    width: 98%;
    margin: auto;

    // .ba;
    .functionBlock {
      .pointer;
      border: 2px solid #ffffff90;
      color: #5094BC;
      border-radius: 6%;
      height: 100%;
      text-align: center;
      line-height: 48px;
      width: 22%;

      &:hover {
        color: aqua;
      }

      i {
        font-size: 32px;
      }

      span {
        font-size: 14px;
      }
    }
  }

  .robotControl {

    .barCon {
      .hid;
      width: 90%;
      height: 60%;
      border: 1px solid #7885AA80;
      margin: 2.6% auto;
      border-radius: 8px;

      .progress {
        .bb;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        background-image: linear-gradient(to right, #1642bb, #59bbb6);
        // transform: translateX(-30px);
        display: flex;
        justify-content: end;

        .point {
          .circle;
          border: 1px double #ac6060;
          width: 18px;
          height: 90%;
          transform: translateX(3px);
          background-color: #0d5e77;
        }
      }
    }



  }

  .TripodControl {

    .TripodPanel {
      .bb;
      width: 254px;
      height: 254px;
      margin: auto;
      margin-top: 8%;
      border-radius: 50%;
      background: url(../../assets/img/main/yuntai.png);
      background-size: cover;
      position: relative;

      .panelItem {
        width: 64px;
        height: 64px;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
        cursor: pointer;
        background-image: linear-gradient(to top, #D8D9DB 0%, #fff 80%, #FDFDFD 100%);
        border-radius: 30px;
        border: 1px solid #8F9092;
        transition: all 0.2s ease;
        font-family: "Source Sans Pro", sans-serif;
        font-size: 14px;
        font-weight: 600;
        color: #606060;
        text-shadow: 0 1px #fff;
        .circle;

        &:hover {
          box-shadow: 0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 3px 3px #CECFD1;
        }

        &:active {
          box-shadow: 0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 5px 3px #999, inset 0 0 30px #aaa;
        }

        &:focus {
          box-shadow: 0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 5px 3px #999, inset 0 0 30px #aaa;
        }
      }

      .panelTop {
        .panelItem;
        left: 96px;
        top: 6px;

      }

      .panelRight {
        .panelItem;
        right: 6px;
        top: 96px;

      }

      .panelBottom {
        .panelItem;
        left: 96px;
        bottom: 6px;

      }

      .panelLeft {
        .panelItem;
        left: 6px;
        bottom: 96px;
      }

      .panelCenter {
        width: 84px;
        height: 84px;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
        cursor: pointer;
        background-image: linear-gradient(to top, #D8D9DB 0%, #fff 80%, #FDFDFD 100%);
        border-radius: 50%;
        border: 1px solid #8F9092;
        left: 84px;
        top: 84px;
        color: #090909;
        background: #e8e8e8;
        font-size: 36px;
        border: 1px solid #e8e8e8;
        transition: all .3s ease;
        // box-shadow: 6px 8px 6px #c5c5c5,
        //   -6px -8px 6px #c5c5c5;
        &:active {
          color: #666;
          box-shadow: inset 4px 4px 12px #c5c5c5,
            inset -4px -4px 12px #ffffff;
          transform: rotate(-90deg);
        }
      }
    }
  }
}
</style>
