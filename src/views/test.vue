<template>
    
    <dv-decoration3 style="width:250px;height:30px;"/>
  
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
const config = reactive({
  data: [66],
})

const updateData = () => {
  config.data = [Math.floor(Math.random() * (100 - 1)) + 1]
}
</script>
<style>
.con{
  width: 20%;
  height: 30%;
}
</style>