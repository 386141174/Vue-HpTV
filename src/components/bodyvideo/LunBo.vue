<template>
  <el-container>
    <el-main>
      <div class="el_aside">
        <div class="block-head">
          <el-carousel height="500px">
            <el-carousel-item v-for="item in video.slice(0,3)" :key="item.id">
              <img :src="item.picUrl" class="carouselImg" @click="click(item)" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>

      <div class="mainVideo">
        <div
          class="groom_module"
          v-for="(value, key, index) in video.slice(3,7)"
          @click="click(value)"
        >
          <a href="#">
            <img :src="value.picUrl" alt class="pic" />
            <div class="card-mark" v-for="(value, key, index) in jsonArr">
              <p class="title">{{value.textTitle}}</p>
              <p class="author auP">{{value. textAuthor}}</p>
              <p class="play auP">{{value.textNum}}</p>
            </div>
          </a>
        </div>
      </div>

      <div class="footVideo clearFix">
        <div
          class="foot_module"
          v-for="(value, key, index) in video.slice(7,11)"
          @click="click(value)"
        >
          <a href="#">
            <img :src="value.picUrl" alt class="pic" />
            <div class="card-mark">
              <p class="title">{{value.textTitle}}</p>
              <p class="author auP">{{value. textAuthor}}</p>
              <p class="play auP">{{value.textNum}}</p>
            </div>
          </a>
        </div>
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
      //   picUrl: "http://localhost:8080/pic/8a5f20d8ed184cdcaca45ee869c809f8.jpg"
      // },
      // {
      //   picUrl: "http://localhost:8080/pic/891690713cc24f118c511aa785dc6d26.jpg"
      // },
      // {
      //   picUrl: "http://localhost:8080/pic/c23b0f2b6ae94e15b1b4169e9afd791f.jpg"
      // },
      // {
      //   picUrl: "http://localhost:8080/pic/c23b0f2b6ae94e15b1b4169e9afd791f.jpg"
      // }
    ],
    jsonArr: [
      // {
      //   textTitle: "【漫画屋信任】",
      //   textAuthor: "up主:、天堂",
      //   textNum: "播放：7.9万"
      // },
      // {
      //   textTitle: "【漫画屋信任】",
      //   textAuthor: "up主:、天堂",
      //   textNum: "播放：9.9万"
      // },
      // {
      //   textTitle: "【漫画屋信任】",
      //   textAuthor: "up主:、天堂",
      //   textNum: "播放：8.9万"
      // },
      // {
      //   textTitle: "【漫画屋信任】",
      //   textAuthor: "up主:、天堂",
      //   textNum: "播放：6.9万"
      // },
    ]
  }),
  methods: {
    click(re) {
      // console.log(re.id);
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
* {
  margin: 0px;
  padding: 0px;
}


.el-container {
  position: relative;
  margin-top: 70px;
  width: 100%;
  min-width: 960px;
  height: 815px;
  /* border: 1px solid black; */
  min-width: 1180px;
}
.el-container .el-main {
  width: 100%;
}
.el-container .el-main .el_aside {
  position: absolute;
  width: 50%;
  height: 520px;
  /* border: 1px solid black; */
  /* background: skyblue; */
}
.el-container .el-main .el_aside .block-head {
  width: 98%;
  margin: 5px;
  /* border: 1px solid red; */
  border-radius: 10px;
  overflow: hidden;

}

.el-carousel__item:nth-child(2n) {
  background-color: #116be9;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #15da15;
}


.carouselImg {
  display: block;
  width: 100%;
  height: 100%;
}


.el-container .el-main .mainVideo {
  width: 50%;
  /* border: 1px solid red; */
  position: absolute;
  right: 0px;
}
.el-main .mainVideo .groom_module {
  width: 48%;
  display: flex;
  position: relative;
  float: left;
  margin: 7px;
  border: 1px solid blue;
  /* background: red; */
}

.groom_module {
  width: 100%;
  height: 245px;
  flex: 1;
  position: relative;
  /* overflow: hidden; */
  /* border-radius: 8px;
  background: red;  */
  border-radius: 10px;
  overflow: hidden;
  border-radius: 8px;
  background: red;
  border-radius: 10px;
  overflow: hidden;
}
.groom_module img {
  width: 100%;
  height: 245px;
  border-radius: 10px;
}
.groom_module .card-mark {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;

  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background: rgba(114, 112, 112, 0.6);
  opacity: 0;
  -webkit-transition: all 0.35s ease-in-out;

  -moz-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
.groom_module a:hover .card-mark {
  opacity: 0.7;
}
.groom_module .card-mark .title {
  position: relative;
  top: 20px;
  font-size: 21px;
  color: #fff;
  height: 50px;
  overflow: hidden;
  margin-bottom: 5px;
  word-break: break-all;
  word-wrap: break-word;
}
.groom_module .card-mark .auP {
  color: yellow;
  height: 20px;
  line-height: 20px;
  overflow: hidden;
  font-size: 20px;
  transition: all 0.6s;
}
.groom_module .card-mark .author {
  position: absolute;
  bottom: 70px;
  left: 20px;
}
.groom_module .card-mark .play {
  position: absolute;
  bottom: 40px;
  left: 20px;
}




.el-main .footVideo {
  width: 100%;
  /* border: 1px solid red;  */
  display: flex;
  margin-top: 525px;
}
.el-main .foot_module {
  width: 25%;
  height: 265px;
  flex: 1;
  padding: 10px;
}
.foot_module {
  width: 100%;
  height: 245px;
  flex: 1;
  position: relative;

  overflow: hidden;
  border-radius: 8px;
  /* background: red;   */
  border-radius: 10px;
}
.foot_module img {
  width: 100%;
  height: 245px;
  border-radius: 10px;
}

</style>
