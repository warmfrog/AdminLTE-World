<template>
   <div class="col-12 col-lg-4 col-md-6 d-flex align-items-stretch">
    <div class="card bg-light text-left">

      <!-- Card Body -->
      <div class="card-body p-0">
        <div class="row">
          <div class="col-12">
            <img src="../../assets/myImg/photoDemo.jpg" alt="" class=" img-fluid">
             <p class="m-1 bg-grey"> {{ photo.title  }} </p>
          </div>
        </div>
      </div>

      <!-- Card Footer -->
      <div class="card-footer">
        <div class="text-right">
          <a href="#" class="btn btn-sm bg-outline-teal">
            <i class="fas fa-heart"></i> {{ photo.likes }}
          </a>
          <a href="#" class="btn btn-sm bg-outline-teal">
            <i class="fas fa-star"></i> {{ photo.collectCount }}
          </a>
          <a href="#" class="btn btn-sm  bg-outline-teal">
            <i class="fas fa-eye"></i> {{ photo.browsedCount }}
          </a>
          <a href="#" class="btn btn-sm bg-outline-olive">
            <i class="fas fa-file"></i> {{ (photo.size/1024/1024).toFixed(2) }} MB
          </a>
          <a :href="photo.downloadUrl" class="btn btn-sm bg-outline-teal">
            <i class="fas fa-download"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PhotoItem',
    props: {
      'photo':{
        'uuid': String,
        'theme': String,
        'title': String,
        'thumbnail': String,
        'downloadUrl': String,
        'likes': Number,
        'collectCount': Number,
        'downloadCount': Number,
        'commentsCount': Number,
        'browsedCount': Number,
        'uploadDate': Date,
        'shootTime': Date,
        'tags': Array,
        'classifications': Array,
        'photographer': String,
        'model': String,
        'position': String,
        'size': Number,
        'metadata': {
          'equipment': String,
          'shutterSpeed': Number,
          'iso': Number,
          'aperture': Number,
          'focalLength': Number,
          'fileType': String,
          'imageWidth': Number,
          'imageHeight': Number,
          'cameralLens': String,
          'mode': {
            'exposureMode': String,
            'meteringMode': String,
            'exposureCompensation': Number
          },
          'hue': {
            'whiteBalance': String,
            'colorSpace': String
          },
          'shootTime': Date
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>