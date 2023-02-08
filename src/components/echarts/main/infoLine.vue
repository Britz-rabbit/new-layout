<template>
    <div class="container fw" ref="infoLine">

    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from "vue"
import * as echarts from 'echarts'

onMounted(() => {
    init()
})

const infoLine = ref()
let timer = ref()
function init() {
    clearTimeout(timer.value)

    var myChart = echarts.init(infoLine.value)

    const CubeLeft = echarts.graphic.extendShape({
        shape: {
            x: 0,
            y: 0
        },
        buildPath: function (ctx, shape) {
            const xAxisPoint = shape.xAxisPoint
            const c0 = [shape.x, shape.y]
            const c1 = [shape.x - 9, shape.y - 9]
            const c2 = [xAxisPoint[0] - 9, xAxisPoint[1] - 9]
            const c3 = [xAxisPoint[0], xAxisPoint[1]]
            ctx.moveTo(c0[0], c0[1])?.lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
        }
    })
    const CubeRight = echarts.graphic.extendShape({
        shape: {
            x: 0,
            y: 0
        },
        buildPath: function (ctx, shape) {
            const xAxisPoint = shape.xAxisPoint
            const c1 = [shape.x, shape.y]
            const c2 = [xAxisPoint[0], xAxisPoint[1]]
            const c3 = [xAxisPoint[0] + 18, xAxisPoint[1] - 9]
            const c4 = [shape.x + 18, shape.y - 9]
            ctx.moveTo(c1[0], c1[1])?.lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
        }
    })
    const CubeTop = echarts.graphic.extendShape({
        shape: {
            x: 0,
            y: 0
        },
        buildPath: function (ctx, shape) {
            const c1 = [shape.x, shape.y]
            const c2 = [shape.x + 18, shape.y - 9]
            const c3 = [shape.x + 9, shape.y - 18]
            const c4 = [shape.x - 9, shape.y - 9]
            ctx.moveTo(c1[0], c1[1])?.lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
        }
    })
    echarts.graphic.registerShape('CubeLeft', CubeLeft)
    echarts.graphic.registerShape('CubeRight', CubeRight)
    echarts.graphic.registerShape('CubeTop', CubeTop)
    const MAX = [500, 500, 600, 400, 300, 300, 500, 300, 200, 500, 300, 200]
    const VALUE = [201, 123, 379, 234, 165, 123, 379, 234, 165, 379, 234, 165]

    var option = {
        backgroundColor: "transparent",
        title: {
            text: '',
            top: 32,
            left: 18,
            textStyle: {
                color: '#00F6FF',
                fontSize: 24
            }
        },
        grid: {
            left: 6,
            right: 16,
            bottom: 14,
            top: 27,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00',
                '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
            ],
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#ffffff'
                }
            },
            offset: 10,
            axisTick: {
                show: false,
                length: 19,
                alignWithLabel: true,
                lineStyle: {
                    color: '#7DFFFD'
                }
            },
            axisLabel: {
                fontSize: 16
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'white'
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                fontSize: 16
            },
            boundaryGap: ['20%', '20%']
        },
        series: [{
            type: 'custom',
            renderItem: function (_:any, api:any) {
                const location = api.coord([api.value(0), api.value(1)])
                return {
                    type: 'group',
                    children: [{
                        type: 'CubeLeft',
                        shape: {
                            api,
                            xValue: api.value(0),
                            yValue: api.value(1),
                            x: location[0],
                            y: location[1],
                            xAxisPoint: api.coord([api.value(0), 0])
                        },
                        style: {
                            fill: 'rgba(7,29,97,.6)'
                        }
                    }, {
                        type: 'CubeRight',
                        shape: {
                            api,
                            xValue: api.value(0),
                            yValue: api.value(1),
                            x: location[0],
                            y: location[1],
                            xAxisPoint: api.coord([api.value(0), 0])
                        },
                        style: {
                            fill: 'rgba(10,35,108,.7)'
                        }
                    }, {
                        type: 'CubeTop',
                        shape: {
                            api,
                            xValue: api.value(0),
                            yValue: api.value(1),
                            x: location[0],
                            y: location[1],
                            xAxisPoint: api.coord([api.value(0), 0])
                        },
                        style: {
                            fill: 'rgba(11,42,106,.8)'
                        }
                    }]
                }
            },
            data: MAX
        }, {
            type: 'custom',
            renderItem: (_:any, api:any) => {
                const location = api.coord([api.value(0), api.value(1)])
                return {
                    type: 'group',
                    children: [{
                        type: 'CubeLeft',
                        shape: {
                            api,
                            xValue: api.value(0),
                            yValue: api.value(1),
                            x: location[0],
                            y: location[1],
                            xAxisPoint: api.coord([api.value(0), 0])
                        },
                        style: {
                            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#3B80E2'
                            },
                            {
                                offset: 1,
                                color: '#49BEE5'
                            }
                            ])
                        }
                    }, {
                        type: 'CubeRight',
                        shape: {
                            api,
                            xValue: api.value(0),
                            yValue: api.value(1),
                            x: location[0],
                            y: location[1],
                            xAxisPoint: api.coord([api.value(0), 0])
                        },
                        style: {
                            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#3B80E2'
                            },
                            {
                                offset: 1,
                                color: '#49BEE5'
                            }
                            ])
                        }
                    }, {
                        type: 'CubeTop',
                        shape: {
                            api,
                            xValue: api.value(0),
                            yValue: api.value(1),
                            x: location[0],
                            y: location[1],
                            xAxisPoint: api.coord([api.value(0), 0])
                        },
                        style: {
                            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#3B80E2'
                            },
                            {
                                offset: 1,
                                color: '#49BEE5'
                            }
                            ])
                        }
                    }]
                }
            },
            data: VALUE
        }, {
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: (e:any) => {
                        switch (e.name) {
                            case '10kV线路':
                                return VALUE[0]
                            case '公用配变':
                                return VALUE[1]
                            case '35kV主变':
                                return VALUE[2]
                            case '水':

                        }
                    },
                    fontSize: 16,
                    color: '#fff',
                    offset: [4, -25]
                }
            },
            itemStyle: {
                color: 'transparent'
            },
            data: MAX
        }]
    }

    setTimeout(() => {
      timer.value = myChart.setOption(option)  
    }, 100);
    
}
</script>

<style lang="less" scoped>

</style>
