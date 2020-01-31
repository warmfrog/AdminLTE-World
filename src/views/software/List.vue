<template>
  <div class="content-wrapper" style="min-height: 1416.81px;">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Softwares</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Softwares</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">

      <div class="row">
        <div class="col-12">
          <div class="card card-primary card-tabs">
            <div class="card-header p-0 pt-1">
              <ul class="nav nav-tabs" role="tablist">
                <SoftwareClazzItem v-for="clazzItem in softwareClazz" :key="clazzItem.id" :softClazz="clazzItem"></SoftwareClazzItem>
              </ul>
            </div>
            <div class="card-body">
              <div class="tab-content" >
                <div class="tab-pane fade active show" role="tabpanel">
                  <!-- Default box -->
                  <div class="card card-solid">
                    <router-view></router-view>
                    <!-- /.card-body -->
                    <div class="card-footer">
                      <nav >
                        <ul class="pagination justify-content-center m-0">
                          <li class="page-item active"><a class="page-link" href="#">1</a></li>
                          <li class="page-item"><a class="page-link" href="#">2</a></li>
                          <li class="page-item"><a class="page-link" href="#">3</a></li>
                          <li class="page-item"><a class="page-link" href="#">4</a></li>
                          <li class="page-item"><a class="page-link" href="#">5</a></li>
                          <li class="page-item"><a class="page-link" href="#">6</a></li>
                          <li class="page-item"><a class="page-link" href="#">7</a></li>
                          <li class="page-item"><a class="page-link" href="#">8</a></li>
                        </ul>
                      </nav>
                    </div>
                    <!-- /.card-footer -->
                  </div>
                </div>
              </div>
            </div>
            <!-- /.card -->
          </div>
        </div>
      </div>

      <!-- /.card -->

    </section>
    <!-- /.content -->
  </div>
</template>

<script>

import SoftwareClazzItem from './SoftwareClazzItem'
import softClazzData from './SoftwareClass.json'
export default {
  name: 'List',
  components: {
    SoftwareClazzItem
  },
  data() {
    return {
      softwareClazz: softClazzData
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
