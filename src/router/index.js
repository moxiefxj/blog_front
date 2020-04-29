import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import leaveComments from '../views/leaveComments.vue'
import essay from '../views/essay.vue'
import kinds from '../views/kinds.vue'
import time from '../views/time.vue'
import writeEssay from '../views/writeEssay.vue';
import login from "../views/login.vue";
import tech from "../views/tech.vue"
import note from "../views/note.vue"

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
  // 技术
  {
    path:"/tech",
    component:tech,
  },
  // 日常
  {
    path:"/note",
    component:note,
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
    path:"/time",
    component:time,
  },
  // 写文章
  // {
  //   path:"/writeEssay",
  //   component:writeEssay,
  // },
  // 关于我
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  // 留言
  {
    path :'/leaveComments',
    component:leaveComments
  },
  // 登录
  {
    path:"/login",
    component:login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
