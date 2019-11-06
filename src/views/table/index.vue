<template>
  <div class="tabulation">

  <el-row >
  <el-col :span="6"  v-for="count in room ">
    <div class="grid-content bg-purple"  @click="move(count)">
<!--      <router-link :to="{-->
<!--        path: 'src+\'live/\'+count.roomNumber',-->
<!--        // params: {-->
<!--        //     key: 'value', // orderNum : this.searchData.orderNo-->
<!--        // },-->
<!--        query: {-->
<!--           key: 'value',  orderNum : '1'-->
<!--        }-->
<!--    }-->
<!--">-->
      <el-card :body-style="{ padding: '0px' }" id="card">
        <img :src="count.image" class="image">
        <div class="card" style="padding: 10px;">
          <span class="title">asdasd</span>
          <div class="bottom clearfix">
            <time class="time"><svg-icon  icon-class="user"/>asda</time>
            <span class="heat"><svg-icon  icon-class="fire"/>70万</span>
          </div>
        </div>
      </el-card>
<!--      </router-link>-->
   </div>

  </el-col>
  </el-row>
  </div>




</template>

<script>
import { getList ,selectListRoom} from '@/api/table'

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
        room:[{}]


    }
  },
  created() {
    // this.fetchData()

      this.showList();
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
      showList(){
          selectListRoom().then( (res) => {
              this.room = res.data
              console.log(this.room)
          })
      },
      move(count){
          this.$router.push({
            path:this.src+'live/'+count.roomNumber,
            query: { roomNumber: count.roomNumber }
          })
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

</style>
