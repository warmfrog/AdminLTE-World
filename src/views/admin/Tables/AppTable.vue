<template>
  <div class="content-wrapper" style="min-height: 825px; margin-left: 250px">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row">
          <div class="col-6 text-left">
            <h6>App 列表</h6>
          </div>
        </div>
      </div>
    </section>

    <!-- Main content -->
    <section class="content">

      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <!-- Default box -->
            <div class="card card-primary">
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
                          <tr role="row" v-for="(app, index) in apps" :key="app.uuid" :class="{odd: index%2==0, even: index%2==1}">
                            <td> {{ app.name }}</td>
                            <td>{{ app.version }}</td>
                            <td>{{ new Date(app.updateDate).toLocaleDateString() }}</td>
                            <td> {{ app.platform }}</td>
                            <td>{{ app.tags.join() }}</td>
                            <td>{{ app.developer }}</td>
                            <td>{{ (app.size/1024/1024).toFixed(2) }} MB</td>
                            <td>{{ app.downloadLinks }} </td>
                            <td>编辑</td>
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
import appClazz from '@/data/clazz/appClazz.json'
import appData from '@/data/apps.json'
let AppTableHeaders = ['名称', '版本', '更新时间', '平台', '标签', '开发者', '大小', '下载链接', '操作']
export default {
  name: 'AppTable',
  data() {
    return {
      apps: appData.data.apps,
      appClazz: appClazz,
      headers: AppTableHeaders
    }

  }
}
</script>

<style lang="scss" scoped>

</style>
