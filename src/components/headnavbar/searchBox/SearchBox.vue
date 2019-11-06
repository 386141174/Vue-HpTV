<template>
  <div id="search-box">
    <a href="#" target class="Asearch">
      <span>排行榜</span>
    </a>
    <form class="searchform">
      <input type="text" placeholder="你喜欢的教学视屏" class="search-keyword" name="inputVideo"/>
      <input type="button" class="search-btn" />
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchBox",
};
</script>
<style scoped>
#search-box {
  position: absolute;
  right: 200px;
  bottom: 35px;
  width: 400px;
  height: 53px;
  /* border: 1px solid black; */
}
.Asearch {
  width: 100px;
  height: 53px;
  position: absolute;
  left: 0px;
  top: 0px;
  line-height: 58px;
  background-color: hsla(0, 26%, 89%, 0.88);
  border-radius: 4px;
  width: 95px;
  transition: background-color 0.2s;
}
.Asearch span {
  padding-left: 33px;
  font-size: 18px;
  line-height: 53px;
  color: #f25d8e;
  display: inline-block;
  background: url(../../../assets/img/icons.png) -655px -645px
    no-repeat;
}
.searchform {
  position: relative;
  background-color: hsla(0, 26%, 89%, 0.88);
  left: 98px;
  width: 300px;
  display: block;
  height: 53px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.search-keyword {
  float: left;
  width: 300px;
  color: red;
  font-size: 18px;
  overflow: hidden;
  height: 53px;
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
  height: 53px;
  background: url(../../../assets/img/icons.png) -650px -710px;
  margin: 0;
  padding: 0;
  border: 0;
}
.Asearch:hover{
  background-color: hsla(0, 0%, 100%, 0.88);
}
.searchform:hover{
background-color: hsla(0, 0%, 100%, 0.88);
}
</style>