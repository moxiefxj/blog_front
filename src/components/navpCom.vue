<template>
    <el-menu :default-active="this.$route.path"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#C5CAE9"
    text-color="#606266"
    active-text-color="#00796B"
    router> 
      <el-menu-item class="logo">FENG XIAOJING</el-menu-item>
      <el-submenu class="b_fold" index="/">
        <template slot="title">
          <i class="el-icon-s-unfold el-icon-s-fold"></i>
        </template>
        <slot v-for="(item,index) in navData" :key="index">
          <el-menu-item :index=item.url>
            <i :class=item.icon></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </slot>
      </el-submenu>  
    </el-menu>
</template>
<script>
export default {
  props:["navData"]
}
</script>