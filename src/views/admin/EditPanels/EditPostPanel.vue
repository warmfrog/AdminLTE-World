<template>
  <div class="content-wrapper" style="min-height: 1244.06px; margin-left: 250px">
    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <!-- left column -->
          <div class="col-md-12 p-6">
            <!-- general form elements -->

            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">新增博客</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form role="form" style="text-align: left" class="form-horizontal" action="/api/post/add" method="post">
                <div class="card-body">

                  <div class="row">
                    <div class="col-6">
                      <div class="form-group row">
                        <label class="col-md-2">标题</label>
                        <div class="col-md-10">
                          <input type="text" class="form-control" placeholder="输入标题" v-model="post.title">
                        </div>

                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group form-check-inline">
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="type" value="0" v-model="post.type">
                          <label class="form-check-label">原创</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="type" value="1" v-model="post.type">
                          <label class="form-check-label">转载</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-6">
                      <div class="form-group">
                        <label>分类</label>
                        <input type="text" class="form-control" placeholder="人生，技术.." v-model="post.classifications">
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group">
                        <label>标签</label>
                        <input type="text" class="form-control" placeholder="骑行，爬山.." v-model="post.tags">
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <label>简介</label>
                    <textarea class="form-control" rows="2" placeholder="简介 ..." v-model="post.brief"></textarea>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="form-group card card-dark" style="min-height: 526px">
                        <div class="card-header">
                          <label>Markdown内容</label>
                        </div>
                        <textarea class="form-control card-body" placeholder="Markdown内容 ..." v-model="post.contentMarkdown" @input="renderHtml"></textarea>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="card card-dark" style="min-height: 526px">
                        <div class="card-header">
                          <label>预览</label>
                        </div>
                        <div class="card-body">
                          <div class="" placeholder="内容预览 ..." disabled v-html="post.contentHtml" v-highlight></div>
                        </div>

                      </div>
                    </div>
                  </div>

                  <!-- /.card-body -->

                </div>
              </form>
              <div class="card-footer">
                <div class="row">
                  <div class="col-2">
                    <button type="submit" class="btn btn-primary" @click="savePost">保存</button>
                  </div>
                  <div class="col-2">
                    <button type="submit" class="btn btn-success" @click="releasePost">发布</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
import {
  addPost
} from './apis/index'
var showdown = require('showdown'),
  converter = new showdown.Converter();
export default {
  name: 'EditPostPanel',
  data() {
    return {
      post: {
        title: '',
        tags: '',
        classifications: '',
        type: 0,
        contentMarkdown: '',
        contentHtml: '',
        brief: ''
      }
    }
  },
  methods: {
    addPost(status) {
      // status: 0，保存，1，发布
      addPost({
        title: this.post.title,
        tags: this.post.tags.split(','),
        classifications: this.post.classifications.split(','),
        type: this.post.type,
        contentMarkdown: this.post.contentMarkdown,
        contentHtml: this.post.contentHtml,
        brief: this.post.brief,
        status: status
      }).then(res => {
        if (res.code === '00000') {
          alert(res.message)
        } else {
          alert('添加失败')
        }
      })
    },
    savePost() {
      this.addPost(0)
    },
    releasePost() {
      this.addPost(1)
    },
    renderHtml() {
      // this.post.contentMarkdown = 
      this.post.contentHtml = converter.makeHtml(this.post.contentMarkdown)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
