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
            <nav>
        <div class="row">
                    <div class="col-sm-12 col-md-5">
                      <div class="dataTables_info" id="example2_info" role="status">Showing 1 to 10 of {{ searchResult.totalPages }} entries</div>
                    </div>
                    <div class="col-sm-12 col-md-7">
                      <div class="dataTables_paginate paging_simple_numbers">
                        <ul class="pagination">
                          <li class="paginate_button page-item previous disabled"><a href="#" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li>
                          <li class="paginate_button page-item" v-for="page in searchResult.totalPages" :key="page"><a v-on:click="changePage(page)" data-dt-idx="1" tabindex="0" class="page-link"> {{ page }}</a></li>
                          <li class="paginate_button page-item next"><a href="#" data-dt-idx="7" tabindex="0" class="page-link">Next</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
  </nav>
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
        pageSize: 12,
        currentPage: 1,
        position: "深圳",
        contact: null
      },
      searchResult: {
        content: [],
        size: 0,
        number: 0,
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
    },
    changePage(currentPage){
      this.searchReqDto.currentPage=currentPage,
      this.searchPersonEventByPage(this.searchReqDto)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
