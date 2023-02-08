<template>
    <div style="width: 320px;height: 300px;" ref="controlSpeedPanel">
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from "vue"
import * as echarts from 'echarts'

onMounted(() => {
    init()
})
// let val = ref(63)
const controlSpeedPanel = ref()
let timer = ref()

function init() {
    clearTimeout(timer.value)

    var myChart = echarts.init(controlSpeedPanel.value)
    var value = 720;
    var colorRegionRate = (value / 700).toFixed(2);
    // var index = value >= 80 ? 0 : value > 30 ? 1 : 2;
    let option = {
        title: {
            text: '当前行驶速度',
            left:'20',
            top:'18',
            textStyle: {
                color: '#B7814B',
                fontSize:14
            },
        },
        // backgroundColor: '#353c60',
        angleAxis: {
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            min: 0,
            max: 1200,
            startAngle: 225,
        },
        radiusAxis: {
            type: 'category',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            data: ['a', 'b', 'c'],
            z: 10,
        },
        polar: {
            radius: '105%',
        },
        series: [
            {
                type: 'gauge',
                name: '纯色圈',
                center: ['40%', '60%'],
                radius: '62%',
                splitNumber: 4,
                min: 0,
                max: 1200,
                pointer: {
                    show: true,
                    length: '72%',
                },
                // 仪表盘指针样式。
                itemStyle: {
                    color: '#ffffff',
                },
                data: [
                    {
                        value: value,
                        name: '警押比',
                    },
                ],
                title: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: [
                            // 有数值的部分
                            [
                                colorRegionRate,
                                new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                    {
                                        offset: 0,
                                        color: 'orange', // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: '#3BB289', // 100% 处的颜色
                                    },
                                ]),
                            ],
                            // 底色
                            [
                                1,
                                new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                    {
                                        offset: 0,
                                        color: 'rgba(255,255,255,0)', // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(255,255,255,0)', // 100% 处的颜色
                                    },
                                ]),
                            ],
                        ],
                        width: 15,
                        shadowOffsetX: 0,
                        shadowOffsetY: 0.2,
                        opacity: 1,
                    },
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
                detail: {
                    show: false,
                },

                axisLabel: {
                    color: '#769899',
                    fontSize: 16,
                    distance: -54,
                },
                animationDuration: 1000,
            },
            {
                type: 'gauge',
                radius: '56%',
                center: ['40%', '60%'],
                splitNumber: 30,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: [
                            // 有数值的部分
                            [
                                colorRegionRate,
                                new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                    {
                                        offset: 0,
                                        color: 'green', // 0% 处的颜色
                                    },
                                    {
                                        offset: 0.5,
                                        color: '#21CED1', // 100% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: '#06F8DE80', // 0% 处的颜色
                                    },
                                ]),
                            ],
                            // 底色
                            [
                                1,
                                new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                    {
                                        offset: 0,
                                        color: 'rgba(255,255,255,0.1)', // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(255,255,255,0.1)', // 100% 处的颜色
                                    },
                                ]),
                            ],
                        ],
                    },
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: true,
                    length: 22,
                    lineStyle: {
                        color: 'auto',
                        width: 2.5,
                    },
                },
                axisLabel: {
                    show: false,
                },
                title: {
                    show: false,
                },
                pointer: {
                    show: false,
                },
                data: [
                    {
                        value: value,
                        name: '警押比',
                    },
                ],
                detail: {
                    show: true,
                    offsetCenter: [0, '70%'],
                    formatter: (value:any) => {
                        return [`{a|${value}}`, `{b|cm/s}`].join('\n');
                    },
                    rich: {
                        a: {
                            color: '#FC9038',
                            fontWeight: 600,
                            fontSize: 32,
                        },
                        b: {
                            color: '#ffffff96',
                            fontWeight: 600,
                            fontSize: 26,
                        },
                    },
                },
            },
            // {
            //     name: 'pie',
            //     type: 'pie',
            //     clockWise: true,
            //     startAngle: -270,
            //     radius: ['76%', '70%'],
            //     hoverAnimation: false,
            //     center: ['50%', '50%'],
            //     data: ['100'],
            //     z: 1,
            //     labelLine: {
            //         show: false,
            //     },
            //     itemStyle: {
            //         normal: {
            //             color: 'rgba(255,255,255,0.1)',
            //         },
            //     },
            // },
        ],
    };

    myChart.setOption(option)

   timer.value = setTimeout(() => {
        myChart.setOption(option)
    }, 100);

}




</script>

<style lang="less" scoped>
@import url(../../../assets/css/common.less);
</style>
