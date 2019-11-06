<template>
  <div class="app-container" style="width: 700px">
 <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  <el-form-item label="课程名称">
    <el-input v-model="formLabelAlign.courseName"></el-input>
  </el-form-item>
   <el-form-item label="用户名">
     <el-input
       placeholder="请输入内容"
       v-model="formLabelAlign.username"
       :disabled="true">
     </el-input>
   </el-form-item>
  <el-form-item label="课程详情">
    <el-upload
      :auto-upload="false"
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-change="onchange">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </el-form-item>
  <el-form-item label="课程名额">
    <el-input-number v-model="formLabelAlign.quantity" controls-position="right" :min="1" ></el-input-number>
  </el-form-item>
   <el-form-item label="结束时间">
   <el-date-picker
     v-model="formLabelAlign.endtime"
     type="datetime"
     format="yyyy-MM-dd HH:mm"
     value-format="yyyy-MM-dd HH:mm"
     placeholder="选择日期时间"
   >
   </el-date-picker>
   </el-form-item>
   <el-form-item>
     <el-button type="primary" @click="onSubmit" :disabled="ifcreate">立即创建</el-button>
   </el-form-item>
</el-form>
 </div>
</template>

<script>

  import {createGoods,showGoods} from "../../../api/goods";

  export default {
        data() {
            return {
                labelPosition: 'right',
                formLabelAlign: {
                    courseName: '',
                    endtime: '',
                    quantity: 1,
                    image:'',
                    username:''
                },
                dialogImageUrl: '',
                dialogVisible: false,
                ifcreate:false
            }

        },
      created(){
            this.formLabelAlign.username = sessionStorage.getItem("username");
            this.show()
      },
        methods: {
            onSubmit(){
                let params = new FormData();
                params.append("courseName",this.formLabelAlign.courseName);
                params.append("endtime",this.formLabelAlign.endtime);
                params.append("quantity",this.formLabelAlign.quantity);
                params.append("image",this.formLabelAlign.image);
                params.append("username",this.formLabelAlign.username);
                createGoods(params).then( re => {
                     if (re.state === 1){
                         this.ifcreate = true;
                     }
                }).catch(re => {
                    this.$message({
                        showClose: true,
                        message: '对不起创建失败',
                        type: 'error'
                    });
                })

            },
            onchange(file){
                this.formLabelAlign.image = file.raw;
            },
            show(){
                showGoods(this.formLabelAlign.username).then( request => {
                    if (request.state === 1){
                        this.ifcreate = true;
                        let data = request.data;
                        this.formLabelAlign.courseName = data.courseName;
                        this.formLabelAlign.quantity = data.quantity;
                        this.formLabelAlign.endtime = data.endtime;
                        this.dialogImageUrl = data.image
                    }else {
                        this.ifcreate = false;
                    }

                }).catch( reason => {
                    this.$message({
                        showClose: true,
                        message: '查询失败',
                        type: 'error'
                    });
                })
            }
        }
    }
</script>



