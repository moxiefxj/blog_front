import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import leaveComments from '../views/leaveComments.vue'
import essay from '../views/essay.vue'
import kinds from '../views/kinds.vue'
import time from '../views/time.vue'

Vue.use(VueRouter)

const routes = [
  // 首页
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // 文章页
  {
    path:'/p/:id',
    name:essay,
    component:essay,
  },
  // 分类
  {
    path:'/kinds/:kind/:kind_child',
    name:kinds,
    props:function(route){
      console.log(route)
      return{
        kind : route.params.kind,
        kind_child : route.params.kind_child,
      }
    },
    component:kinds
  },
  // 时间线
  {
    path: '/time',
    name: time,
    component:time
  },
  // 关于我
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // 留言
  {
    path :'/leaveComments',
    component:leaveComments
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
