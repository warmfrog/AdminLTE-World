<template>
  <div class="content-wrapper" style="min-height: 1416.81px;">
    <!-- Content Header (Page header) -->

    <!-- Main content -->
    <section class="content">

      <!-- Default box -->
      <div class="card card-solid card-warning">
        <div class="card-header p-0 pt-1">
          <NavClazz :navClazz="bookClazz"></NavClazz>
        </div>
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
import { bookList } from './apis/index'
import BookItem from './BookItem'
import BooksData from '@/data/books.json'
import bookClazz from '@/data/clazz/bookClazz.json'
export default {
  name: 'List',
  components: {
    BookItem
  },
  data() {
    return {
      books: BooksData.data.books,
      bookClazz: bookClazz
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
