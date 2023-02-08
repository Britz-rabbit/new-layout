<template>
    <div class="container" ref="infoColumn">

    </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, onMounted } from "vue"
import * as echarts from 'echarts'
onMounted(() => {
    init()
})

const infoColumn = ref();//使用ref获取虚拟dom，通过其value值进行参数配置
let timer = ref()
function init() {
    clearTimeout(timer.value)
    
    var myChart = echarts.init(infoColumn.value);
    var option = {
        // backgroundColor: '',
        tooltip: {
            show: false,
            formatter: "{b} <br> {c}%"
        },
        legend: {
            icon: "circle",
            bottom: '-5%',
            left: '8%',
            itemWidth: 7,
            itemHeight: 7,
            itemGap: 30,
            textStyle: {
                color: '#ffffff',
                
            },
            data: [{
                name: '正常'
            },
            {
                name: '异常'
            }]
        },
        grid: {
            show: false,
            top: '40%',
            right: '2%',
            bottom: '10%',
            left: '5%'
        },
        xAxis: [{
            type: 'value',
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false,
            }
        }],
        yAxis: [{
            data: [''],
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                }
            }

        }],
        series: [
            {
                name: '正常',
                type: 'bar',
                barWidth: 16,
                stack: '危货种类占比',
                label: {
                    normal: {
                        borderWidth: 10,
                        distance: 20,
                        align: 'center',
                        verticalAlign: 'middle',
                        borderRadius: 1,
                        borderColor: '#55AABE',
                        backgroundColor: '#55AABE',
                        show: true,
                        position: 'top',
                        formatter: '{c}%',
                        color: '#000'
                    }
                },
                itemStyle: {
                    color: '#55AABE'
                },
                data: [{
                    value: 53.1,
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'bar',
                                colorStops: [{
                                    offset: 0,
                                    color: '#55AABE' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#86A9A8' // 100% 处的颜色
                                }],
                                globalCoord: false, // 缺省为 false

                            }
                        }
                    }
                }]
            },
            {
                name: '正常三角形',
                type: 'line',
                barWidth: 0,
                markPoint: {
                    symbol: 'triangle',
                    symbolRotate: '180',
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            colorStops: [{
                                offset: 0, color: '#55AABE' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#86A9A8' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    },
                    symbolSize: [6, 5],// 容器大小
                    symbolOffset: [0, -15],//位置偏移
                    data: [{
                        coord: [53.11 / 2]
                    }],
                    label: {
                        normal: {
                            show: false
                        },
                        offset: [0, 0],
                    }
                }
            },
            {
                name: '异常',
                type: 'bar',
                barWidth: 16,
                stack: '危货种类占比',
                itemStyle: {
                    color: '#FC9335'
                },
                label: {
                    normal: {
                        borderWidth: 10,
                        distance: 20,
                        align: 'center',
                        verticalAlign: 'middle',
                        borderRadius: 1,
                        borderColor: '#FC9335',
                        backgroundColor: '#FC9335',
                        show: true,
                        position: 'top',
                        formatter: '{c}%',
                        color: '#000'
                    }
                },
                data: [{
                    value: 23,
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'bar',
                                colorStops: [{
                                    offset: 0,
                                    color: '#86A9A8' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#FC9335' // 100% 处的颜色
                                }],
                                globalCoord: false, // 缺省为 false

                            }
                        }
                    }
                }]
            },
            {
                name: '异常三角形',
                type: 'line',
                barWidth: 0,
                markPoint: {
                    symbol: 'triangle',
                    symbolRotate: '180',
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            colorStops: [{
                                offset: 0, color: '#86A9A8' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#FC9335' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    },
                    symbolSize: [6, 5],// 容器大小
                    symbolOffset: [0, 15],//位置偏移
                    data: [{
                        coord: [53.11 + 23 / 2]
                    }],
                    label: {
                        normal: {
                            show: false
                        },
                        offset: [0, 0],
                    }
                }
            },
        ]
    };

    setTimeout(() => {
      timer.value = myChart.setOption(option) 
    }, 100);
    
}


</script>

<style lang="less" scoped>

</style>
