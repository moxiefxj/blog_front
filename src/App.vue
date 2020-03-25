<template>
  <div id="app">
    <el-container>
      <!-- 导航栏 -->
    <el-header>
      <nav-com></nav-com>
    </el-header>
    <!-- 主体 -->
    <el-main>
      <router-view/>
    </el-main>
    <!-- 底部 -->
    <el-footer>
      <footer-com></footer-com>
    </el-footer>
  </el-container>
  </div>
    
</template>

<script>
import navCom from './components/navCom';
import footerCom from './components/footerCom'
  export default {
    name:'app',
    components:{
      navCom,
      footerCom,
    },
  }
</script>
  

