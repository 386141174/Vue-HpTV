<template>
  <div id="nav-bar">
    <div class="nav-bar-left">
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
    <div class="nav-bar-right">
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
        <router-link to="/headnavbar">
          <li>
            <div class="send">
              <a href="#" class="sendA">投稿</a>
            </div>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
#nav-bar {
  position: fixed;
  width: 1900px;
  margin-left: -20px;
  background-color: rgb(255, 255, 255);
  opacity: 0.8;
  height: 59px;
}
.nav-bar-left {
  padding-left: 100px;
}
li {
  margin-top: 4px;
  padding-left: 20px;
  float: left;
}
a {
  color: black;
  font-size: 18px;
  font-weight: 400;
}
.nav-bar-right ul {
  position: relative;
  right: -200px;
}

.nav-bar-right ul .send {
  position: relative;
 
  width: 68px;
  height: 59px;
  /* border: 1px solid red; */
  margin-left: 5px;
  margin-top: -20px;
  
}
.nav-bar-right ul .sendA {
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 16px;
  line-height: 59px;
  color: #fff;
  background-color: #f45a8d;
  border-radius: 0 0 6px 6px;
}
.nav-bar-right ul .sendA:hover{
  background-color: #ee94b2;
}
</style>