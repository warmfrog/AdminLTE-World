<template>
   <div class="col-12 col-lg-4 col-md-6 d-flex align-items-stretch">
    <div class="card bg-light text-left">

      <!-- Card Body -->
      <div class="card-body p-0">
        <div class="row">
          <div class="col-12">
            <img src="../../assets/myImg/movieDemo.jpg" alt="" class=" img-fluid">
             <p class="m-1 bg-grey"> {{ movie.name  }} </p>
          </div>
        </div>
      </div>

      <!-- Card Footer -->
      <div class="card-footer">
        <div class="text-right">
          <a href="#" class="btn btn-sm bg-outline-teal">
            <i class="fas fa-heart"></i> {{ movie.score }}
          </a>
          <a href="#" class="btn btn-sm bg-outline-teal">
            <i class="fas fa-star"></i> {{ movie.year }}
          </a>
          <a href="#" class="btn btn-sm  bg-outline-teal">
            <i class="fas fa-eye"></i> {{ (movie.length/3600).toFixed(0) }} min
          </a>
          <a href="#" class="btn btn-sm bg-outline-olive">
            <i class="fas fa-file"></i> {{ (movie.size/1024/1024/1024).toFixed(1) }} GB
          </a>
          <a :href="movie.downloadUrl" class="btn btn-sm bg-outline-teal">
            <i class="fas fa-download"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'movieItem',
    props: {
      'movie':{
        'uuid': String,
        'name': String,
        'year': Number,
        'tags': Array,
        'screenshots': Array,
        'cover': String,
        'classifications': Array,
        'director': String,
        'leadingRoles': Array,
        'screenwriters': Array,
        'madeIn': Array,
        'showingDate': Array,
        'languages': Array,
        'score': Number,
        'length': Number,
        'size': Number,
        'downloadLinks': Array,
        'playLinks': Array,
        'alias': String,
        'brief': String,
        'douban': {
          'id': String,
          'url': String
        },
        'imdb': {
          'id': String,
          'url': String
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>