<template>
  <div style="margin-left: 20%;width: 40%;margin-top: 0.3%">
    <div>
      <el-input placeholder="请输入内容" v-model="input3" >
        <el-button slot="append" icon="el-icon-search" @click="query"></el-button>
      </el-input>
    </div>



  </div>

</template>

<script>
  import {queryVideo} from '../../api/video'
  export default {
  name: 'addquery',
    data() {
      return {
        input: '',
        formInline: {
          user: '',
          region: ''
        },
        input3: '',
      }
    },
    methods: {
      query() {
        let query = {
          keyword : this.input3,
          page : 1
        }
        queryVideo(query).then( (request) => {
          let rourl = this.$router.resolve({
            path: '/queryVideo',
            query:{
              video: JSON.stringify(request.data.items) ,
              pageSize : JSON.stringify(request.data.pageCount),
              keyword : this.input3
            }
          })
          window.open(rourl.href)
        }).catch( (request => {
          this.$message({
            message: '对不起,搜索失败',
            type: 'warning'
          });
        }))

      }
    }
  }
</script>

<style>
  .searchInput {
    height: 38px;

  }
  .searchButton {
    height: 38px;
  }
</style>
