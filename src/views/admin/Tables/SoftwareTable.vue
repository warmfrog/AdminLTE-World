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
            <div class="card card-primary">
              <div class="card-header p-0 pt-1">
                <NavClazz :navClazz="softwareClazz"></NavClazz>
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
                          <tr role="row" v-for="(software, index) in softwares" :key="software.uuid" :class="{odd: index%2==0, even: index%2==1}">
                            <td> {{ software.softwareName }}</td>
                            <td>{{ software.version }}</td>
                            <td>{{ new Date(software.updateTime).toLocaleDateString() }}</td>
                            <td> {{ software.platform }}</td>
                            <td>{{ software.officialSite}}</td>
                            <td>{{ software.classifications.join() }}</td>
                            <td>{{ software.tags.join() }}</td>
                            <td>{{ software.developer }}</td>
                            <td>{{ software.free ? "Yes" : "No" }}</td>
                            <td>{{ software.openSource ? "Yes" : "No" }}</td>
                            <td>{{ (software.size/1024/1024).toFixed(0) }} MB</td>
                            <td>{{ software.downloadLinks }} </td>
                            <td>
                              <button type="button" class="btn btn-warning">编辑</button>
                              <button type="button" class="btn btn-success">查看</button>
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
import {
  softwareList
} from '@/views/software/apis/index'
import softwareClazz from '@/data/clazz/softwareClazz.json'
import softwareData from '@/data/softwares.json'
let softwareTableHeaders = ['软件名', '版本', '更新时间', '平台', '官网', '分类', '标签', '开发者', '免费', '开源', '大小', '下载链接', '操作']
let modalTitle = "软件分类列表"
let listTitle = "软件列表"
let addLink = "software/add"
export default {
  name: 'softwareTable',
  data() {
    return {
      adminContentHeaderData: {
        listTitle: listTitle,
        modalTitle: modalTitle,
        addLink: addLink,
        clazz: softwareClazz
      },
      softwares: softwareData.data.softwares,
      softwareClazz: softwareClazz,
      headers: softwareTableHeaders
    }
  },
  methods: {
    softwareList() {
      softwareList({}).then(res => {
        if (res.code == '00000') {
          this.softwares = res.data.list
        }
      })
    }
  },
  created() {
    this.softwareList()
  }
}
</script>

<style lang="scss" scoped>

</style>
