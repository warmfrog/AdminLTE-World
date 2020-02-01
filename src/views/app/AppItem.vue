<template>
    <div class="col-md-3 col-sm-6 col-12">
    <div class="info-box">
      <span class="info-box-icon bg-success"><i class="far fa-flag"></i></span>
      <div class="info-box-content text-left text-sm">
        <span class="info-box-text">名称： {{ app.name }}</span>
        <span class="info-box-text">大小：{{ (app.size/1024/1024).toFixed(2) }} M</span>
        <span class="info-box-text">标签：{{ app.tags.join() }} </span>
      </div>
      <!-- /.info-box-content -->
    </div>
    <!-- /.info-box -->
  </div>
</template>

<script>
  export default {
    name: 'AppItem',
    props: {
      'app': {
        'uuid': String,
        'name': String,
        'updateDate': Date,
        'version': String,
        'platform': String,
        'distPlatforms': Array,
        'size': Number,
        'classifications': Array,
        'tags': Array,
        'developer': String,
        'developers': Array,
        'freeCharge': Boolean,
        'openSource': Boolean,
        'git': String,
        'icon': String,
        'screenshots': Array,
        'downloadLinks': Array
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>