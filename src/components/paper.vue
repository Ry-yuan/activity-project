<template>
  <div>
    <p class="manage-title">周报管理</p>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="formInline.user" placeholder="姓名"></el-input>
      </el-form-item>

      <el-form-item label="时间">
        <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date1" style="width: 100%;"></el-date-picker>
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
      <el-table-column label="姓名" prop="report_id"></el-table-column>
      <el-table-column label="上周计划" prop="last_week_plan"></el-table-column>
      <el-table-column label="本周计划" prop="this_week_summary"></el-table-column>
      <el-table-column label="下周计划" prop="next_week_plan"></el-table-column>
      <el-table-column label="重点和问题" prop="importance"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small">编辑</el-button>
          <el-button type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 弹窗 -->
    <el-dialog title="填写周报" :visible.sync="dialogVisible">
      <!-- 表单 -->
      <el-form :model="dialogData">
        <el-form-item label="姓名">
          <el-input v-model="dialogData.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="上周计划">
          <el-input v-model="dialogData.last_week_plan" placeholder="上周计划"></el-input>
        </el-form-item>
        <el-form-item label="本周计划">
          <el-input v-model="dialogData.this_week_summary" placeholder="本周计划"></el-input>
        </el-form-item>
        <el-form-item label="下周计划">
          <el-input v-model="dialogData.next_week_plan" placeholder="下周计划"></el-input>
        </el-form-item>
        <el-form-item label="重点和问题">
          <el-input v-model="dialogData.importance" placeholder="重点和问题"></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-date-picker v-model="dialogData.time" placeholder="时间"></el-date-picker>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!-- 分页 -->
    <div class="paper-pagination">
      <el-pagination layout="prev,pager,next" :total="100" :page-size="10" current-page.sync="1" @current-change="currentChange"></el-pagination>
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
        formInline: {
          user: '',
          region: '',
          date1: ''
        },
        tableData: [{
            "report_id": 5,
            "importance": "xx",
            "name": "xxx",
            "time": "2017-01-18",
            "last_week_plan": "sleep",
            "this_week_summary": "play",
            "next_week_plan": "code"
          },
          {
            "report_id": 6,
            "importance": " 是",
            "name": "xxxx",
            "time": "2017-01-18",
            "last_week_plan": "点",
            "this_week_summary": " 是",
            "next_week_plan": " 是"
          }
        ],
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
      onSubmit: function () {

      },
      fillTable: function () {
        this.dialogVisible = true;
      },
      currentChange: function(page){
        console.log('分页');
      }
    },
    // 挂载完成后执行的函数
    mounted() {
      // this.$http.get().then(function(res){
      //   console.log(res);
      // });
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
