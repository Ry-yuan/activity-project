<template>
  <div>
    <p class="upload-title">上传资料</p>
    <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>
<script> 
  export default {
    name: 'upload',
    data() {
      return {

      }
    },
    methods: {

    },
    mounted() {

    }
  }

</script>
<style>
  .upload-title {
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 20px;
    padding-bottom: 10px;
    font-size: 25px;
    text-align: left;
    border-bottom: 2px solid #ccc;
  }

</style>
