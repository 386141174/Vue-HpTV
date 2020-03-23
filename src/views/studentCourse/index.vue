<template>

  <div>
    <el-row :gutter="20">
      <el-col :span="16" :offset="1">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="title"
            label="课程标题"
            width="180">
          </el-table-column>

          <el-table-column
            label="课程描述"
            width="180">
            <template slot-scope="scope">
            <el-image
              style="width: 100%; height: 100%"
              :src="scope.row.image"
              ></el-image>
            </template>
          </el-table-column>
          <el-table-column
            prop="roomNumber"
            label="房间号"
            width="300">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="handleDelete(scope.$index, scope.row)">回看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>

    </el-row>

  </div>

</template>

<script>

    import {queryStudentCourse} from "../../api/live";

    export default {
        data() {
            return {
                tableData:[]
            }
        },
        created() {
            this.showCourse();
        },
        methods: {
            handleDelete(index,row) {
                console.log(row.image)
                this.$router.push(
                    {
                        path:'/studentCourse/replay',
                        query:{
                            aaa:JSON.stringify(row)
                        }
                    }
                )
            },
            showCourse(){
                let username = sessionStorage.getItem("username");
                queryStudentCourse(username).then((respond) => {
                    console.log(respond)
                    this.tableData = respond.data
                })
            }
        }
    }


</script>

<style type="text/css">

</style>
