<template>
  <div> 
    <p class="manage-title">跟进事项</p>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="formInline.user" placeholder="姓名"></el-input>
      </el-form-item>

      <el-form-item label="状态">
        <el-input v-model="formInline.status" placeholder=""></el-input>
      </el-form-item>

      <el-form-item label="时间">
        <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date" style="width: 100%;"></el-date-picker>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addItem">添加事项</el-button>
      </el-form-item>
    </el-form>


    <!-- 表格 -->
    <el-table :data="tableData" border class="follow-table">
      <el-table-column label="跟进人" prop="follower"></el-table-column>
      <el-table-column label="内容" prop="content"></el-table-column>
      <el-table-column label="启动时间" prop="startTime"></el-table-column>
      <el-table-column label="计划结束时间" prop="endTime"></el-table-column>
      <el-table-column label="状态" prop="status"></el-table-column>
      <el-table-column label="备注" prop="tips"></el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
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
    name: 'follow',
    data() {
      return {
        formInline: {
          user: '',
          date: '',
          status: ''
        },
        tableData: [{
          "follower": 5,
          "content": "打球",
          "startTime": "2017-10-09",
          "endTime": '2017-10-10',
          "status": 1,
          "tips": '11'
        }]
      }
    },
    methods: {
      onSubmit: function () {
        console.log('check');
      },
      addItem: function () {
        console.log('additem');
      }
    },
    mounted() {
      let _this = this;
      this.$http.get('/api/follow',{}).then((res)=>{
        _this.tableData = res.data.items;
      })
    }
  }

</script>
<style scoped>
  .follow-table {
    text-align: left;
  }

  .manage-title {
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 20px;
    padding-bottom: 10px;
    font-size: 25px;
    text-align: left;
    border-bottom: 2px solid #ccc;
  }

 .paper-pagination {
    float: right;
    margin-top: 50px;
  }

</style>
