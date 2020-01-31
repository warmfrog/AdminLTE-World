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
                <NavClazzItem v-for="clazzItem in softwareClazz" :key="clazzItem.id" :clazz="clazzItem"></NavClazzItem>
              </ul>
            </div>
            <div class="card-body">
              <div class="tab-content">
                <div class="tab-pane fade active show" role="tabpanel">
                  <!-- Default box -->
                  <div class="card card-solid">
                    <div class="card-body pb-0">
                      <div class="row d-flex align-items-stretch">
                        <SoftwareItem v-for="software in softwares" :key="software.uuid" :software="software"></SoftwareItem>
                      </div>
                    </div>
                    <!-- <SoftwareList></SoftwareList> -->
                    <!-- /.card-body -->
                    <div class="card-footer">
                      <nav>
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
import NavClazzItem from '@/components/NavClazzItem'
// import SoftwareList from './SoftwareList'
import softClazzData from '@/data/clazz/softwareClazz.json'
import SoftwareItem from './SoftwareItem'
import SoftwareData from '@/data/softwares.json'
export default {
  name: 'List',
  components: {
    NavClazzItem,
    SoftwareItem
  },
  data() {
    return {
      softwareClazz: softClazzData,
      softwares: SoftwareData.data.softwares
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
