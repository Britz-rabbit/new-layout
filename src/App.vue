<template>
  <dv-full-screen-container ref="appRef">
    <router-view></router-view>
  </dv-full-screen-container>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, onBeforeUnmount, onMounted } from "vue"

onMounted(() => {
  setTimeout(() => {
    resize()
  }, 1000);

  initWs()
})

onBeforeUnmount(() => {
  globalWs.close()
})

//resize
const appRef = ref();
const ratio = reactive({
  ww: 1,
  wh: 1,
  width: 1920,
  height: 1080
})
const resize = () => {
  ratio.wh = window.innerHeight / ratio.height
  ratio.ww = window.innerWidth / ratio.width
  appRef.value.style.setProperty('--scaleX', ratio.ww)
  appRef.value.style.setProperty('--scaleY', ratio.wh)
}

//ws
var globalWs = new WebSocket(
  `ws://192.168.2.7:30006`
)

function initWs() {
  globalWs.onmessage = function (e) {
    console.info(e.data);
  }
  globalWs.onerror = function () {
    console.info('glbalWs error');
  }
}

setTimeout(() => {
  globalWs.send('test msg')
}, 2000);


</script>

<style lang="less" scoped>
#dv-full-screen-container {
  background: url('./assets/img/common/bg.png');
  // background: url('./assets/img/common/bg_2.png');
  background-size: contain;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}
</style>
