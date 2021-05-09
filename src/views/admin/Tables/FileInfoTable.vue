<template>
  <div class="content-wrapper" style="min-height: 825px; margin-left: 250px">
    <!-- Content Header (Page header) -->
    <AdminContentHeader :adminContentHeaderData="adminContentHeaderData"></AdminContentHeader>

    <!-- Main content -->
    <section class="content">

      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <!-- Default box -->
            <div class="card card-purple">
              <div class="card-header p-0 pt-1">
                <NavClazz :navClazz="appClazz"></NavClazz>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <div class="dataTables_wrapper dt-bootstrap4">
                  <div class="row">
                    <div class="col-sm-12 col-md-6"></div>
                    <div class="col-sm-12 col-md-6"></div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <table class="table table-bordered table-hover dataTable" role="grid">
                        <thead>
                          <tr role="row">
                            <th class="sorting" tabindex="0" rowspan="1" colspan="1" v-for="head in headers" :key="head"> {{ head }}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr role="row" v-for="(fileInfo, index) in fileInfos" :key="fileInfo.uuid" :class="{odd: index%2==0, even: index%2==1}">
                            <td> {{ fileInfo.uuid }}</td>
                            <td> {{ fileInfo.fileName }}</td>
                            <td>{{ fileInfo.fileSize }}</td>
                            <td>{{ new Date(fileInfo.fileUpdateTime).toLocaleDateString() }}</td>

                          <!--  <td>{{ fileInfo.fileMd5 }}</td>
                            <td>{{ fileInfo.fileSha256 }} </td> -->
                            
                            <td>{{ fileInfo.filePath }}</td>
                               <td>
                                  <button v-if="!fileInfo.fileParsed" v-on:click="importPersonEventData(fileInfo.uuid)" type="button" class="btn btn-success">导入</button>
                                 <span v-if="fileInfo.fileParsed" type="button">已导入</span>
                               </td>   
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr role="row">
                            <th class="sorting" tabindex="0" rowspan="1" colspan="1" v-for="head in headers" :key="head"> {{ head }}</th>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12 col-md-5">
                      <div class="dataTables_info" id="example2_info" role="status">Showing 1 to 10 of {{ total }} entries</div>
                    </div>
                    <div class="col-sm-12 col-md-7">
                      <div class="dataTables_paginate paging_simple_numbers">
                        <ul class="pagination">
                          <li class="paginate_button page-item previous disabled"><a href="#" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li>
                          <li class="paginate_button page-item" v-for="page in totalPage" :key="page"><a v-on:click="changePage(page)" data-dt-idx="1" tabindex="0" class="page-link"> {{ page }}</a></li>
                          <li class="paginate_button page-item next"><a href="#" data-dt-idx="7" tabindex="0" class="page-link">Next</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
      </div>
    </section>
    <!-- /.content -->
  </div>

</template>

<script>
import {listByPage, importPersonEventData }from '@/views/flieInfo/apis/index'
import appClazz from '@/data/clazz/fileInfoClazz.json'
let AppTableHeaders = ['uuid', '文件名', '大小', '添加时间', '路径', '操作']
let modalTitle = "App 分类列表"
let listTitle = "App 列表"
let addLink="app/add"
export default {
  name: 'AppTable',
  data() {
    return {
      adminContentHeaderData: {
        listTitle: listTitle,
        modalTitle: modalTitle,
        addLink: addLink,
        clazz: appClazz
      },
      pageDto: {
        currentPage: 1,
        pageSize: 10
      },
      importReqDto: {
        fileUuid: "",
        "password": "stan2019"
      },
      totalPage: 0,
      total: 0,
      importResult: {},
       fileInfos: [],
      appClazz: appClazz,
      headers: AppTableHeaders
    }
  },
  components: {},
  methods:{
    listFileInfoByPage(data){
      listByPage(data).then(res => {
        this.fileInfos = res.records,
        this.totalPage = res.pages,
        this.total = res.total
      })
    },
    changePage(currentPage){
        this.pageDto.currentPage = currentPage,
        this.listFileInfoByPage(this.pageDto)
    },
    importPersonEventData(fileUuid){
      this.importReqDto.fileUuid = fileUuid
        importPersonEventData(this.importReqDto).then(res => {
           this.importResult = res,
           this.listFileInfoByPage(this.pageDto)
        })
    }
  },
  created(){
    this.listFileInfoByPage(this.pageDto)
  }
}
</script>

<style lang="scss" scoped>

</style>
