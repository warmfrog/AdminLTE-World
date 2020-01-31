<template>
  <div class="content-wrapper" style="min-height: 1416.81px;">
    <!-- Content Header (Page header) -->
   <ContentHeader></ContentHeader>

    <!-- Main content -->
    <section class="content">

      <!-- Default box -->
      <div class="card card-solid card-tabs card-success">
        <div class="card-header p-0 pt-1">
          <NavClazz :navClazz="postClazz"></NavClazz>
        </div>
        <div class="card-body pb-0">
          <div class="row d-flex align-items-stretch">
            <PostItem v-for="post in posts" :key="post.uuid" :post="post"></PostItem>
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
import PostItem from './PostItem'
import postsData from '@/data/posts.json'
import postClazz from '@/data/clazz/postClazz.json'
export default {
  name: 'PostList',
  components: {
    PostItem
  },
  data() {
    return {
      posts: postsData.data,
      postClazz: postClazz
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
