<template>
  <!-- app.vue 页面入口文件 作为其他组件的挂载点-->
  <div id="app">
    <!-- element-ui的使用，布局row 和 col配合使用，col的span属性可以设置该列的长度 1-24-->
    <el-row>
      <el-col :span="24" class="menu">
        <span class="title">XXX后台系统</span>
        <div class="btn-box">
          <el-button type="primary">登陆</el-button>
          <el-button type="info">注册</el-button>
        </div>
      </el-col>
    </el-row>
    <div class="main">
      <div class="main-left">
        <!-- nav -->
        <el-menu default-active="1" class="el-menu-vertical-demo">

          <router-link to="/paper">
            <el-menu-item index="1">
              <i class="el-icon-view"></i>
              <span>xxx管理</span>
            </el-menu-item>
          </router-link>

          <router-link to="/follow">
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">xxx事项</span>
            </el-menu-item>
          </router-link>

          <router-link to="/manage">
            <el-menu-item index="3">
              <i class="el-icon-tickets"></i>
              <span slot="title">资料浏览</span>
            </el-menu-item>
          </router-link>

          <router-link to="/upload">
            <el-menu-item index="4">
              <i class="el-icon-upload"></i>
              <span slot="title">上传资料</span>
            </el-menu-item>
          </router-link>

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
 * {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
  }
  .menu{
    height: 80px;
    background-color: #72777b;
  }
  .menu .title{
    display:inline-block;
    float: left;
    padding-left:50px;
    color: #fff;
    letter-spacing: 3px;
    font-size: 25px;
    text-align:left;
    line-height: 80px;
  }
  .main {
    display: flex;
    display: -webkit-flex;
  }
  .menu .btn-box{
    margin-right:30px;
    float: right;
    height: 100%;
    line-height:80px;
  }

  .main-left {
    float: left;
    width: 20%;
    height: 500px;
    /* border-right: 1px solid #ccc; */
  }

  .main-right {
    margin-left:5%;
    float: left;
    width: 70%;
    min-width: 1000px;
    /* border:1px solid red; */
  }

</style>
