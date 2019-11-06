<template>
  <el-container>
    <el-aside width="930px">
      <div class="block">
        <el-carousel height="470px">
          <el-carousel-item v-for="item in video.slice(1,5)" :key="item.id">
            <img :src="item.picUrl" class="carouselImg" @click="click(item)" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-aside>
    <el-main>
      <div
        class="groom-module"
        v-for="(value, key, index) in video.slice(5,9)"
        @click="click(value)"
      >
        <a href="#">
          <img :src="value.picUrl" alt class="pic" />
          <div class="card-mark" v-for="(value, key, index) in jsonArr">
            <p class="title">{{value.textTitle}}</p>
            <p class="author">{{value. textAuthor}}</p>
            <p class="play">{{value.textNum}}</p>
          </div>
        </a>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import { getVideo } from "@/api/user";
import { log } from "util";
export default {
  name: "Lunbo",
  created() {
    this.showListVideo();
  },
  data: () => ({
    video: [
      // {
      //   picUrl: "http://localhost:8080/pic/e736d18254114ea098cbc1e81c127f66.jpg"
      // },
      // {
      //   picUrl: "http://localhost:8080/pic/9a6b12e1cd9846679418043f4934a679.jpg"
      // },
      // {
      //   picUrl: "http://localhost:8080/pic/41fa458b9836412c9888f4fa2979c0a3.jpg"
      // },
      // {
      //   picUrl: "http://localhost:8080/pic/df83e5c44ba84e26958822051258c8ca.jpg"
      // }
    ],
    // carouselData: [
    //   { url: require("../../assets/img/video_1.jpg"), id: 1 },
    //   { url: require("../../assets/img/video_1.jpg"), id: 2 },
    //   { url: require("../../assets/img/video_1.jpg"), id: 3 },
    //   { url: require("../../assets/img/video_1.jpg"), id: 4 }
    // ],
    jsonArr: [
      {
        textTitle: "【漫画屋信任】",
        textAuthor: "up主:、天堂",
        textNum: "播放：7.9万"
      },
      {
        textTitle: "【漫画屋信任】",
        textAuthor: "up主:、天堂",
        textNum: "播放：9.9万"
      },
      {
        textTitle: "【漫画屋信任】",
        textAuthor: "up主:、天堂",
        textNum: "播放：8.9万"
      },
      {
        textTitle: "【漫画屋信任】",
        textAuthor: "up主:、天堂",
        textNum: "播放：6.9万"
      }
    ]
  }),
  methods: {
    click(re) {
      console.log(re.picUrl);
      this.$router.push({
        path: "/video",
        query: {
          sid: re.videoUrl
        }
      });
    },
    showListVideo() {
      getVideo().then(res => {
        this.video = res.data.items;
        console.log(this.video);
      });
    }
  }
};
</script>

<style scoped>
.el-container {
  position: relative;
  bottom: -310px;
}
.el-aside {
  height: 500px;
  /* background-color: #d3dce6; */
  line-height: 500px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #116be9;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #15da15;
}
.el-carousel {
  line-height: 50px;
  margin-top: 15px;
  border-radius: 20px;
  position: relative;
}
.carouselImg {
  display: block;
  width: 100%;
  height: 100%;
}

.el-main {
  /* background-color: #e9eef3; */
}
.el-main .groom-module {
  position: relative;
  float: left;
  margin: 0 0 20px 20px;
}
.groom-module {
  width: 400px;
  height: 210px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background: red;
}
.groom-module .pic {
  width: 400px;
  height: 210px;
}
.groom-module .card-mark {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  -webkit-backface-visibility: hidden;
  /* 隐藏旋转元素的背面*/
  backface-visibility: hidden;
  background: rgba(0, 0, 0, 0.6);
  /*后面这个0.6是指的背景的透明度*/
  opacity: 0;
  -webkit-transition: all 0.35s ease-in-out;
  /*规定提示信息怎样出现ease-in-out以慢速度开始和结束*/
  -moz-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
.groom-module a:hover .card-mark {
  opacity: 1;
}
.groom-module .card-mark .title {
  font-size: 21px;
  color: #fff;
  height: 40px;
  overflow: hidden;
  margin-bottom: 5px;
  word-break: break-all;
  word-wrap: break-word;
}
.groom-module .card-mark .author,
.groom-module .card-mark .play {
  position: relative;
  top: 50px;
  left: -120px;
  color: yellow;
  height: 20px;
  line-height: 20px;
  overflow: hidden;
  font-size: 20px;
  transition: all 0.6s;
}
.block {
  width: 900px;
}
</style>
