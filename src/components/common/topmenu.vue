<template>
  <div class="container">

    <div class="con flex">
      <el-icon size="26" color="#84CCFF">
        <UserFilled />
      </el-icon>
      <span class="color-f">userName</span>
      <el-icon class="pointer" style="border-radius: 50%;transform: translateX(-28px);color: aqua;">
        <Switch />
      </el-icon>
    </div>

    <div class="routerCon color-ff">
      <span>首页</span>
    </div>
    <div class="routerCon">
      <span>数字孪生</span>
    </div>


    <span class="titleCon">
      <span>龙首矿智慧管控系统</span>
    </span>

    <div class="routerCon">
      <span>报警历史</span>
    </div>
    <div class="routerCon">
      <span>后台信息</span>
    </div>

    <div class="con">
      <el-icon size="20" color="#84CCFF">
        <Calendar />
      </el-icon>
      <span class="font-b color-f" style="transform: translateX(-32px);">{{ date }}</span>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { reactive,ref, toRef, onBeforeMount, onBeforeUnmount} from "vue"
import getDate from '../../utils/getTime'

onBeforeMount(()=>{
  dateTimer.value = setInterval(() => {
    date.value = getDate()
  }, 1000);
})
let date = ref('')
let dateTimer = ref(0)


onBeforeUnmount(()=>{
  clearInterval(dateTimer.value)
})
</script>

<style lang="less" scoped>
@import url(../../assets/css/common.less);

.container {
  .flex-b;
  height: 5vh;

  .con {
    .flex-a;
    width: 15%;
    align-items: center;
  }

  .routerCon {
    .fh;
    .pointer;
    .font-a;
    line-height: 5vh;
    width: 7%;
    color: #A8ABB2;

    :hover {
      color: #FFFFFF;
    }
  }

  .titleCon {
    .font-a;
    width: 25%;
    color: #84BFF2;
    line-height: 5vh;
    font-size: 46px;
    font-family: '楷体', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
      'Microsoft YaHei', '微软雅黑', ;
    span {
     .gradient;
    }
  }
  
}
</style>
