<template>
  <div class="app-container">
    <el-table
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="订单编号" >
        <template slot-scope="scope">
          {{ scope.row.orderId }}
        </template>
      </el-table-column>
      <el-table-column label="课程名称" width="400">
        <template slot-scope="scope">
          {{ scope.row.course }}
        </template>
      </el-table-column>
      <el-table-column label="订单金额" width="200" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.order_amount }}</span>
        </template>
      </el-table-column>
<!--      <el-table-column label="视频分类" width="210" align="center">-->
<!--        <template slot-scope="scope">-->
<!--          {{ scope.row.order_videoType }}-->
<!--        </template>-->
<!--      </el-table-column>-->
      <el-table-column class-name="status-col" label="状态" width="210" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.order_status | statusFilter"> {{scope.row.order_status}} </el-tag>
<!--          <el-tag type="danger" @click="clicl">退款</el-tag>-->
          <el-button size="small" type="danger" @click="open(scope.row)">退款</el-button>
        </template>

      </el-table-column>
      <el-table-column align="center" prop="created_at" label="创建时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.createTime }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    import { getList } from '@/api/table'
    import {drawback} from "../../api/order";
    import {selectOrder} from "../../api/goods";

    export default {
        filters: {
            statusFilter(status) {
                if (status === null ){
                    console.log("success")
                   // vm.sdsad = "aaa"
                    return status
                }else {
                    // this.sdsad = "未支付";
                }
            }
        },
        data() {
            return {
                list: null,
                sdsad:''
                // listLoading: true
            }
        },
        created() {
            // this.fetchData()
            this.fetchData()
        },
        methods: {
            fetchData() {
                let request = {
                    "username" : sessionStorage.getItem("username")
                }
                selectOrder(request).then(response => {
                    this.list = response.data;
                })
            },
            clicl(param) {
                console.log(param)
                let orderId = {
                    "out_trade_no" : param.orderId
                };
                drawback(orderId).then( (respond) => {
                    if (respond.state === 1) {

                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });

                    }
                    location.reload();
                })
            },
            open(param) {
                this.$confirm('此操作将退款, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.clicl(param);
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });
            }
        }
    }
</script>
