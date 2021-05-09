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
                                 <button v-if="!fileInfo.fileParsed" type="button" class="btn btn-warning">未导入</button>
                                 <button v-if="fileInfo.fileParsed" type="button" class="btn btn-success">已导入</button>
                               </td>
                            <td>
                            
                              <button v-if="!fileInfo.fileParsed" type="button" class="btn btn-success">导入</button>
                              <button type="button" class="btn btn-danger">删除</button>
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
                      <div class="dataTables_info" id="example2_info" role="status">Showing 1 to 10 of 57 entries</div>
                    </div>
                    <div class="col-sm-12 col-md-7">
                      <div class="dataTables_paginate paging_simple_numbers">
                        <ul class="pagination">
                          <li class="paginate_button page-item previous disabled"><a href="#" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li>
                          <li class="paginate_button page-item" v-for="page in 7" :key="page"><a href="#" data-dt-idx="1" tabindex="0" class="page-link"> {{ page }}</a></li>
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
import { fileInfoList }from '@/views/flieInfo/apis/index'
import appClazz from '@/data/clazz/fileInfoClazz.json'
let AppTableHeaders = ['uuid', '文件名', '大小', '添加时间', '路径', '是否导入', '操作']
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
       fileInfos: fileInfoList(),
      appClazz: appClazz,
      headers: AppTableHeaders
    }
  },
  components: {},
  methods:{
    fileInfoList(){
      fileInfoList({}).then(res => {
        this.fileInfos = res
      })
    }
  },
  created(){
    this.fileInfoList()
  }
}
</script>

<style lang="scss" scoped>

</style>
