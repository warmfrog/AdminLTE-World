<template>
    <div class="content-wrapper" style="min-height: 1416.81px;">

    <!-- Main content -->
    <section class="content">

      <!-- Default box -->
      <div class="card card-solid card-tabs card-purple">
         <div class="card-header p-0 pt-1">
          <NavClazz :navClazz="photoClazz"></NavClazz>
        </div>
        <div class="card-body pb-0">
          <div class="row d-flex align-items-stretch">
            <PhotoItem v-for="photo in photos" :key="photo.uuid" :photo="photo"></PhotoItem>
          </div>
        </div>
        <!-- /.card-body -->
        <div class="card-footer">
          <Pagination></Pagination>
        </div>
        <!-- /.card-footer -->
      </div>
      <!-- /.card -->

    </section>
    <!-- /.content -->
  </div>
</template>

<script>
import PhotoItem from './PhotoItem'
import photosData from '@/data/photos.json'
import photoClazz from '@/data/clazz/photoClazz.json'
  export default {
    name: "List",
    components: {
      PhotoItem
    },
    data() {
      return {
        photos: photosData.data.photos,
        photoClazz: photoClazz
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>