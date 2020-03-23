<template>
  <div>
    <div class="playerStyle">
      <div>
        <h1 style="margin-left: -.5em">
          【{{title}}】<span>{{video_describe}}</span>
        </h1>
      </div>
      <div id="mse"></div>
    </div>
    <div class="comment">
      <el-divider></el-divider>
      <el-badge :value="praise" class="item" >
        <el-button size="medium" @click="toggle_like" >点赞</el-button>
      </el-badge>
      <el-badge :value="store_up" class="item">
        <el-button size="medium"  @click="toggle_store_up">收藏</el-button>
      </el-badge>
    </div>


  </div>
</template>
<script>
    import Player from 'xgplayer'
    export default {
        created() {
            this.play_video();
        },
        data() {
            return {
                video_picture:'',
                video_describe:'',
                new_url:'',
                title:'',
                praise:1,
                if_like:false,
                focus:false,
                store_up:0
            }
        },
        mounted() {
            let player = new Player({
                id: 'mse',
                url: this.new_url,
                fluid: true,
                poster: this.video_picture
            });
        },
        methods:{
            toggle_like() {
                if (!this.if_like) {
                    this.praise++;
                }else {
                    this.praise--;
                }
                this.if_like = !this.if_like;
            },
            toggle_store_up() {
                if (!this.if_like) {
                    this.store_up++;
                }else {
                    this.store_up--;
                }
                this.if_like = !this.if_like;
            },
            play_video() {
                console.log(JSON.parse(this.$route.query.video_url))
                this.video_describe = JSON.parse(this.$route.query.video_describe)
                this.new_url = JSON.parse(this.$route.query.video_url);
                this.video_picture = JSON.parse(this.$route.query.video_picture);
                this.title = JSON.parse(this.$route.query.video_title);
            }
        }

    }
</script>
<style>
  .playerStyle {
    width: 1000px;
    height: 650px;
    margin: auto;
  }

  .fontTitle {
    font-family: "Helvetica Neue";
  }
  .comment {
    width: 1000px;
    margin: auto;
  }

  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
</style>
