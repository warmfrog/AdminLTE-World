<template>
  <nav class="main-header navbar navbar-expand-md navbar-light navbar-white">
    <div class="container">
      <a href="/" class="navbar-brand">
        <img src="../../assets/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
        <span class="brand-text font-weight-light">AdminLTE 3</span>
      </a>

      <button class="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse order-3" id="navbarCollapse">
        <!-- Left navbar links -->
        <ul class="navbar-nav">
          <li class="nav-item" v-bind:key="menu.id" v-for="menu in menus">
            <!-- <a href="index3.html" class="nav-link">Home</a> -->
            <router-link class="nav-link" v-bind:to="menu.url">
              {{ menu.name }}
            </router-link>
          </li>
        </ul>

        <!-- SEARCH FORM -->
        <form class="form-inline ml-0 ml-md-2">
          <div class="input-group input-group-sm">
            <input class="form-control form-control-navbar" type="search" placeholder="搜索" aria-label="Search">
            <div class="input-group-append">
              <button class="btn btn-navbar" type="submit">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>
      </div>

    </div>
  </nav>
</template>

<script>
import menus from "./menus.json";
export default {
  name: 'Navbar',
  data() {
    return {
      menus: menus.data.menus
    };
  },
}
</script>

<style lang="scss" scoped>

</style>
