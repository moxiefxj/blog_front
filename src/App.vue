<template>
  <div id="app">
    <el-container>
      <!-- 导航栏 -->
    <el-header>
      <nav-com v-if="fullWidth"></nav-com>
      <navp-com v-else></navp-com> 
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
import navpCom from './components/navpCom'
import footerCom from './components/footerCom'
  export default {
    name:'app',
    components:{
      navCom,
      footerCom,
      navpCom,
    },
    data() {
      return {
        fullWidth: true,
      }
    },
    mounted() {
      window.onresize = () => {//监听屏幕变化
        this.page_width();
      };
      this.page_width();
    },
    methods: {
      page_width() {//获取屏幕宽度
        let screenWidth = window.screen.width;
        if (screenWidth < 700) {
          this.fullWidth = false;
        } else {
          this.fullWidth = true;
        }
      }
    },
  }
</script>
  

