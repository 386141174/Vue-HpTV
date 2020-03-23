<template>

  <div>
    <el-row :gutter="20">

      <el-col :span="16" :offset="1">
        <div class="grid-content bg-purple">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            label="ID"
            width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.id }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="视频分类"
            width="180">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>名称: {{ scope.row.videoType }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.videoType }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            label="课程描述"
            width="400">
            <template slot-scope="scope" >
              <span style="margin-left: 10px">{{ scope.row.describe }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="创建时间"
            width="280">
            <template slot-scope="scope" >
              <span style="margin-left: 10px">{{ scope.row.createTime }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

      </div>
      </el-col>

    </el-row>

  </div>

</template>

<script>

    import {teacherVideo} from "../../api/video";

    import {deleteVideo} from "../../api/video";

    export default {
        data() {
            return {
                tableData:[]
            }
        },
        created() {
            this.myVideo()
        },
        methods: {
            myVideo() {
                let teachername = sessionStorage.getItem("username");
              teacherVideo(teachername).then( (respond) => {
                  console.log(respond)
                  this.tableData = respond.data
              })
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
                deleteVideo(row.id).then((respond) => {
                    if (respond.state === 1) {
                        this.$message({
                            showClose: true,
                            message: '删除成功'
                        });

                    }else {
                        this.$message({
                            showClose: true,
                            message: '删除失败',
                            type: 'warning'
                        });
                    }
                    location.reload()
                })
            }
        }
    }


</script>

<style type="text/css">

</style>
