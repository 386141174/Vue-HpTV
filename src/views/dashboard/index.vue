<template>
  <div class="dashboard-container">
    <div class="dashboard-text"></div>
    <div class="demo-image__placeholder">
      <div class="teacher-head">
        <div class="el-container">
          <nav-bar></nav-bar>
          <search-box></search-box>
          <lun-bo>
           
          </lun-bo>
        </div>
      </div>
      <div class="block">
        <span class="demonstration"></span>
        <el-image :src="src"></el-image>
      </div>
    </div>
  </div>
</template>

<script>
import LunBo from "../../components/bodyvideo/LunBo";
import SearchBox from "../../components/headnavbar/searchBox/SearchBox";
import NavBar from "../../components/headnavbar/navbar/NavBar";
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["name"])
  },
  data() {
    return {
      src: "/src/icons/svg/aaa.png"
    };
  },
  components: {
    NavBar,
    SearchBox,
    LunBo
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/teacherHead/thead.css";
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.teacher-head {
  width: 1860px;
  height: 300px;
  position: absolute;
  top: 5px;
  left: 3px;
  background-image: url("../../assets/img/teacher.png");
  background-size: 1860px 300px;
}
.el-header,
.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>
