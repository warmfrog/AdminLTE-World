<template>
  <div class="content-wrapper" style="min-height: 1416.81px;">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Books</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Books</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">

      <!-- Default box -->
      <div class="card card-solid">
        <div class="card-body pb-0">
          <div class="row d-flex align-items-stretch">
            <BookItem v-for="book in books" :key="book.uuid" :book="book"></BookItem>
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
import BookItem from './BookItem'
import BooksData from '@/data/books.json'
export default {
  name: 'List',
  components: {
    BookItem
  },
  data() {
    return {
      books: BooksData.data.books
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
