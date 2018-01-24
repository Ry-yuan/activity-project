//main.js 文件 程序入口文件，加载各种公共组件

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入element ui
import ElementUI from 'element-ui'
// 引入element ui css
import 'element-ui/lib/theme-chalk/index.css'
// axios
import axios from 'axios'
// mockjs
import Mock from './mock/mock'
// vue全局使用element ui
Vue.use(ElementUI);
Vue.prototype.$http = axios;
Vue.config.productionTip = false

Mock.mockData();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
