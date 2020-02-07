<template>
  <div class="content-wrapper" style="min-height: 825px; margin-left: 250px">
    <!-- Content Header (Page header) -->
    <TableHeader :clazz="postTypes" :modalTitle="modalTitle" :listTitle="listTitle"></TableHeader>

    <!-- Main content -->
    <section class="content">

      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <!-- Default box -->
            <div class="card card-success">
              <div class="card-header p-0 pt-1">
                <NavClazz :navClazz="postTypes"></NavClazz>
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
                          <tr role="row" v-for="(post, index) in posts" :key="post.uuid" :class="{odd: index%2==0, even: index%2==1}">
                            <td> {{ post.title }}</td>
                            <td>{{ post.author.name }}</td>
                            <td>{{ post.classifications.join() }}</td>
                            <td>{{ post.tags.join() }}</td>
                            <td>{{ new Date(post.releaseTime).toLocaleDateString() }}</td>
                            <td> {{ post.wordCount }}</td>
                            <td>{{ post.readerCount }}</td>
                            <td>{{ post.referencedCount }} </td>
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
import { listPost, addPost } from '@/views/post/apis/index'
import postTypes from '@/data/clazz/postClazz.json'
import postData from '@/data/posts.json'
let postColumns = ["标题", "作者", "分类", "标签", "发布时间", "字数", "阅读量", "被引用数", "操作"]
let modalTitle = "博客分类列表"
let listTitle = "博客列表"
export default {
  name: 'PostTable',
  data() {
    return {
      listTitle: listTitle,
      modalTitle: modalTitle,
      headers: postColumns,
      postTypes: postTypes,
      posts: postData.data
    }
  },
  created(){
    this.listPost()
  },
  methods: {
    listPost(){
      listPost({
      }).then(res => {
        if(res.code === '00000'){
          this.posts = res.data.list
        }
      })
    }
    ,
    addPost(){
      addPost({}).then(res => {
        if(res.code === '00000'){
          /* 弹框，添加成功 */
          alert('添加成功')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
