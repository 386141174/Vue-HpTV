<template>
  <div id="number-teacher">
  </div>
</template>

<script>
    import permission from '@/directive/permission/index.js'
    var echarts = require('echarts');
    export default {
        directives: { permission },
        name: 'numberTeacher',
        data() {
            return {

            }
        },
        mounted() {
          this.draw();
        },
        methods:{
            draw() {
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('number-teacher'));
                myChart.setOption({
                    title:{
                      text:'教师情况'
                    },
                    color: ['#3398DB'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['一月', '二月', '三月', '四月', '五月'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '直接访问',
                            type: 'bar',
                            barWidth: '60%',
                            data: [1, 3, 2, 5, 8]
                        }
                    ]
                });

            }

        }
    }
</script>

<style>
  #number-teacher {
    width: 100%;
    height: 300px;
  }
</style>
