<template>
  <div v-loading="ifloading">
    <div class="header">
      <h2 style="height: 60px; text-align: center;">
        教学视频上传
      </h2>
    </div>
    <div style=" " >
      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <div class="grid-content bg-purple" style="text-align: center; margin-top: 3%">
            <div >
              <el-upload
                :auto-upload="false"
                class="upload-demo"
                drag
                action="http://jsonplaceholder.typicode.com/posts/"
                :multiple="false"
                :limit="1"
                :on-change="handleChange">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              </el-upload>
            </div>
            <div>
              <div v-show="ifShowForm">
                <div>
                  <el-divider></el-divider>
                </div>
                <el-form ref="form" :model="form" label-width="80px" >
                  <el-form-item label="课程名称">
                    <el-input v-model="form.upVideoName"></el-input>
                  </el-form-item>
                  <el-form-item label="分类">
                    <el-select v-model="form.videoType" placeholder="请选择类型">
                      <el-option label="编程语言" value="java"></el-option>
                      <el-option label="前端" value="前端"></el-option>
                      <el-option label="后端框架" value="后端框架"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="是否私密">
                    <el-switch
                      v-model="open"
                      active-color="#13ce66">
                    </el-switch>
                  </el-form-item>
                  <el-form-item label="公开课" v-if="open">
                    <el-select v-model="courseBack" placeholder="请选择">
                      <el-option
                        v-for="item in liveType"
                        :key="item.title"
                        :label="item.title"
                        :value="item.liveType">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="课程描述">
                    <el-input type="textarea" v-model="form.describe"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import {setVideo} from '../../api/user'
  import {getliveType} from '../../api/live'

  export default {
    name: 'upfile',
    data() {
      return {
        ifloading:false,
        form: {
          upVideoName: '',
          videoType: '',
          describe: '',
          ifopen:'',
        },
        open:false,
        courseBack:[],
        ifShowForm:false,
        liveType:[]
      }

    },
    watch:{
      open: {
        handler(newName, oldName) {
          // console.log(this.open)
          if(this.open) {

            getliveType(sessionStorage.getItem("username")).then( (request) =>{
              this.liveType = request.data;
            })
          }
        }
      }
    },
    methods:{
      handleChange(file) {
        if (file != null) {
          this.fileList = file;
          this.ifShowForm = true;
        }
      },
      onSubmit() {
        this.ifloading = true;
        let formDate = new FormData;
        formDate.append("fileName",this.fileList.raw);
        formDate.append("fileType",this.fileList.raw.type);
        formDate.append("describe",this.form.describe);
        formDate.append("upVideoName",this.form.upVideoName);
        formDate.append("videoType",this.form.videoType);
        formDate.append("username",sessionStorage.getItem("username"));
        formDate.append("liveType",this.courseBack);
        formDate.append("ifopen",this.open);
        setVideo(formDate).then( (response) => {
          // console.log(response)
          if (response.state === 1) {
            this.ifloading = false;
            this.$message({
              duration:1000,
              message: '恭喜你，上传成功',
              type: 'success',
              onClose: function() {
                location.reload();
              }
            });
          }else {
            this.ifloading = false;
            this.$message({
              duration:1000,
              showClose: true,
              message: '对不起,上传失败请重新上传',
              type: 'error',
              onClose:function() {
                location.reload();
              }
            });
          }
        })

      }
    }
  }
</script>

<style type="text/css">
.header {
  height: 60px;
  background: #fff;
  overflow: hidden;
  position: relative;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
}

</style>
