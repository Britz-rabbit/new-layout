<template>
  <div class="container fh ">
    <topBar title="控制中心"></topBar>
    <dv-decoration3 style="width:250px;height:15px;" />
    <div class="flex-a column" style="height: 90%;margin-top: 20px;">
      <div class="functionBar fw flex-a" style="height:6%;">
        <div class="functionBlock" @click="sendControlMsg('funlib', 1, 0, 0, 0, '回程充电')">
          <i class="iconfont icon-chongdian"></i>
          <span>回程充电</span>
        </div>
        <div class="functionBlock" @click="sendControlMsg('funlib', 2, 0, 0, 0, '故障复位')">
          <i class="iconfont icon-fuwei-02"></i>
          <span>故障复位</span>
        </div>
        <div class="functionBlock " :class="{ active: robotLight.leftLight }" 
        @click="robotLight.leftLight = !robotLight.leftLight; sendControlMsg('funlib', 3, robotLight.leftLight ? 100 : 0, 0, 0, '前灯变化');">
          <i class="iconfont icon-cheqianbu-01" style="font-size: 48px;"></i>
          <span class="" style="transform: translateX(-20px)">前灯</span>
        </div>
        <div class="functionBlock" :class="{ active: robotLight.rightLight }" 
        @click="robotLight.rightLight = !robotLight.rightLight; sendControlMsg('funlib', 4, robotLight.rightLight ? 100 : 0, 0, 0, '后灯变化');">
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
              <!-- back -->
              <div class="w33 gray hover pointer" :class="{ active: is_robotForward === 1 }" @click="changeForward(1)"
                style="font-size: 76px;">
                <el-icon>
                  <CaretLeft />
                </el-icon>
              </div>
              <!-- speed -->
              <div class="w33 fh flex-a column" style="position: relative;">
                <span style="color:#AC7B49;white-space: nowrap;height: 16%;transform: translateX(-26px);">设置速度:
                  <span style="color:aqua;font-size: 20px;">{{ customSpeed.toFixed(2) }}</span> m/s
                </span>
                <div class=" flex-a column center" style="height: 80%;transform: translateY(20px);">
                  <div class=" circle center" @click="changeSpeed('add')"
                    style="height: 58px;width: 58px;font-size:76px;transform: translateY(-22px);color:#7885AA;">
                    <el-icon class="hover pointer">
                      <CaretTop />
                    </el-icon>
                  </div>
                  <div class=" circle center" style="height: 58px;width: 58px;transform: translateY(-22px);">
                    <div class="circle center hover pointer" id="robotStop" :class="{ active: is_robotForward === 0 }"
                      @click="changeForward(0)">
                      <span style="transform: translateY(-2px);font-weight: 600;">| |</span>
                    </div>
                  </div>
                  <div class=" circle center" @click="changeSpeed('min')"
                    style="height: 58px;width: 58px;font-size:76px;transform: translateY(-22px);color:#7885AA;">
                    <el-icon class="hover pointer">
                      <CaretBottom />
                    </el-icon>
                  </div>
                </div>
                <!-- step -->
                <el-select v-model="speedStepLength" placeholder="加速步长"
                  style="width: 110px;transform: translateX(-20px);" size="large">
                  <el-option key="0.5" label="步长:0.05" :value="0.05" />
                  <el-option key="1.0" label="步长:0.10" :value="0.10" />
                  <el-option key="1.5" label="步长:0.15" :value="0.15" />
                </el-select>
              </div>
              <!-- forward -->
              <div class="w33 gray hover pointer" :class="{ active: is_robotForward === 2 }" @click="changeForward(2)"
                style="font-size: 76px;">
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
              <div class="panelTop" @click="sendControlMsg('camera', 1, 0, 0, 0, '云台上旋')">上俯</div>
              <div class="panelRight" @click="sendControlMsg('camera', 4, 0, 0, 0, '云台右旋')">右旋</div>
              <div class="panelBottom" @click="sendControlMsg('camera', 2, 0, 0, 0, '云台下旋')">下仰</div>
              <div class="panelLeft" @click="sendControlMsg('camera', 3, 0, 0, 0, '云台左旋')">左旋</div>
              <div class="panelCenter" @click="sendControlMsg('camera', 5, 0, 0, 0, '云台复位')">
                <el-icon>
                  <Refresh />
                </el-icon>
              </div>
            </div>
          </div>

          <div class="fh color-f flex-b column" style="width:32%;transform: translateX(-6%);">
            <div class="" style="color:#AC7B49;white-space: nowrap;height: 10%;">设置亮度：
              <span class="color-a" style="font-size: 18px;">{{ tripodLight }}</span>
            </div>
            <div @mouseup="sendControlMsg('camera', 8, tripodLight, 0, 0, `将云台亮度调整至${tripodLight}`)" class="flex-a"
              style="height: 20%;">
              <el-slider v-model="tripodLight" :marks="tripodLightMarks" size="larger" />
            </div>
            <div class="tripodLightPanel" style="height: 70%;">
              <div class="hh ">
                <button @click="sendControlMsg('camera', 7, 0, 0, 0, '自动校准')">
                  <el-icon style="font-size: 18px;transform: translateY(3px);">
                    <Sort />
                  </el-icon>
                  自动校准
                </button>
              </div>
              <div class="hh ">
                <button @click="sendControlMsg('camera', 6, 0, 0, 0, '一键重启')">
                  <el-icon style="font-size: 18px;transform: translateY(3px);">
                    <SwitchButton />
                  </el-icon>
                  一键重启
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted, onBeforeUnmount, watch } from "vue"
import topBar from "../common/topBar.vue";
import topBar_2 from "../common/topBar_2.vue";
import controlSpeedPanel from "../echarts/main/controlSpeedPanel.vue";
import { useCurrenInfo } from "../../store/";

onMounted(() => {
  timer.value = setInterval(() => {
    changeLocationPoint()
  }, 1000)
  initWs()

})

onBeforeUnmount(() => {
  clearInterval(timer.value)
})

//common
let timer = ref()

//ws & sendMsg
//#region
var controlWs = new WebSocket(
  `ws://192.168.2.7:30006`
)

function initWs() {
  controlWs.onmessage = function (e) {
    console.info(e.data);
  }
  controlWs.onerror = function () {
    console.info('controlWs error');
  }
}

function sendControlMsg(type: string, action: number, light: number,
  for_led: number, back_led: number, message: string) {
  let paras = {
    type,
    action: String(action),
    light: String(light),
    for_led: String(for_led),
    back_led: String(back_led),
    message
  }
  controlWs.send(JSON.stringify(paras))
  console.info(message);
}
//#endregion

// location movement
//#region
let progress = ref()
let location = ref(0)
let totalDistance = 1200
let currentLocation = useCurrenInfo().robotInfo.position.position

setTimeout(() => {
  location.value = Math.floor(Number(currentLocation) / 1000)
}, 230);

function changeLocationPoint() {
  let percent = Number((location.value / totalDistance).toFixed(2)) * 200 - 200
  progress.value.style = `transform: translateX(${percent}px);`
  // location.value = location.value > totalDistance - 10 ? 0 : location.value += 6
}
//#endregion

//robot control
//#region
let customSpeed = ref(0.5)
let speedStepLength = ref()

var robotLight = reactive({
  leftLight: false,
  rightLight: false
})
setTimeout(() => {
  if (localStorage["robotLight"]) {
    robotLight.leftLight = JSON.parse(localStorage["robotLight"]).leftLight
    robotLight.rightLight = JSON.parse(localStorage["robotLight"]).rightLight
  }
}, 200);
watch(() => robotLight, (v) => {
  localStorage["robotLight"] = JSON.stringify(v)
}, { deep: true })

let is_robotForward = ref(0)// 0:stop 1:back 2:forward
function changeForward(modeNum: number) {
  is_robotForward.value = modeNum
  switch (modeNum) {
    case 0:
      sendControlMsg('robot', 5, 0, 0, 0, '机器人停止')
      break;
    case 1:
      sendControlMsg('robot', 2, customSpeed.value, 0, 0, `机器人以${customSpeed.value}后退`)
      break;
    case 2:
      sendControlMsg('robot', 1, customSpeed.value, 0, 0, `机器人以${customSpeed.value}前进`)
      break;
    default:
      break;
  }
}
function changeSpeed(mode: string) {
  if (customSpeed.value > 1.5 || customSpeed.value < 0) customSpeed.value = 0.5
  if (mode === 'add') {
    customSpeed.value += speedStepLength.value || 0.05
    sendControlMsg('robot', 3, Number(customSpeed.value.toFixed(2)), 0, 0, `机器人速度是${customSpeed.value}`)
  } else {
    customSpeed.value -= speedStepLength.value || 0.05
    sendControlMsg('robot', 4, Number(customSpeed.value.toFixed(2)), 0, 0, `机器人速度是${customSpeed.value}`)
  }
  // if (is_robotForward) {
  //   customSpeed.value === 2 ?
  //     sendControlMsg('robot', 1, customSpeed.value, 0, 0, `机器人以${customSpeed.value}前进`) :
  //     sendControlMsg('robot', 2, customSpeed.value, 0, 0, `机器人以${customSpeed.value}后退`)
  // }
}
//#endregion

//#region tripod control
let tripodLight = ref(50)
let tripodLightMarks = reactive({
  15: {
    style: {
      color: 'aqua',
    },
    label: '15',
  },
  50: {
    style: {
      color: 'aqua',
    },
    label: '50',
  },
  85: {
    style: {
      color: 'aqua',
    },
    label: '85',
  },
})
//#endregion
</script>

<style lang="less" scoped>
@import url('../../assets/css/common.less');

.container {
  .active {
    color: aqua !important;
  }

  // *{
  //   transition: 0.2s;
  // }
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
        color: #4dd4d4;
      }

      &:active {
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

    #robotStop {
      width: 78%;
      height: 78%;
      border: 2px solid 7885AA;
      font-size: 32px;
      color: #7885AA;
      border: 2px solid #7885AA;

      &:hover {
        color: aqua;
        border: 2px solid aqua;
      }
    }

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
        background: #FFFFFF;
        font-size: 36px;
        border: 1px solid #e8e8e8;
        transition: all .3s ease;

        // box-shadow: 6px 8px 6px #c5c5c5,
        //   -6px -8px 6px #c5c5c5;
        &:hover {
          color: #666;
          box-shadow: inset 4px 4px 12px #c5c5c5,
            inset -4px -4px 12px #ffffff;
          transform: rotate(-90deg);
        }

        &:active {
          color: aqua;
        }
      }
    }

    .tripodLightPanel {
      div {
        display: flex;
        justify-content: center;
        align-items: center;

        button {
          // margin: 12px;
          height: 50px;
          width: 120px;
          border-radius: 10px;
          background: #333;
          justify-content: center;
          align-items: center;
          box-shadow: -3px -3px 12px #444, 5px 5px 12px #222, inset 5px 5px 10px #444, inset -5px -5px 10px #222;
          // font-family: 'Damion', cursive;
          border: none;
          font-size: 16px;
          color: rgb(170, 170, 170);
          transition: 300ms;
        }

        button:hover {
          box-shadow: -3px -3px 12px #444, 5px 5px 12px #222, inset 5px 5px 10px #222, inset -5px -5px 10px #444;
          color: #d6d6d6;
          transition: 300ms;
          cursor: pointer;
          color: #ffffff;
          font-size: 18px;
        }

        button:active {
          color: #59bbb6;
          transition: 200ms;

        }

      }
    }


  }
}
</style>
