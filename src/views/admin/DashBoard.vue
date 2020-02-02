<template>
  <div class="content-wrapper" style="min-height: 825px; margin-left: 250px">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Dashboard v2</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Dashboard v2</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <!-- Info boxes -->
        <div class="row">
          <div class="col-12 col-sm-6 col-md-2" v-for="menu in menus" :key="menu.id" :menu="menu">
            <router-link class="bg-light" :to="menu.url">
              <div class="info-box">
                <span class="info-box-icon elevation-1" :class="menu.bgColor"><i :class="menu.icon"></i></span>
                <div class="info-box-content">
                  <span class="info-box-text"> {{ menu.name }} </span>
                  <span class="info-box-number">
                    {{ menu.count }}
                  </span>
                </div>
                <!-- /.info-box-content -->
              </div>
            </router-link>
            <!-- /.info-box -->
          </div>
        </div>

      </div>
      <!--/. container-fluid -->
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
import menus from '@/data/menus.json'
export default {
  data() {
    return {
      menus: menus
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
