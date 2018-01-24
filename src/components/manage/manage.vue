<template>
  <div>
    <p class="manage-title">xxx管理</p>
    <el-form :model="manageData" :inline="true">
      <el-form-item label="时间">
        <el-date-picker v-model="manageData.time" placeholder=""></el-date-picker>
      </el-form-item>

      <el-form-item label="">
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <!-- 表格 -->
    <el-table :data="tableData" class="manage-table" border>
      <el-table-column label="跟进人" prop="follower"></el-table-column>
      <el-table-column label="事项" prop="content"></el-table-column>
      <el-table-column label="提交情况" prop="submit_case"></el-table-column>
      <el-table-column label="提交" prop="submit"></el-table-column>
      <el-table-column label="时间" prop="time"></el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scoped">
          <el-button type="primary" size="small">编辑</el-button>
          <el-button type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <div class="paper-pagination">
      <el-pagination background  layout="prev,pager,next" :total="100" :page-size="10" current-page.sync="1" @current-change="currentChange"></el-pagination>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'manage',
    data() {
      return {
        manageData: {
          time: ''
        },
        tableData: []
      }
    },
    methods: {
      onSubmit: function () {
        console.log('查询');
      },
      currentChange:function(){
        console.log('分页');
      }
    },
    mounted() {
      let _this = this;
      this.$http.get('/api/manage',{}).then((res=>{
        _this.tableData = res.data.items;
      }))
    }
  }

</script>
<style scoped>
  .manage-title {
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 20px;
    padding-bottom: 10px;
    font-size: 25px;
    text-align: left;
    border-bottom: 2px solid #ccc;
  }
  .manage-table{
      text-align: left;
  }

  .paper-pagination {
    float: right;
    margin-top: 50px;
  }

</style>
