<template>

  <div class="app-container" style="width: 700px">
    <el-form ref="form" :model="form" label-width="120px" >
      <el-form-item label="课程名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="课程预览">
        <el-image
          style="width: 200px; height: 200px"
          :src="url"
          :preview-src-list="srcList">
        </el-image>
      </el-form-item>
      <el-form-item label="剩余时间">
        <el-time-select
          v-model="value"
          :readonly="true"
          >
        </el-time-select>
      </el-form-item>
      <el-form-item label="剩余名额">
        <el-progress class="volume" :text-inside="true" :stroke-width="22" :percentage="percentage" status="warning"></el-progress>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit" :disabled="this.isEnd">{{submit}}</el-button>
<!--        <el-button @click="onCancel">Cancel</el-button>-->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

  import {showGoods,createOrder,activeFinish} from "../../api/goods";

  export default {

  data() {
    return {
      form: {
        name: '',
        resource: '',
        desc: ''
      },
        value:'',
        isEnd:false,//倒计时是否结束
        endTime:new Date(),//应为接口获取到的结束时间
        submit:'立即抢购',
        url:'',
        srcList:[
           { url:'',}
        ],
        percentage:0,

    }

  },
    created(){

      this.show();

    },
  methods: {
    onSubmit() {
      let formdata = new FormData();
      formdata.append("username",sessionStorage.getItem("username"));
      formdata.append("courseName",this.form.name)
      createOrder(formdata).then( (request) => {
        console.log(request)
        if (request.state === 1){
          this.$message({
            message: '恭喜你，成功抢到！',
            type: 'success'
          });
          this.isEnd = true
        }else {
          this.$message('商品已抢完！');
        }
      })

    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },
     countdown() {
         // 目标日期时间戳
         const end = Date.parse(new Date(this.endTime))
         // 当前时间戳
         const now = Date.parse(new Date())
         // 相差的毫秒数
         const msec = end - now
         if (msec < 0) {
           activeFinish().then( () =>{
             this.$message({
               message: '活动结束！',
               type: 'warning'
             });
           })
             this.isEnd = true;
         } else {
             // 计算时分秒数
             let day = parseInt(msec / 1000 / 60 / 60 / 24)
             let hr = parseInt(msec / 1000 / 60 / 60 % 24)
             let min = parseInt(msec / 1000 / 60 % 60)
             let sec = parseInt(msec / 1000 % 60)
             // 个位数前补零
             hr = hr > 9 ? hr : '0' + hr
             min = min > 9 ? min : '0' + min
             sec = sec > 9 ? sec : '0' + sec
             this.value = hr + ':' + min + ':' + sec
             // 一秒后递归
             setTimeout(this.countdown, 1000)
         }
     },
      show(){
          showGoods().then( request => {
            if(request.state === 1){
              let data = request.data;
              this.endTime = data.endtime
              this.form.name = data.courseName;
              this.url = data.image;
              this.srcList[0] = data.image
              this.percentage = (data.surplus/data.quantity) * 100 .toFixed(2);
              if (this.percentage === 0){
                this.isEnd=true;
              }
              this.countdown();
            }else {
              this.$message('活动未创建！');
            }
          }).catch( reason => {
              this.$message('活动未创建！');
          })
      }



  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
.volume{
  margin-top: 10px;
}
</style>

