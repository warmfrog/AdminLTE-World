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
            <PhotoItem v-for="personEvent in searchResult.content" :key="personEvent.uuid" :personEvent="personEvent" :imageCover="personEvent.images[0]"></PhotoItem>
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
import { albumList, searchPersonEventByPage } from './apis/index'
import PhotoItem from './PersonEventItem'
import photosData from '@/data/albums.json'
import photoClazz from '@/data/clazz/photoClazz.json'
export default {
  name: "List",
  components: {
    PhotoItem
  },
  data() {
    return {
      photos: photosData.data.photos,
      photoClazz: photoClazz,
      searchReqDto: {
        pageSize: 10,
        currentPage: 1,
        position: "深圳",
        contact: null
      },
      searchResult: {
        content: [],
        size: 0,
        number: 10,
        totalPages: 0,
        totalElements: 0
      }
    }
  },
    created() {
    this.albumList(),
    this.searchPersonEventByPage(this.searchReqDto)
  },
  methods: {
    albumList() {
      albumList({}).then(res => {
        this.photos = res.data.list
      })
    },
    searchPersonEventByPage(searchPersonEventDto){
      searchPersonEventByPage(searchPersonEventDto).then(res => {
        this.searchResult = res
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
