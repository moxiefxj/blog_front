import Vue from 'vue'
import VueRouter from 'vue-router'
const essay = ()=> ('../views/essay.vue')
const kinds = ()=> ('../views/kinds.vue')

Vue.use(VueRouter)

// 初始化路由
const initroutes = [
  // 首页
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  // 文章页
  {
    path:'/p/:id',
    name:essay,
    component:()=> import('../views/essay.vue'),
  },
  // 技术
  {
    path:"/tech",
    component:()=> import("../views/tech.vue"),
  },
  // 日常
  {
    path:"/note",
    component:()=> import("../views/note.vue"),
  },
  // 分类
  {
    path:'/kinds/:kind/:kind_child',
    name:kinds,
    props:function(route){
      return{
        kind : route.params.kind,
        kind_child : route.params.kind_child,
      }
    },
    component:()=> import('../views/kinds.vue')
  },
  // 时间线
  {
    path:"/time",
    component:()=> import('../views/time.vue'),
  },
  // 关于我
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  // 留言
  {
    path :'/leaveComments',
    component:() => import('../views/leaveComments.vue')
  },
  // 登录
  {
    path:"/login",
    component:()=> import("../views/login.vue")
  },
  {
    path:'*',
    component:()=>import('../views/404.vue')
  }
]
export const  menu = {
  "写文章":{
    path:"/writeEssay",
    component:() =>import('../views/writeEssay.vue'),
    meta:{role:['0'],nav:true}
  },
}

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: initroutes
})
