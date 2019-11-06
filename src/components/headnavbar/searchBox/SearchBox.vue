<template>
  <div id="search-box">
    <!-- <a href="#" target class="Asearch">
      <span>排行榜</span>
    </a>-->
    <form class="searchform">
      <input
        type="text"
        placeholder="你喜欢的教学视屏"
        class="search-keyword"
        name="videoname"
        v-model="inputVideo"
      />
      <input type="button" class="search-btn" @click="click(inputVideo)" />
    </form>
  </div>
</template>

<script>
import { getVideoName } from "@/api/user";
import { log } from "util";
import Video from "../../bodyvideo/Video";
export default {
  name: "SearchBox",
  data() {
    return {
      inputVideo: "",
      setName: []
    };
  },
  created() {
   
  },
  methods: {
    click(inputVideo) {
      console.log(inputVideo);
      let videoName = new FormData();
      videoName.append("videoname", inputVideo);
      getVideoName(videoName).then(res => {
        this.setName = res.data.items;
        // console.log(this.setName)
        console.log(this.setName[0].videoUrl);
      });

      if (this.inputVideo == "") {
        return false
      } else {
        this.$router.push({
          query: {
            sid: this.setName[0].videoUrl
          },
          path: "/video"
        });
      }
    }
  }
};
</script>
<style scoped>
#search-box {
  position: absolute;
  left: 450px;
  width: 800px;
  height: 59px;
}
.Asearch {
  width: 20%;
  height: 59px;
  position: absolute;
  left: 0px;
  top: 0px;
  line-height: 59px;
  background-color: hsla(0, 5%, 79%, 0.88);
  border-radius: 4px;
  width: 95px;
  transition: background-color 0.2s;
}
.Asearch span {
  padding-left: 33px;
  font-size: 18px;
  line-height: 59px;
  color: #f25d8e;
  display: inline-block;
  background: url(../../../assets/img/icons.png) -655px -645px no-repeat;
}
.searchform {
  position: relative;
  background-color: hsla(0, 26%, 89%, 0.88);
  left: 98px;
  width: 80%;
  display: block;
  height: 59px;
  border-radius: 4px;
  transition: background-color 0.2s;
  border: 1px solid rgb(172, 170, 170);
}

.search-keyword {
  float: left;
  width: 100%;
  color: red;
  font-size: 18px;
  overflow: hidden;
  height: 59px;
  line-height: 53px;
  padding: 0 12px;
  border: 0;
  box-shadow: none;
  background-color: transparent;
}
.search-btn {
  display: block;
  position: absolute;
  right: 0;
  width: 48px;
  min-width: 0;
  cursor: pointer;
  height: 59px;
  background: url(../../../assets/img/icons.png) -650px -710px;
  margin: 0;
  padding: 0;
  border: 0;
}
.Asearch:hover {
  background-color: hsla(0, 0%, 100%, 0.88);
}
.searchform:hover {
  background-color: hsla(0, 4%, 78%, 0.88);
}
</style>