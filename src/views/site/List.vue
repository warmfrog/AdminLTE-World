<template>
  <div class="content-wrapper" style="min-height: 1071.31px;">

    <!-- Main content -->
    <section class="content ">
      <div class="container-fluid">
        <div class="card card-warning card-solid">
          <div class="card-header p-0 pt-1 ">
            <NavClazz :navClazz="siteClazz"></NavClazz>
          </div>
          <div class="card-body pb-0">
            <div class="row">
              <SiteItem v-for="site in sites" :key="site.uuid" :site="site"></SiteItem>
            </div>
          </div>
          <div class="card-footer">
            <Pagination></Pagination>
          </div>
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->

    <a id="back-to-top" href="#" class="btn btn-primary back-to-top" role="button" aria-label="Scroll to top">
      <i class="fas fa-chevron-up"></i>
    </a>
  </div>
</template>

<script>
import siteClazz from '@/data/clazz/siteClazz.json'
import SiteItem from './SiteItem'
import siteDatas from '@/data/sites.json'
export default {
  name: 'List',
  components: {
    SiteItem
  },
  data() {
    return {
      sites: siteDatas.data.sites,
      siteClazz: siteClazz
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
