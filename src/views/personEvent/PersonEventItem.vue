<template>
   <div class="col-12 col-lg-4 col-md-6 d-flex align-items-stretch">
    <div class="card bg-light text-left">

      <!-- Card Body -->
      <div class="card-body p-0">
        <div class="row">
          <div class="col-12">
            <img v-bind:src="'http://localhost:9998/' + imageCover" alt="" class=" img-fluid">
             <p class="m-1 bg-grey"> {{ personEvent.eventTitle  }} </p>
          </div>
        </div>
      </div>

      <!-- Card Footer -->
      <div class="card-footer">
        <div class="text-left">
          <a href="#" class="btn btn-sm bg-outline-teal">
            <i class="fas fa-heart"></i> {{ personEvent.position }}
          </a>
          <a href="#" class="btn btn-sm bg-outline-teal">
            <i class="fas fa-star"></i> {{ personEvent.price }}
          </a>
          <a href="#" class="btn btn-sm  bg-outline-teal">
            <i class="fas fa-eye"></i> {{ personEvent.projects }}
          </a>
          <a href="#" class="btn btn-sm bg-outline-olive">
            <i class="fas fa-file"></i> {{ personEvent.wechat }}
          </a>
             <a href="#" class="btn btn-sm bg-outline-olive">
            <i class="fas fa-file"></i> {{ personEvent.qq }}
          </a>
             <a href="#" class="btn btn-sm bg-outline-olive">
            <i class="fas fa-file"></i> {{ personEvent.phone }}
          </a>
             <a href="#" class="btn btn-sm bg-outline-olive">
            <i class="fas fa-file"></i> {{ personEvent.eventDetail }}
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
      'personEvent':{
        'uuid': String,
        'theme': String,
        'eventTitle': String,
        'images': Array,
        'imageCover': String,
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
      },
      'imageCover': String
    }
  }
</script>

<style lang="scss" scoped>

</style>