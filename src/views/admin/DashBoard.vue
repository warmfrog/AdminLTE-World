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
          <div class="col-12 col-sm-6 col-md-3" v-for="item in menus" :key="item.id" :item="item">
            <div class="info-box">
              <span class="info-box-icon elevation-1" :class="item.bgColor"><i :class="item.icon"></i></span>

              <div class="info-box-content">
                <span class="info-box-text"> {{ item.name }} </span>
                <span class="info-box-number">
                  {{ item.count }}
                </span>
              </div>
              <!-- /.info-box-content -->
            </div>
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
