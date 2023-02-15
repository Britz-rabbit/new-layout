<template>
  <div class="container">

    <div class="con flex">
      <el-icon size="26" color="#84CCFF">
        <UserFilled />
      </el-icon>
      <span class="color-f">admin</span>
      <el-icon class="pointer" @click="logout" style="border-radius: 50%;transform: translateX(-28px);color: aqua;">
        <Switch />
      </el-icon>
    </div>

    <el-dialog v-model="dialog_flag" width="30%">
      <span style="font-size: 18px;">是否退出登录？</span>
      <template #footer>
        <span class="dialog-footer flex-a">
          <el-button @click="dialog_flag = false">取消</el-button>
          <el-button type="primary" @click="dialog_flag = false;router.push('/login')">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>

    <div @click="switchView('/main')" class="routerCon" :class="now_route === '/main' ? 'color-ff' : ''">
      <span>首页</span>
    </div>
    <div @click="switchView('/3d')" class="routerCon" :class="now_route === '/3d' ? 'color-ff' : ''">
      <span>数字孪生</span>
    </div>


    <span class="titleCon">
      <span>龙首矿智慧管控系统</span>
    </span>

    <div @click="switchView('/reportHistory')" class="routerCon" :class="now_route === '/reportHistory' ? 'color-ff' : ''">
      <span>报警历史</span>
    </div>
    <div @click="switchView('/backManage')" class="routerCon" :class="now_route === '/backManage' ? 'color-ff' : ''">
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
import { reactive, ref, toRef, watch, onBeforeMount, onBeforeUnmount } from "vue"
import router from "../../router";
import getDate from '../../utils/getTime'

onBeforeMount(() => {
  date.value = getDate()
  dateTimer.value = setInterval(() => {
    date.value = getDate()
  }, 1000);
})

let dialog_flag = ref(false)
function logout() {
  dialog_flag.value = true
}

let date = ref('')
let dateTimer = ref(0)
let now_route = ref('/main')
function switchView(view: string) {
  if (view === '/3d') console.info('跳转到3D可视化');
  else router.push(view);
}
watch(() => router.currentRoute.value.fullPath, (v) => {
  now_route.value = v
}, { immediate: true })

onBeforeUnmount(() => {
  clearInterval(dateTimer.value)
})
</script>

<style lang="less" scoped>
@import url(../../assets/css/common.less);

.container {
  .flex-b;
  height: 5vh;

  :deep(.el-dialog){
    background-color: #1d81d810;
    --el-text-color-regular:snow;
    .el-button{
      color: rgb(55, 182, 182);
      border-radius: 8px;
      background-color: transparent;
    }
  }

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
