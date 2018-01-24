# activity-project

> vue 2.0+ & element-ui project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


# vue-cli + element-ui 打造SPA应用过程重点：
## 1.先装好环境vue-cli
```bash
# 安装vue-cli
npm i vue-cli -g
# 在你的project中安装vue项目
vue webpack <project-path>

# webpack安装需求填写

# 进入project
cd <project-path>

# 安装依赖
npm install

# 安装element-ui
npm install element-ui --save

# 我用了mock数据，安装mock
npm install mockjs --save-dev

# 启动
npm run dev

# 浏览器打开localhost:8080
localhost:8080
```

## 2.项目过程：
进入项目看清楚目录结构
在src目录中进行开发
### (1)assets目录存放一些静态的资源，如图片

### (2)components 目录是公共的组件，我在里面写了三个组件，组件文件后缀是.vue
vue组件文件结构：
```html
<template>
    //html代码
</template>
<script>
//vue 实例
exprot default{
    name:'组件名',
    data(){

    },
    methods{

    },
    mounted(){

    }
    //.....
}
</script>
<style>
    //写css
</style>
```

### (3)mock可以模拟数据，利于前后端分离开发，使用方法：
```bash
# 创建mock文件夹，分开存放。里面创建mock.js，mock.js 中引入mockjs，详看mock.js文件

# 最后在main.js 中引入mock文夹中的mock.js 文件，调用mock中的Mock.mockData();

# 之后便可以在对应的组件请求对应的接口了
```

### (4)vue-router（router文件夹）
1.在index中，vue-router：import进vue-router，Vue.use(Router)
2.引入其他组件
3.在new Router({})对象的routes属性中将路径和组件关联起来即可。 


### (5)axios--发送请求的模块，使用方式
使用axios发送请求。
安装axios：npm install axios -S

```javascript
//在main.js中引入：
improt axios from 'axios'
Vue.prototype.$http = axios;
//在组件中使用
this.$http.get(url,{parma:xxx}).then((res)=>{
    //success execute
}).then((res)=>{
    //error execute
});
```

### （6）App.vue的作用
> 作为首页，组件的挂载页面

### （7）main.js的作用
> 作为项目入口，在此引入各种项目依赖的模块，并将组件挂载到app.vue中


# vue cli 文件目录结构解析
```bash
|-- build                            // 项目构建(webpack)相关代码
|   |-- build.js                     // 生产环境构建代码
|   |-- check-version.js             // 检查node、npm等版本
|   |-- dev-client.js                // 热重载相关
|   |-- dev-server.js                // 构建本地服务器
|   |-- utils.js                     // 构建工具相关
|   |-- webpack.base.conf.js         // webpack基础配置
|   |-- webpack.dev.conf.js          // webpack开发环境配置
|   |-- webpack.prod.conf.js         // webpack生产环境配置
|-- config                           // 项目开发环境配置
|   |-- dev.env.js                   // 开发环境变量
|   |-- index.js                     // 项目一些配置变量
|   |-- prod.env.js                  // 生产环境变量
|   |-- test.env.js                  // 测试环境变量
|-- src                              // 源码目录
|   |-- components                     // vue公共组件
|   |-- App.vue                        // 页面入口文件
|   |-- main.js                        // 程序入口文件，加载各种公共组件
|   |-- mock                         //mock数据（添加）
|-- static                           // 静态文件，比如一些图片，json数据等
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 定义代码格式
|-- .gitignore                       // git上传需要忽略的文件格式
|-- README.md                        // 项目说明
|-- favicon.ico 
|-- index.html                       // 入口页面
|-- package.json                     // 项目基本信息
```

