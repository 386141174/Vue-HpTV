<template>
  <div class="Send">
    <!-- 导航栏 -->
    <div class="send">
      <div class="sendN Left">
        <ul>
          <li>
            <a href="#">主站</a>
          </li>
          <li>
            <a href="#">音频</a>
          </li>
          <li>
            <a href="#">游戏中心</a>
          </li>
          <li>
            <a href="#">直播</a>
          </li>
          <li>
            <a href="#">会员购</a>
          </li>
          <li>
            <a href="#">漫画</a>
          </li>
          <li>
            <a href="#">BW</a>
          </li>
          <li>
            <a href="#">70周年</a>
          </li>
          <li>
            <a href="#">下载App</a>
          </li>
        </ul>
      </div>
      <div class="sendN Center">
        <input type="text" placeholder="自制迷你披萨可爱爆表" class="inp" />
        <input type="button" class="search-btn" />
      </div>
      <div class="sendN Right">
        <ul>
          <li>
            <a href="#">大会员</a>
          </li>
          <li>
            <a href="#">消息</a>
          </li>
          <li>
            <a href="#">动态</a>
          </li>
          <li>
            <a href="#">稍后再看</a>
          </li>
          <li>
            <a href="#">收藏</a>
          </li>
          <li>
            <a href="#">历史</a>
          </li>

          <li class="listLast">
            <div class="send">
              <a href="#" class="sendA">投稿</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 主体 -->
    <div class="Content">
      <div class="contentLeft">
        <div class="top"></div>

        <div class="leftA">
          <a href="#" class="hrefA">投稿</a>
        </div>
      </div>
      <div class="contentBody">
        <div class="contentTop">
          <a href="#">视屏投稿</a>
          <a href="#">专栏投稿</a>
          <a href="#">互动视屏投稿</a>
          <a href="#">音频投稿</a>
          <a href="#">相薄投稿</a>
        </div>
        <div class="contentCenter">
          <div class="contentImg">
            <img src="../../../assets/img/01.jpg" alt />
          </div>
          <div class="contentSend">
            <el-input v-model="input" placeholder="请输入视屏标题" name="setName"></el-input>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              multiple
              :on-change="onchange"
              :file-list="fileList"
            >
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </div>
          <div class="contentFoot">
            <div class="footVideo"></div>
            <p class="fontp">在线视频编辑器</p>
            <div class="footLeft">
              <a href="#" class="footA">立即体验</a>
            </div>
          </div>
          <div class="text">
            <div class="textA">
              <div class="dataA">
                <a href="#">禁止发布的视屏内容</a>
              </div>
              <div class="dataA">
                <a href="#">视频大小</a>
              </div>
              <div class="dataA">
                <a href="#">视频格式</a>
              </div>
              <div class="dataA">
                <a href="#">视屏码率</a>
              </div>
            </div>
            <div class="textB">
              <p>
                上传视屏，即表示您已同意
                <a href="#">视屏公约</a>，请勿上传色情，反动等违法视屏
              </p>
            </div>
            <div class="textC">
              <a href="#">可以使用第三方工具</a>
            </div>
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
     fileList:[{name:'imput',url:''}]
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    onchange(file) {
      let formData = new FormData();
      formData.append("fileType", "MP4");
      formData.append("upVideoName", "");
      formData.append("fileName", file.raw);
      setVideo(formData).then(res => {
        this.setvideo = res.message;
        console.log(this.setvideo);
      });
      console.log(file);
    }
  },
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
.send .Center .search-btn {
  position: absolute;
  right: 0;
  width: 48px;
  min-width: 0;
  cursor: pointer;
  height: 42px;
  background: url(../../../assets/img/icons.png) -775px -720px;
  margin: 0;
  padding: 0;
  border: 0;
}

/* .send .Right {
  /* width: 600px;
  height: 100%; 
} */
.send .Right ul {
  position: absolute;
  right: 130px;
}

.send .Right ul .listLast {
  width: 65px;
  height: 55px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #f45a8d;
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
  background-color: #f45a8d;
}
.send .Right ul .listLast:hover {
  background-color: #ee94b2;
}

/* content 主体 */
.Content {
  width: 100%;
}
.Content .contentLeft {
  float: left;
  width: 15%;
  /* border: 1px solid black; */
}
.Content .contentLeft .top {
  height: 49px;
  /* border: 1px solid black; */
}
.Content .contentLeft .leftA {
  margin-top: 30px;
  text-align: center;
}
.Content .contentLeft .hrefA {
  display: block;
  width: 130px;
  height: 40px;
  /* border: 1px solid black; */
  margin: auto;
  line-height: 40px;
  font-size: 18px;
  background: rgb(62, 183, 231);
  color: white;
  border-radius: 10px;
}
.Content .contentLeft .hrefA:hover {
  opacity: 0.8;
}

.Content .contentBody {
  float: right;
  width: 85%;
}
.Content .contentBody .contentTop {
  text-align: center;
  display: flex;
  height: 49px;
  line-height: 49px;
  box-shadow: -1px 1px 0px #b1afaf;
  padding: 0 280px;
}
.Content .contentBody .contentTop a {
  flex: 1;
  font-size: 18px;
}
.Content .contentBody .contentTop a:hover {
  color: skyblue;
}
.Content .contentBody .contentCenter {
  width: 100%;
  /* border: 1px solid black; */
  box-shadow: -1px 1px 0px #e4e1e1;
  padding: 10px;
}
.Content .contentBody .contentCenter .contentImg {
  width: 830px;
  height: 69px;
  /* border: 1px solid black; */
  margin: 15px auto;
  border-radius: 8px;
}
.Content .contentBody .contentCenter .contentImg img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.Content .contentBody .contentCenter .contentSend {
  width: 830px;
  height: 384px;
  border: 1px dashed rgb(199, 194, 194);
  margin: 15px auto;
  border-radius: 10px;
  position: relative;
}
.Content .contentBody .contentCenter .contentSend span {
  display: block;
  /* text-align: center; */
  position: absolute;
}

.Content .contentBody .contentCenter .contentFoot {
  width: 830px;
  height: 124px;
  /* border: 1px dashed red; */
  background: rgb(203, 230, 241);
  margin: auto;
  margin-top: 23px;
  position: relative;
}
.Content .contentBody .contentCenter .contentFoot .footVideo {
  width: 40px;
  height: 40px;
  /* border: 1px solid black; */
  position: absolute;
  top: 40px;
  left: 80px;
  background: url(../../../assets/img/icons.png) -140px -845px;
  /* background-size: 30px 35px; */
}
.Content .contentBody .contentCenter .contentFoot .fontp {
  position: absolute;
  top: 35px;
  left: 140px;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 1px;
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
.Content .contentBody .contentCenter .text {
  width: 830px;
  /* border: 1px solid red; */
  margin: auto;
  margin-top: 40px;
}
.Content .contentBody .contentCenter .text .textA {
  padding: 0 150px;
  display: flex;
  text-align: center;
}
.Content .contentBody .contentCenter .text .textA .dataA {
  flex: 1;
  color: rgb(212, 209, 209);
  font-size: 14px;
}
.Content .contentBody .contentCenter .text .textA .dataA:hover {
  color: skyblue;
}
.Content .contentBody .contentCenter .text .textB {
  text-align: center;
  margin-top: 30px;
  letter-spacing: 3px;
  color: rgb(212, 209, 209);
}
.Content .contentBody .contentCenter .text .textB a {
  color: skyblue;
}
.Content .contentBody .contentCenter .text .textC {
  margin-top: 17px;
  margin-left: 148px;
  color: rgb(212, 209, 209);
}
</style>