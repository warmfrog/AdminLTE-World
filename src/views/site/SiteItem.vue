<template>

  <div class="col-md-4 col-sm-6 col-12">
    <div class="info-box">
      <span class="info-box-icon bg-success"><i class="far fa-flag"></i></span>
      <div class="info-box-content text-left text-sm">
        <span class="info-box-text">站点： {{ site.siteName }}</span>
        <span class="info-box-text">标签：{{ site.tags.join() }}</span>
        <span class="info-box-text">地址：{{ site.url }} </span>
      </div>
      <!-- /.info-box-content -->
    </div>
    <!-- /.info-box -->
  </div>

</template>

<script>
export default {
  name: 'SiteItem',
  props: {
    'site': {
      'uuid': String,
      'siteName': String,
      'url': String,
      'tags': Array,
      'classifications': Array,
      'thumbnail': String,
      'screenshots': Array,
      'needVpn': false,
      'language': String
    }
  }
}
</script>

<style scoped>
#user-header {
  background: url('../../assets/img/photo1.png') center center;
}
</style>
