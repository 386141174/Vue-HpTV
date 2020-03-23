<template>

  <div>
    <el-row :gutter="20">

      <el-col :span="16" :offset="1"><div class="grid-content bg-purple">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="userLogin.id"
            label="序号"
            width="300">
          </el-table-column>
          <el-table-column
            prop="userLogin.username"
            label="用户名"
            width="300">
          </el-table-column>
          <el-table-column
            prop="userLogin.idCard"
            label="ID">
          </el-table-column>
        </el-table>
      </div></el-col>

    </el-row>

  </div>

</template>

<script>

  import {myStudent} from "../../api/order";

  export default {
        data() {
            return {
                tableData:[]
            }
        },
        created() {
            this.getMyStudent()
        },
        methods: {
            getMyStudent() {
                let teacher = sessionStorage.getItem("username");
                myStudent(teacher).then( (respond) => {
                    console.log(respond.data)
                    this.tableData = respond.data
                })
            }
        }
    }


</script>

<style type="text/css">

</style>
