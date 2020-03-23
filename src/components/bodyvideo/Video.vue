<template>
  <div id="app">
    <my-video :video-src="exampleVideo"></my-video>
  </div>
</template>

<script>
import LunBo from "./LunBo";
import MyVideo from "../video/MyVideo";
export default {
  name: "Video",
  components: { MyVideo ,LunBo},
  data() {
    // return {
    //    exampleVideo: "http://localhost:8080/video/9a6b12e1cd9846679418043f4934a679.mp4"
    // };
    return {
      exampleVideo: '',
    }

  },
  created() {
    this.aaa();
  },
  methods: {
    aaa() {
      this.exampleVideo = this.$route.query.sid;
      console.log(this.exampleVideo);
    },

  }
};
</script>
<style scoped>
</style>
