<template>
  <div class="content-wrapper" style="min-height: 1416.81px;">
    <!-- Content Header (Page header) -->
    <ContentHeader></ContentHeader>

    <!-- Main content -->
    <section class="content">

      <div class="row">
        <div class="col-12">
          <div class="card card-primary card-tabs">
            <div class="card-header p-0 pt-1">
              <NavClazz :navClazz="softwareClazz"></NavClazz>
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
                      <Pagination></Pagination>
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
// import SoftwareList from './SoftwareList'
import softClazzData from '@/data/clazz/softwareClazz.json'
import SoftwareItem from './SoftwareItem'
import SoftwareData from '@/data/softwares.json'
export default {
  name: 'List',
  components: {
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
