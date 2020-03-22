<template>
  <div id="app">
    <!-- 导航栏 -->
    <nav-com class="nav_style"></nav-com>
    <router-view />
  </div>
</template>

<script>
import navCom from './components/navCom';
export default {
  name:'app',
  components:{
    navCom,
  }
}
</script>
<style>
  #app{
    background: #e9ecef;
  }
  .nav_style{
    /* position: fixed; */
    background: limegreen;
  }
</style>
