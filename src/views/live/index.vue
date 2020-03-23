<template>
  <div class="item" >

    <div class="player" >
      <video-player   class="vjs-custom-skin"   :options="playerOptions"  >
      </video-player>

    </div>
    <div class="stage">
      <vue-baberrage
        :isShow= "barrageIsShow"
        :barrageList = "barrageList"
        :loop = "barrageLoop"
        :maxWordCount = "60"
      >
      </vue-baberrage>
    </div>


    <div class="demo-control">


      <el-row class="box-card" >
        <el-col :span="8" >
          <el-card :body-style="{ padding: '0px' }" class="long">


            <div id="text" >
              {{aaa}}
            </div>


            <div style="padding: 14px; margin-top: 15px">
<!--              <input type="text" v-model="name"></input>-->
<!--              <button type="button" @click="initWebSocket">连接</button>-->

<!--              <img src="">-->
              <el-input v-model="msg" placeholder="请输入内容" style="width: 180px">

<!--                <button type="button" style="float:left" @click="addToList">Add</button>-->
              </el-input>
              <el-button type="warning" @click="addToList" style="">发送</el-button>



            </div>
          </el-card>
        </el-col>
      </el-row>




      <div>
        <div>
        </div>

      </div>
    </div>



  </div>
</template>

<script>
    import { getList } from '@/api/table'
    import {rtmp} from "@/api/user";
    // import barrage from "./barrage/barrage";
    import { MESSAGE_TYPE } from 'vue-baberrage'



    export default {
        filters: {
            statusFilter(status) {
                const statusMap = {
                    published: 'success',
                    draft: 'gray',
                    deleted: 'danger'
                }
                return statusMap[status]
            }
        },
        // components:{
        //   barrage
        // },
        data() {
            return {
              exampleVideo: 'rtmp://47.96.237.94:1935/live/mylive',
                timer:1,
                list: null,
                listLoading: true,
              playerOptions: {
                height: '800',
                sources: [{
                  type: 'rtmp/flv',
                  src: ''
                }],
                techOrder: ['flash'],
                muted: false, // 默认静音
                preload: 'auto', // 视频预加载
                autoplay: true,
                notSupportedMessage: '今天没有公开课!',
                controlBar: {
                  timeDivider: true,
                  durationDisplay: true,
                  remainingTimeDisplay: false,
                  fullscreenToggle: true  //全屏按钮
                },
                poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-9.jpg",
                loop: false
              },
                msg: '',
                barrageIsShow: true,
                currentId : 0,
                barrageLoop: false,
                barrageList: [],
                position: 'abc',
                websocket:'',
                name:'',
                aaa:'',
                address:'rtmp://47.96.237.94:1935/live'
            }
        },
        created() {
            this.fetchData()
          // this.playerOptions.sources[0].src = "rtmp://47.96.237.94:1935/live/mylive"
        },
        destroyed() {
            this.websocketClose();
        },

        methods: {
          fetchData() {
              let roomNumber = this.$route.query.roomNumber

                rtmp(roomNumber).then( (re) =>{
                  this.name = sessionStorage.getItem("username")
                  this.playerOptions.sources[0].src = this.address + '/' +re.data.crossfire;
                  // console.log(this.playerOptions.sources)
                  this.initWebSocket()
                }).catch( (re) =>{
                    console.log(re)
                })
            },
            addToList () {
            let messageData = {
                chatUser: this.name,
                chatContent: this.msg
            };
                this.chatRoomWebsocket.send(JSON.stringify(messageData));
                //弹幕
                this.barrageList.push({
                    avatar:require('../../../static/avatar.jpg'),
                    id: ++this.currentId,
                    msg: this.msg,
                    time: 10,
                    type: 0,
                });
                this.setMessageInnerHTML(this.msg)
                this.msg = ''
            },
            // 初始化 websocket 连接
            initWebSocket() {
                if (typeof WebSocket != "undefined") {
                    this.supported = "支持 websocket";
                } else {
                    this.supported = "不支持 websocket";
                }
                //ws地址
                const wsuri = "ws://localhost:8080/websocket/" + this.name;
                this.chatRoomWebsocket = new WebSocket(wsuri);
                this.chatRoomWebsocket.onerror = this.websocketOnError;
                this.chatRoomWebsocket.onmessage = this.websocketOnMessage;
                this.chatRoomWebsocket.onclose = this.websocketOnClose;
            },
            //关闭
            websocketClose() {
                this.chatRoomWebsocket.close();
            },

            //连接关闭的回调方法
            websocketOnClose(e) {
                console.log("WebSocket 连接关闭", e);
            },
            //接收到消息的回调方法
            websocketOnMessage(event) {

                let data = JSON.parse(event.data);
                console.log(data);
                if (data.chatUser !== this.name){
                    this.setMessageInnerHTML(data.chatContent)

                    text.value(data.chatContent);
                    this.barrageList.push({
                        id: ++this.currentId,
                        msg: data.chatContent,
                        // barrageStyle: "normal",
                        time: 10,
                        type: 0,
                        // position: "bottom"
                    });
                }

            },
            setMessageInnerHTML(innerHTML){
                var barrage =document.createElement("div");
                barrage.setAttribute("style","margin-bottom: 5px;");
                var title = document.createElement("span");
                title.setAttribute("style","margin-right: 10px;color:#5F9EA0;font-weight:700");
                title.innerHTML = this.name + ":";
                var content = document.createElement("span");
                content.setAttribute("style","color:#000000");
                content.innerHTML = innerHTML
                barrage.appendChild(title);
                barrage.appendChild(content);
                document.getElementById('text').appendChild(barrage)
            }


        }
    }
</script>
<style lang="scss">
.stage {
  width: 1300px;
  height: 400px;
  position: absolute;
  margin-left: 20px;
  margin-top: 20px;

  }
  .player {
    /*position: absolute;*/
    /*float: left;*/
    width: 1300px;
    margin-left: 20px;
    margin-top: 20px;
    position: fixed;
  }

.demo-control{
  width: 300px;
  margin-top: 20px;
  margin-right: 60px;
  float: right;
  /*position: relative;*/
}
.long{
  width: 300px;
  height: 800px;

}
#text{
  overflow-y: auto;
  width: 100%;
  height: 700px;
  background: #e9e9e9;
}

</style>
