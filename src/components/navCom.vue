//src/components/Navbar.vue
<template>
    <div>
      <b-navbar toggleable="lg" type="dark">
        <b-navbar-brand href="/">Feng Xiaojing</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item class="nav_skip" href="/">首页</b-nav-item>
            <b-nav-item class="nav_skip" href="/about">关于我</b-nav-item>
            <b-nav-item class="nav_skip" href="/leaveComments">留言</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

        <!-- <b-nav-item-dropdown right>

          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown> -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
export default {
}    
</script>

<style>
  .nav_skip{
    margin-left: 40px;
  }
</style>