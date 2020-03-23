<template>
  <div class="upvideo">
    <el-button type="primary" @click="upVideo" v-permission="['teacher']">上传视频</el-button>
  </div>
</template>

<script>
  import permission from '@/directive/permission/index.js'
  export default {
    directives: { permission },
    name: 'upfile',
    data() {
      return {
        input: '',
        formInline: {
          user: '',
          region: ''
        },
        input1: '',
        input2: '',
        input3: '',
        select: ''
      }
    },
    methods:{
      upVideo() {
        let routUrl =this.$router.resolve({
          path:"/upVideo",
        })
        window.open(routUrl.href)
      }
    }
  }
</script>

<style>
.upvideo {
  margin-top: 0.3%;
  margin-left: 2%;
}
</style>
