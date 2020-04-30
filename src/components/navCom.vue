<template>
    <el-menu :default-active="this.$route.path"
    class="el-menu-demo mainbody"
    mode="horizontal"
    background-color="#C5CAE9"
    text-color="#606266"
    active-text-color="#00796B"
    router>      
      <el-menu-item class="logo">FENG XIAOJING</el-menu-item>
      <slot v-for="(item,index) in navData" :key="index">
          <el-menu-item :index=item.url>
            <i :class=item.icon></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </slot>
      <el-menu-item index="/time"><i class="el-icon-timer"></i>时间线</el-menu-item>
      
      <el-menu-item class="login" :index=loginData.url>{{loginData.name}}</el-menu-item>
      
    </el-menu>

</template>
<script>
export default {
  props:['navData','loginData']
}
</script>
<style>
  .el-header{
    padding: 0px !important;
  }
  .logo{
    margin:0 30px !important;
  }
  .mainbody{
    position: relative;
  }
  .login{
    position: absolute;
    right: 20px;
  }
</style>
  

