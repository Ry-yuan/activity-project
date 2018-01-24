// 路由配置文件
import Vue from 'vue'
import Router from 'vue-router'
import paper from '@/components/paper/paper'
import follow from '@/components/follow/follow'
import manage from '@/components/manage/manage'
import upload from '@/components/upload/upload'
Vue.use(Router)

// 返回路由对象
export default new Router({
  // 在routes中配置对应的路径和组件关系
  routes: [
    {
      path: '/paper',
      name: 'paper',
      component: paper
    },{
      path:'/follow',
      name:'follow',
      component: follow
    },{
      path:'/manage',
      name:'manage',
      component:manage
    },{
      path:'/upload',
      name:'upload',
      component:upload
    }
  ]
})
