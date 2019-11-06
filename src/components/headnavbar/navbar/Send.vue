<template>
  <div class="Send">
    <!-- 导航栏 -->
    <div class="send">
      <div class="sendN Center"></div>
      <div class="sendN Right">
        <ul>
          <li class="listLast">
            <div class="send">
              <!-- <a href="#" class="sendA">返回</a> -->
              <input type="button" class="sendA" value="返回" @click="btn" />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 主体 -->
    <div class="Content">
      <div class="contentLeft">
        <div class="top"></div>
        <router-link to="/headnavbar">
          <!-- <div class="leftA">
            <a href="#" class="hrefA"></a>
          </div>-->
        </router-link>
      </div>
      <div class="contentBody">
        <div class="contentCenter">
          <div class="contentImg">   
            <div class="contentFoot">
              <div class="footVideo"></div>
              <p class="fontp">在线上传视频</p>
            </div>
          </div>
          <div class="contentSend">
            <el-input v-model="input" placeholder="请输入视屏标题" name="setName" class="inpName"></el-input>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-change="handleChange"
              :auto-upload="false"
              :file-list="fileList"
            >
              <el-button size="small" type="primary" class="el-btn">点击上传</el-button>
            </el-upload>
          </div>
         
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setVideo } from "@/api/user";
export default {
  name: "Send",
  data() {
    return {
      input: "",
      fileList: [{ name: "", url: "" }]
    };
  },
  methods: {
    btn() {
      this.$router.go(-1);
    },
    handleRemove(file, fileList) {
      // console.log(file, fileList);
    },
    handlePreview(file) {
      // console.log(file);
    },

    handleChange(file) {
      // console.log(file);
      let formData = new FormData();
      formData.append("fileType", "mp4");
      formData.append("upVideoName", this.input);
      formData.append("fileName", file.raw);

      // console.log();
      setVideo(formData).then(res => {
        this.setvideo = res.message;
        // console.log(this.setvideo);
      });
      // console.log(file);
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

.send {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  background: rgb(251, 253, 253);
  display: flex;
  /* border-bottom: 1px; */
  box-shadow: 0px 1px 0px #e4e1e1;
  min-width: 1445px;
  position: relative;
}
.send .sendN {
  flex: 1;
  line-height: 45px;
  /* border-right: 2px solid black; */
}
.send .sendN ul {
  margin-left: 15px;
}
.send .sendN ul li {
  float: left;
  margin: 0 5px;
}

.send .Center {
  display: flex;
  margin: 3px 0;
  /* border: 1px solid red; */
  position: relative;
  min-width: 300px;
}
.send .Center .inp {
  padding-left: 10px;
  background: rgb(236, 233, 233);
  flex: 1;
}

.send .Right ul {
  position: absolute;
  right: 130px;
}

.send .Right ul .listLast {
  width: 150px;
  height: 45px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #304156;
  margin-left: 20px;
  text-align: center;
}
.send .Right .send {
  display: inline;
}
.send .Right ul .sendA {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 18px;
  line-height: 45px;
  color: #fff;
  background-color: #304156;
}
.send .Right ul .listLast:hover {
  background-color: #ee94b2;
}

/* content 主体 */
.Content {
  width: 100%;
}

.Content .contentBody {
  width: 100%;
}

.Content .contentBody .contentCenter {
  width: 100%;
  /* border: 1px solid black; */
  box-shadow: -1px 1px 0px #e4e1e1;
  padding: 10px;
}
.Content .contentBody .contentCenter .contentImg {
  width: 830px;
  height: 124px;
  /* border: 1px solid black; */
  margin: 15px auto;
  border-radius: 8px;
}

.Content .contentBody .contentCenter .contentImg .contentFoot {
  width: 830px;
  height: 124px;
  /* border: 1px dashed red; */
  background: rgb(203, 230, 241);
  margin: auto;
  position: relative;
}
.Content .contentBody .contentCenter .contentImg .contentFoot .footVideo {
  width: 40px;
  height: 40px;
  /* border: 1px solid black; */
  position: absolute;
  top: 40px;
  left: 80px;
  background: url(../../../assets/img/icons.png) -140px -845px;
  /* background-size: 30px 35px; */
}
.Content .contentBody .contentCenter .contentImg .contentFoot .fontp {
  position: absolute;
  top: 42px;
  left: 295px;
  font-weight: 700;
  font-size: 30px;
  letter-spacing: 2px;
}




.Content .contentBody .contentCenter .contentSend {
  width: 830px;
  height: 604px;
  border: 1px dashed rgb(199, 194, 194);
  margin: 30px auto;
  border-radius: 10px;
  position: relative;
}

.Content .contentBody .contentCenter .contentSend span {
  display: block;
  /* text-align: center; */
  position: absolute;
}

.Content .contentBody .contentCenter .contentSend .inpName {
  width: 500px;
  height: 50px;
  /* border: 1px solid red; */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.Content .contentBody .contentCenter .contentSend .upload-demo .el-btn {
  width: 400px;
  height: 50px;
  position: absolute;
  top: 65%;
  left: 50%;
  margin-left: -200px;
  margin-top: -30px;
  font-size: 25px;
}
.Content .contentBody .contentCenter .contentSend .el-btn:hover {
  opacity: 0.8;
  color: black;
}

.Content .contentBody .contentCenter .contentFoot .footLeft {
  position: absolute;
  top: 45px;
  right: 80px;
  width: 100px;
  height: 36px;
  background: #409eff;
  line-height: 36px;
  text-align: center;
  color: white;
  border-radius: 5px;
}

</style>