<template>

  <el-form ref="form" :model="form" label-width="80px" id="from">
    <el-form-item label="房间标题" style="width: 500px">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="主播姓名" style="width: 300px">
      <el-input
        placeholder="请输入内容"
        v-model="form.name"
      >
      </el-input>
    </el-form-item>
    <el-form-item label="房间号码" style="width: 300px">
        <el-input
          placeholder="请输入内容"
          v-model="roomNumber"
          :disabled="true">
        </el-input>
    </el-form-item>
    <el-form-item label="用户名" style="width: 300px">
      <el-input
        placeholder="请输入内容"
        v-model="form.username"
        :disabled="true">
      </el-input>
    </el-form-item>
    <el-form-item label="串流密匙" style="width: 300px">
      <el-input
        placeholder="请输入内容"
        v-model="form.crossfire"
        >
      </el-input>
    </el-form-item>
    <el-form-item label="直播封面">
      <el-image v-show="ifImage" width="100%" :src="showImage" id="image" style="float: left" ></el-image>
      <el-upload
        :auto-upload="false"
        action="http://localhost:8080/live/create"
        list-type="picture-card"
        :on-change="change"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">

        <i class="el-icon-plus"></i>

      </el-upload>



      <el-dialog :visible.sync="dialogVisible" >
        <img width="100%" :src="form.image" alt="">

      </el-dialog>





    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">{{button}}</el-button>
    </el-form-item>
  </el-form>

</template>

<script>

import {creatRoom,selectRoom,updateRoom} from '@/api/table'
    export default {
        data() {
            return {
                form: {
                    name: '',
                    title: '',
                    username: '',
                    image: '',
                    crossfire: '',
                },
                roomNumber:'',
                dialogVisible: false,
                ifImage:true,
                showImage:'',
                button:''

            }
        },
        created() {
            this.form.username = sessionStorage.getItem("username")
          this.getMessage();
        },
        methods: {
            onSubmit() {
                if (this.button !== "修改房间"){
                    let params = new FormData();
                    params.append("name",this.form.name);
                    params.append("title",this.form.title);
                    params.append("username",this.form.username);
                    params.append("image",this.form.image);
                    params.append("crossfire",this.form.crossfire);
                    creatRoom(params).then( (request) =>{
                        if (request.state === 1){
                            this.$message('创建成功');
                        }
                    })
                }else {
                    let params = new FormData();
                    params.append("name",this.form.name);
                    params.append("title",this.form.title);
                    params.append("image",this.form.image);
                    params.append("username",this.form.username);
                    params.append("crossfire",this.form.crossfire);
                    updateRoom(params).then( (res) => {
                        if (res.state === 1){
                            this.$message('修改成功');
                        }
                    })
                }

            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                console.log(file)
                this.form.image = file.url;
                this.dialogVisible = true;
            },
            change(file){
                // console.log(file)
                this.ifImage = false
                this.form.image = file.raw;
            },
            getMessage(){
                // let params = new FormData();
                // params.append("username",this.username);
                selectRoom(this.form.username).then( request => {
                    this.button = '修改房间'
                    this.showImage= request.data.image;
                    this.form.title = request.data.title;
                    this.form.name = request.data.name;
                    this.form.crossfire = request.data.crossfire;
                    this.roomNumber = request.data.roomNumber
                }).catch( reason => {
                    if (reason !== 1){
                        this.button = '立即创建'
                    }
                })
            }


        }
    }


</script>

<style type="text/css">
  #from {
    margin: 20px 20px 20px 20px;
  }
  #image{
    width: 100px;
  }
</style>
