<template>
  <div>
    <p class="manage-title">xxx管理</p>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="formInline.name" placeholder="姓名"></el-input>
      </el-form-item>

      <el-form-item label="时间">
        <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date" style="width: 100%;"></el-date-picker>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="fillTable">填写周报</el-button>
      </el-form-item>
    </el-form>

    <!-- 表格 -->
    <el-table :data="tableData" border class="paper-table">
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="上周计划" prop="last_week_plan"></el-table-column>
      <el-table-column label="本周计划" prop="this_week_summary"></el-table-column>
      <el-table-column label="下周计划" prop="next_week_plan"></el-table-column>
      <el-table-column label="重点和问题" prop="importance"></el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="editSubmit(scope.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="deleteSubmit(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 弹窗 -->
    <el-dialog :title=dialogTitle :visible.sync="dialogVisible" >
      <!-- 表单 -->
      <el-form :model="dialogData" label-width="100px" class="paper-form">
        <el-form-item label="姓名">
          <el-input v-model="dialogData.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="上周计划">
          <el-input v-model="dialogData.last_week_plan" placeholder="上周计划" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="本周计划">
          <el-input v-model="dialogData.this_week_summary" placeholder="本周计划" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="下周计划">
          <el-input v-model="dialogData.next_week_plan" placeholder="下周计划" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="重点和问题">
          <el-input v-model="dialogData.importance" placeholder="重点和问题" type="textarea"> </el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-date-picker v-model="dialogData.time" placeholder="时间" style="width:100%"></el-date-picker>
        </el-form-item>

          <el-button type="primary" @click="onSubmitForm">确定</el-button>
          <el-button type="danger" @click="dialogVisible = false">取消</el-button>
   
      </el-form>
    </el-dialog>

    <!-- 分页 -->
    <div class="paper-pagination">
      <el-pagination background  layout="prev,pager,next" :total="100" :page-size="10" current-page.sync="1" @current-change="currentChange"></el-pagination>
    </div>
  </div>
</template>
<script>
  export default {
    name: "paper",
    // 数据属性函数，在组件中以函数形式出现
    data() {
      return {
        // 填写周报弹窗
        dialogVisible: false,
        dialogTitle : '',
        // 查询参数
        formInline: {
          name: '',
          date: ''
        },
        // 表格数据
        tableData: [],

        dialogData: {
          name: '',
          last_week_plan: '',
          this_week_summary: '',
          next_week_plan: '',
          time: '',
          importasnce: ''
        }
      }
    },
    // 方法属性
    methods: {
      // 查询
      onSubmit: function () {
        console.log('提交查询');
      },
      // 填写表单按钮
      fillTable: function () {
        this.dialogTitle = '填写周报';
        this.dialogVisible = true;
      },
      // 分页执行
      currentChange: function(page){
        console.log('分页');
      },
      // 提交表单按钮
      onSubmitForm:function(){
        console.log('填写表单');
      },
      // 操作，编辑
      editSubmit:function(){
        console.log('编辑');
        this.dialogTitle = '编辑周报';
        this.dialogVisible = true;
      },
      // 操作，删除
      deleteSubmit:function(){
        console.log('删除');
      }
    },
    // 挂载完成后执行的函数
    mounted() {
      let _this = this;
      this.$http.get('/api/paper').then(function(res){
        _this.tableData = res.data.items;
        // console.log(res.data.items);
        });
    }
  }

</script>
<style>
  .paper-table {
    text-align: left;
  }

  .paper-pagination {
    float: right;
    margin-top: 50px;
  }
.paper-form{
  margin:0 auto;
  width: 90%;
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

</style>
