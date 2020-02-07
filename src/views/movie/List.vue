<template>
    <div class="content-wrapper" style="min-height: 1416.81px;">

    <!-- Main content -->
    <section class="content">

      <!-- Default box -->
      <div class="card card-solid card-tabs card-purple">
         <div class="card-header p-0 pt-1">
          <NavClazz :navClazz="movieClazz"></NavClazz>
        </div>
        <div class="card-body pb-0">
          <div class="row d-flex align-items-stretch">
            <MovieItem v-for="movie in movies" :key="movie.uuid" :movie="movie"></MovieItem>
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
import { movieList } from './apis/index'
import MovieItem from './MovieItem'
import moviesData from '@/data/movies.json'
import movieClazz from '@/data/clazz/movieClazz.json'
  export default {
    name: "List",
    components: {
      MovieItem
    },
    data() {
      return {
        movies: moviesData.data,
        movieClazz: movieClazz
      }
    },
    methods:{
      movieList(){
        movieList({}).then(res => {
          if(res.code == '00000'){
            this.movies = res.data.list
          }
        })
      }
    },
    created(){
      this.movieList()
    }
  }
</script>

<style lang="scss" scoped>

</style>