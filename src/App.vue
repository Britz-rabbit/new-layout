<template>
  <dv-full-screen-container ref="appRef">
      <router-view></router-view>
  </dv-full-screen-container>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref } from "vue"
import { onMounted } from "vue";
//解决自适应
const appRef = ref(null);
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

onMounted(() => {
  setTimeout(() => {
     resize()
  }, 1000);
})

</script>

<style lang="less" scoped>
#dv-full-screen-container{
  background: url('./assets/img/common/bg.png');
  background-size: contain;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}
</style>
