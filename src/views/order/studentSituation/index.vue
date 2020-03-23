<template>
  <div id="studentSituation">
  </div>
</template>

<script>
    import permission from '@/directive/permission/index.js'
    var echarts = require('echarts');
    export default {
        directives: { permission },
        name: 'studentSituation',
        data() {
            return {

            }
        },
        mounted() {
            this.drawStudent();
        },
        methods:{
            drawStudent() {
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('studentSituation'));
                myChart.setOption({
                    title:{
                      text:'学生情况'
                    },
                    xAxis: {
                        type: 'category',
                        data: ['一月', '二月', '三月', '四月', '五月']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [10,20,5,15],
                        type: 'line',
                        smooth: true
                    }]
                });

            }

        }
    }
</script>

<style>
  #studentSituation {
    width: 100%;
    height: 300px;
  }
</style>
