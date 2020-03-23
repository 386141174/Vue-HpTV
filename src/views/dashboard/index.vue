<template>
  <div class="pointer">
    <div>
      <el-carousel :interval="3000" arrow="always">
        <el-carousel-item v-for="(item,index) in items.slice(0,3)" :key="index">
          <div style="text-align:center; background-color: white">
            <img :src=item.picUrl style="height: 100%" id="carouselImage" @click="on_play(item)">
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="courseType">
      <div>
        <h2>
          为您推荐
        </h2>
      </div>
      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <div v-for="(recommends,index) in recommend.slice(0,6)" :key="index">
            <div class="reseau">
              <img :src=recommends.picUrl style="height: 150px; width: 250px;text-align:center;" @click="on_play(recommends)">
              <div>
                <h6 style="margin-top: 5px">{{recommends.upVideoName}}</h6>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="courseType">
      <div>
        <h2>
          {{frontEnd}}
        </h2>
      </div>
      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <div v-for="(item,index) in frontCourse.slice(0,6)" :key="index">
            <div class="reseau" style="">
              <img :src=item.picUrl style="height: 100%; width: 250px;text-align:center;" @click="on_play(item)">
              <div>
                <h6 style="margin-top: 5px">{{item.upVideoName}}</h6>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
<!--    <div class="courseType">-->
<!--      <div>-->
<!--        <h2>-->
<!--          基础课程-->
<!--        </h2>-->
<!--      </div>-->
<!--      <el-row :gutter="20">-->
<!--        <el-col :span="12" :offset="6">-->
<!--          <div v-for="(item,index) in items" :key="index">-->
<!--            <div class="reseau" style="">-->
<!--              <img :src=item.picUrl style="height: 100%; width: 250px;text-align:center;" @click="on_play(item)">-->
<!--            </div>-->
<!--          </div>-->
<!--        </el-col>-->
<!--      </el-row>-->
<!--    </div>-->
    <div v-html="alipayWap" ref="alipayWap"></div>
  </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import {getVideo} from '../../api/user'
    import {payOrder} from "../../api/order";
    import {selectByVideoType} from "../../api/video";
    import {queryRecommend,queryifBuy} from "../../api/video";

    export default {
        name: "Dashboard",
        computed: {
            ...mapGetters(["name"])
        },
        created() {
            this.selectCarousel();
            this.getRecommend();
            this.selectBuVideoType();
        },
        data() {
            return {
                alipayWap: '',
                items: [],
                recommend:[],
                frontEnd:'前端课程',
                frontCourse:[]
            };
        },
        methods: {
            selectCarousel() {
                getVideo().then((respond) => {
                    // console.log(respond.data.items)
                    this.items = respond.data.items
                })
            },
            selectBuVideoType() {
                let videoType = "前端"
                selectByVideoType(videoType).then( (respond) => {
                    console.log(respond)
                    this.frontCourse = respond.data
                })
            },
            on_play(param) {
                console.log(param);
                if (param.ifopen === 1) {
                    let requestParam = {
                        "teacherName" : param.teachername,
                        "order_liveType" : param.livetype,
                        "userName" : sessionStorage.getItem("username")
                    }
                    queryifBuy(requestParam).then( (respond) => {
                        if (respond.state === 1) {
                            this.videoPlay(param);
                        }else {
                            this.$message({
                                message: '对不起,此视频需要购买相应课程！',
                                type: 'warning'
                            });
                        }
                    })
                } else {
                    this.videoPlay(param)
                }
            },
            videoPlay(param) {
                let rourl = this.$router.resolve({
                    path: '/picture',
                    query: {
                        video_url: JSON.stringify(param.videoUrl),
                        video_picture: JSON.stringify(param.picUrl),
                        video_title: JSON.stringify(param.upVideoName),
                        video_describe: JSON.stringify(param.describe)
                    }
                })
                window.open(rourl.href)
            },
            getRecommend() {
                let requestParam = {
                    "username" : sessionStorage.getItem("username")
                }
                queryRecommend(requestParam).then( (respond) => {
                    this.recommend = respond.data;
                })
            }
        },
        components: {
            // NavBar,
            // SearchBox,
            // LunBo
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
    width: 100%;
    height: 300px;
    position: absolute;
    top: 5px;
    left: 3px;
    // background-image: url("../../assets/img/teacher.png");
    // background-size: 1860px 300px;

    min-width: 960px;
  }

  .el-header,
  .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-carousel__item div {
    color: #475669;
    font-size: 14px;
    /*opacity: 0.75;*/
    line-height: 200px;
    margin: 0;
  }

  .courseType {
    margin-top: 4%;
    text-align: center;
    font-size: 30px;
    line-height: 30px;
  }

  .courseType h2 {
    font-weight: 400;
  }

  .reseau {
    float: left;
    margin-top: 1%;
    margin-right: 1%;
  }

  .el-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .pointer image {
    cursor: pointer;
  }
</style>
