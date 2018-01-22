<template>
  <!-- app.vue 页面入口文件 主文件相当于index -->
  <div id="app">
    <!-- element-ui的使用，布局row 和 col配合使用，col的span属性可以设置该列的长度 1-24-->
    <el-row>
      <el-col :span="24" >
        <!-- 内嵌导航栏 menu标签 mode属性表示水平或者垂直-->
        <el-menu  :default-active="activeIndex1" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64"
          text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">
            <a href="https://www.ele.me" target="_blank">订单管理</a>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>

    <div class="main">
    
          <div class="main-left">
            <!-- nav -->
            <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
              <el-menu-item index="1">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </el-menu-item>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">导航三</span>
              </el-menu-item>

            </el-menu>
          </div>
        
          <div class="main-right">
            <!--main content -->
            <!-- 通过路由的不同来显示不同的视图 组件 -->
            <router-view/>
          </div>


    </div>

  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        activeIndex: 1
      }
    }
  };

</script>

<style>
  body,
  html,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  li,
  ul,
  div,
  p,
  span,
  input {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
  }
.main{
  display: flex;
  display: -webkit-flex;
}
.main-left {
  float: left;
  width: 20%;
  height: 500px;
  /* border-right: 1px solid #ccc; */
}
.main-right{
  float: left;
  width: 80%;
  /* border:1px solid red; */
}
</style>
