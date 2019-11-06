<template>
  <div id="dammu">
    <vue-baberrage
      :isShow= "barrageIsShow"
      :barrageList = "barrageList"
      :loop = "barrageLoop"
    >
    </vue-baberrage>
    <div>
      <select v-model="position">
        <option value="top">从上</option>
        <option value="abc">从右</option>
      </select>
      <input type="text" style="float:left"  v-model="msg" />
      <button type="button" style="float:left" @click="addToList">Add</button>
    </div>
  </div>



</template>

<script>
    import { getList } from '@/api/table'
    import {rtmp} from "@/api/user";
    import { MESSAGE_TYPE } from 'vue-baberrage'

    export default {
        name: 'app',
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
                msg: 'Hello vue-baberrage',
                barrageIsShow: true,
                currentId : 0,
                barrageLoop: false,
                barrageList: []
            }
        },
        created() {

        },
        mounted(){

        },
        methods: {
            addToList () {
                this.barrageList.push({
                    id: ++this.currentId,
                    avatar: "./static/avatar.jpg",
                    msg: this.msg,
                    time: 5,
                    type: MESSAGE_TYPE.NORMAL
                });
            }

        }
    }
</script>
<style lang="scss">

</style>
