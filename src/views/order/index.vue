<template>
  <div>
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple">
        <div id="buyCourse"> </div>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light">
        <number-teacher></number-teacher>
      </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark">
        <student-situation style="margin: auto"></student-situation>
      </div></el-col>
    </el-row>

  </div>
</template>

<script>
  import {selectOrder} from '@/api/goods'
  import permission from "../../directive/permission/permission";
  import numberTeacher from '../order/numberOfTeachers/index'
  import studentSituation from '../order/studentSituation/index'
  var echarts = require('echarts');


  export default {
      directives: { permission },
      components: {
          numberTeacher,
          studentSituation
      },
    data() {
      return {
        tableData: [],
        username:''
      }
    },
    created() {
      this.select()
    },
      mounted() {
        // this.draw()
          this.buyaCourse()
      },
    methods:{
      select(){
          let request = {
              "username" : sessionStorage.getItem("username")
          }
        selectOrder(request).then( (res) =>{
          console.log(res)
          this.tableData = res.data
        })
      },
        // draw() {
        //     // 基于准备好的dom，初始化echarts实例
        //     var myChart = echarts.init(document.getElementById('main'));
        //     myChart.setOption({
        //         title:{
        //             text:"学生数量趋势图"
        //         },
        //         xAxis: {
        //             type: 'category',
        //             data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
        //         },
        //         yAxis: {
        //             // type: 'value',
        //             // data:['20','30']
        //         },
        //         series: [{
        //             data: [10,15,10,10],
        //             type: 'line',
        //             smooth: true
        //         }]
        //     });
        // },
        buyaCourse() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('buyCourse'));
            myChart.setOption({
                title: {
                    text: '课程购买情况',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['基础课程', 'java', '前端课程']
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [
                            {value: 335, name: '基础课程'},
                            {value: 310, name: 'java'},
                            {value: 234, name: '前端课程'},
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            });

        }
    }
  }
</script>
<style>
  #main{
    width: 100%;
    height: 300px;
  }

  #buyCourse {
    width: 100%;
    height: 300px;
  }
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }

  /*.bg-purple {*/
  /*  background: #d3dce6;*/
  /*}*/
  /*.bg-purple-light {*/
  /*  background: #e5e9f2;*/
  /*}*/
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
