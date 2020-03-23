<template>
  <div id="nav-bar">
        <router-link to="/headnavbar">
          <li>
            <div class="send">
              <a href="#" class="sendA">投稿</a>
            </div>
          </li>
        </router-link>
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
  width: 100%;
  margin-left: -20px;
  background-color: rgb(243, 239, 239);
  opacity: 0.8;
  height: 59px;
}

.send {

  float: right;
  width: 68px;
  height: 59px;
  margin-right: 200px;
}
 .sendA {
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  line-height: 59px;
  color: white;
  background-color: #304156;
  border-radius: 0 0 6px 6px;
}

</style>
