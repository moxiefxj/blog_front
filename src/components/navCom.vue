<template>
    <el-menu :default-active="this.$route.path"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#C5CAE9"
    text-color="#606266"
    active-text-color="#00796B"
    router>
      <el-menu-item class="logo" index="/">FENG XIAOJING</el-menu-item>
      <el-menu-item index="/">首页</el-menu-item>

      <el-submenu index="/kinds">
        <template slot="title">分类</template>
        <el-submenu index="/kinds/basics">
          <template slot="title">basics</template>
            <el-menu-item index="/kinds/basics/dataStrure">dataStrure</el-menu-item>
            <el-menu-item index="/kinds/basics/net">net</el-menu-item>
        </el-submenu>
        <el-submenu index="/kinds/front">
          <template slot="title">front</template>
            <el-menu-item index="/kinds/front/vue">vue</el-menu-item>
            <el-menu-item index="/kinds/front/css">css</el-menu-item>
            <el-menu-item index="/kinds/front/js">js</el-menu-item>
        </el-submenu>

        <el-submenu index="/kinds/test">
          <template slot="title">test</template>
            <el-menu-item index="/kinds/test/unit">unit</el-menu-item>
            <el-menu-item index="/kinds/test/performance">performance</el-menu-item>
            <el-menu-item index="/kinds/text/box">box</el-menu-item>
        </el-submenu>

        <el-submenu index="/kinds/back">
          <template slot="title">back</template>
            <el-menu-item index="/kinds/back/ssm">ssm</el-menu-item>
            <el-menu-item index="/kinds/back/springboot">springboot</el-menu-item>
            <el-menu-item index="/kinds/back/node">node</el-menu-item>
        </el-submenu>

        <el-submenu index="/kinds/other">
          <template slot="title">other</template>
          <el-menu-item index="/kinds/other/doucument">doucument</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="/about">关于我</el-menu-item>
      <el-menu-item index="/leaveComments">留言</el-menu-item>
      
    </el-menu>

</template>

<script>
  export default {
  }
</script>
<style>
  .el-header{
    padding: 0px !important;
  }
  .logo{
    margin:0 30px !important;
  }
</style>
  

