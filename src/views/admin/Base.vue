<template>
  <div class="wrapper">
    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand-md navbar-light navbar-white" style="margin-left: 250px">
      <div class="container">
        <Menubar></Menubar>
      </div>
    </nav>
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <router-link :to="admin" class="brand-link">
        <img src="../../assets/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
        <span class="brand-text font-weight-light">AdminLTE 3</span>
      </router-link>

      <Sidebar></Sidebar>
    </aside>

    <!-- Content Wrapper. Contains page content -->

    <router-view></router-view>
    <!-- /.content-wrapper -->

    <footer class="main-footer">
      <div class="float-right d-none d-sm-block">
      </div>
      <strong>Copyright © 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.</strong> All rights
      reserved.
    </footer>
  </div>
</template>

<script>
import Sidebar from "./Sidebar"
import Menubar from '@/views/main/Navbar/Menubar'

let admin = "/admin"
export default {
  name: 'Base',
  components: {
    Sidebar,
    Menubar
  },
  data(){
    return {
      admin: admin
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
