<template>
  <div id="app">
    <el-container>
      <!-- 导航栏 -->
    <el-header>
      <nav-com v-if="fullWidth" :navData = "navData"></nav-com>
      <navp-com v-else :navData = "navData"></navp-com> 
    </el-header>
    <!-- 主体 -->
    <el-main>
      <router-view/>
    </el-main>
    <!-- 底部 -->
    <el-footer class="footer">
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
        navData:[
          {
                name: "首页",
                url: "/",
                icon: "el-icon-menu"
            },
            {
                name: "技术",
                url: "/tech",
                icon: "el-icon-paperclip"
            },
            {
                name: "日常",
                url: "/note",
                icon: "el-icon-star-off"
            },
            {
                name: "关于我",
                url: "/about",
                icon: "el-icon-coordinate"
            },
            {
                name: "留言",
                url: "/leavecomments",
                icon: "el-icon-collection"
            }
        ],
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
        if (screenWidth < 900) {
          this.fullWidth = false;
        } else {
          this.fullWidth = true;
        }
      }
    },
  }
</script>
<style>
  .footer{
    padding: 0 !important;
  }
</style>
  

