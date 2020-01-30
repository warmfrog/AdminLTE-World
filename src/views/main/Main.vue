<template>
  <div class="wrapper">
    <!-- Navbar -->
    <Navbar></Navbar>
    <!-- /.navbar -->

    <!-- Main content -->
    <router-view></router-view>
    <!-- /.content -->

    <!-- Main Footer -->
    <footer class="main-footer">
      <!-- To the right -->
      <div class="float-right d-none d-sm-inline">
        Anything you want
      </div>
      <!-- Default to the left -->
      <strong>Copyright © 2014-2019 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
    </footer>
  </div>
</template>

<script>
import Navbar from './Navbar'
export default {
  name: 'Main',
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>

</style>
