<template>
  <div class="Topnav">
        <div class="Topnav_item" style="background:#1286fd">
            <div class="Topnav_img_box">
              <router-link to="/">
              <!-- logo -->
                <img src="@/assets/img/author.png" alt />  
              </router-link>
            </div>
          <!-- pc端导航 -->
            <div class="flex_box mymakeinfo" v-show="fullWidth">
              <div>首页</div>
              <div>店铺装修</div>
              <div>账户信息</div>
              <div>模板管理</div>
              <div>我的消息</div>
              <div> <a target="_blank" href="">我的站点</a></div>
              <div>新手入门</div>
              <div>安全退出</div>
            </div>
          <!-- 导航图标 -->
            <div class="H5_item" v-show="!fullWidth"> 
              <img src="@/assets/img/author.png" @click="make_menu" class-name="H5-menu" alt /> 
            </div>
        </div>
        <!-- 移动端导航 -->
        <transition name="toggle-cart">
          <div class="H5-menu-item" style='background:#1286fd' v-show="!fullWidth&&!dismenu">
              <div>首页</div>
              <div>店铺装修</div>
              <div>账户信息</div>
              <div>模板管理</div>
              <div>我的消息</div>
              <div> <a target="_blank" href="">我的站点</a></div>
              <div>新手入门</div>
              <div>安全退出</div>
          </div>
        </transition>
        <div style="height:75px"></div>
  </div>
</template>

<script>
export default {
  name: "Topnav",
  data() {
    return {
      pagetype: "index",
      fullWidth: true,
      dismenu: true
    };
  },
  methods: {
    make_menu() { //点击导航图标
      this.dismenu = !this.dismenu;
    },
    page_width() {//获取屏幕宽度
      let screenWidth = window.screen.width;
      console.log(screenWidth);
      if (screenWidth < 800) {
        this.fullWidth = false;
      } else {
        this.fullWidth = true;
      }
    }
   
  },
  computed: {

  },
  mounted() {
    window.onresize = () => {//监听屏幕变化
      this.page_width();
    };
    this.page_width();
  },
  created(){
  
  }
};
</script>

<style >
.Topnav_img_box {
  width: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
}
.Topnav_img_box img{
    width: 100%;
    margin-left: 40px;
  }
.Topnav_nav_box {
  width: 560px;
  padding: 0 60px;

  justify-content: space-between;
}
.this_tnbd_div {
  background-color: rgba(0, 0, 0, 0.3);
}
.Topnav_nav_box div {
  padding: 0 21px;
  height: 36px;
  font-size: 14px;
  line-height: 36px;
  border-radius: 18px;
}

.Topnav .Topnav_item {
  position: fixed;
  display: flex;
  top: 0;
  z-index: 1999;
  left: 0;
  height: 74px;
  color: #fff;
  width: 100%;
  
}
.Topnav .Topnav_item .H5_item {
    position: absolute;
    right: 14px;
    top: 24px;
    
  }
 .Topnav .Topnav_item .H5_item .H5-menu {
      font-size: 22px;
    }
.H5-menu-item {
  color: #fff;
  width: 120px;
  position: fixed;
  z-index: 20190705;
  right: 0px;
  top: 75px;

  
}
.H5-menu-item div {
    height: 42px;
    line-height: 42px;
    text-align: center;
  }
.mymakeinfo {
  position: absolute;
  right: 30px;
  top: 0;
  justify-content: space-around;
  font-size: 14px;
  height: 74px;
}
.mymakeinfo div {
  height: 36px;
  line-height: 36px;
  border-radius: 17px;
  padding: 0 20px;
}
.flex_box {
  display: flex;
  align-items: center;
}
.toggle-cart-enter-active,
.toggle-cart-leave-active {
  transition: all 0.4s ease-out;
}
.toggle-cart-enter,
.toggle-cart-leave-active {
  transform: translateY(-100%);
}
</style>


