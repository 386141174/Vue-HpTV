<template>
  <div class="">
    <div style="margin-left: 20px">
      <el-row >
        <el-col :span="4"  v-for="(lists,index) in list" :key="index">
          <div class="grid-content bg-purple"  >
            <el-card :body-style="{ padding: '0px' }" id="card">
              <img :src="lists.picUrl" class="image" @click="on_play(lists)" >
              <div class="card" style="padding: 10px;">
                <span class="title">{{lists.upVideoName}}</span>
                <div class="bottom clearfix">
                  <time class="time"><svg-icon  icon-class="user"/>{{lists.name}}</time>
                  <span class="heat"><svg-icon  icon-class="fire"/>70万</span>
                </div>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
      <div style="text-align: center">
        <el-pagination
          background
          layout="prev, pager, next"
          :current-page="curentPage"
          :page-count="pageSize"
          @current-change="currentchange"

          >
        </el-pagination>
      </div>
    </div>


  </div>




</template>

<script>
  import { getList ,selectListRoom} from '@/api/table'
  import {queryVideo} from '../../api/video'
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
    data() {
      return {
        list: '',
        listLoading: true,
        currentDate: new Date(),
        src:'/example/',
        room:[{}],
        pageSize:0,
        input3:'',
        curentPage:1,
        kewWord:''

      }
    },
    created() {
      this.ifNewPage();
      console.log(this.$route.query)

    },
    watch:{
      curentPage() {
        console.log(this.curentPage)
      }
    },
    methods: {
      fetchData() {
        this.listLoading = true
        getList().then(response => {
          this.list = response.data.items
          this.listLoading = false
        })
      },
      mouseOver: function(){
        this.active = 'background-color: #cccccc';
      },
      mouseLeave: function () {
        this.active = '';
      },
      ifNewPage() {
        this.list = JSON.parse(this.$route.query.video)
        this.pageSize = JSON.parse(this.$route.query.pageSize)
        this.kewWord = this.$route.query.keyword
      },
      currentchange(curentPage){
        let params = {
          keyword : this.kewWord,
          page : curentPage
        }
        console.log(params)
        queryVideo(params).then( (request => {
          console.log(request)
          this.list = request.data.items;
        }))
      },
        on_play(param) {
          console.log(param)
            let rourl = this.$router.resolve({
                path:'/picture',
                query:{
                    video_url:JSON.stringify(param.videoUrl),
                    video_picture:JSON.stringify(param.picUrl),
                    video_title: JSON.stringify(param.upVideoName),
                    video_describe:JSON.stringify(param.describe)
                }
            })
            window.open(rourl.href)
        }

    }
  }


</script>
<style lang="scss">
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
    background: #e5e9f2;
  }
  .bg-purple {
    background: #cdcdcd;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    /*min-height: 36px;*/
    cursor: pointer;/*鼠标变成手指样式*/
    transition: all 0.2s;/*所有属性变化在0.6秒内执行动画*/
    width: 292px;
    height:263px;
    border-radius: 6px;
    text-align: center;
    margin-top: 20px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .grid-content:hover{
    transform: scale(1.1);/*鼠标放上之后元素变成1.4倍大小*/
  }
  .tabulation{
    margin: 0 20px 20px 20px;

  }
  .time {
    font-size: 13px;
    float: left;
    color: #999;
  }

  .heat{
    float: right;
    font-size: 12px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    height: 200px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .card{
    height: auto;
  }

  .header {
    height: 60px;
    background: #fff;
    overflow: hidden;
    position: relative;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);

  }

  .inputKeyWord {
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px
  }

</style>
