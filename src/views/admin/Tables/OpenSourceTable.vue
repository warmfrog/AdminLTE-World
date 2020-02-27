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
                <NavClazz :navClazz="bookClazz"></NavClazz>
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
                          <tr role="row" v-for="(book, index) in books" :key="book.uuid" :class="{odd: index%2==0, even: index%2==1}">
                            <td> {{ book.title }}</td>
                            <td>{{ book.author.name }}</td>
                            <td>{{ book.classifications.join() }}</td>
                            <td>{{ book.tags.join() }}</td>
                            <td>{{ book.version.description }}</td>
                            <td>{{ book.isbn }}</td>
                            <td>{{ book.publisher }}</td>
                            <td>{{ new Date(book.publishDate).toLocaleDateString() }}</td>
                            <td> {{ book.pages }}</td>
                            <td>{{ book.score }}</td>
                            <td>{{ book.downloadLinks }} </td>
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
import { bookList }from '@/views/book/apis/index'
import bookClazz from '@/data/clazz/bookClazz.json'
import bookData from '@/data/books.json'
let bookTableHeaders = ['标题', '作者', '分类', '标签', '版本', 'ISBN', '出版社', '出版日期', '页数', '评分', '下载链接', '操作']
let modalTitle = "图书分类列表"
let listTitle = "图书列表"
let addLink = "book/add"
export default {
  name: 'bookTable',
  data() {
    return {
           adminContentHeaderData: {
        listTitle: listTitle,
        modalTitle: modalTitle,
        addLink: addLink,
        clazz: bookClazz
      },
      books: bookData.data.books,
      bookClazz: bookClazz,
      headers: bookTableHeaders
    }
  },
  methods: {
    bookList(){
      bookList({}).then(res => {
        if(res.code == '00000'){
          this.books = res.data.list
        }
      })
    }
  },
  created(){
    this.bookList()
  }
}
</script>

<style lang="scss" scoped>

</style>
