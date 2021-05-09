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
        <ul >
          <li href="#" class="list-group-item">
            <i class="fas fa-street-view"></i> {{ personEvent.position }}
          </li>
          <li href="#" class="list-group-item">
            <i class="fas fa-cny"></i> {{ personEvent.price }}
          </li>
          <li href="#" class="list-group-item">
            <i class="fas fa-list-ul"></i> {{ personEvent.projects }}
          </li>
          <li href="#" v-if="personEvent.wechat.length" class="list-group-item">
             <i class="fas fa-wechat"></i> wechat: {{ personEvent.wechat.join() }}
          </li>
             <li href="#" v-if="personEvent.qq.length" class="list-group-item">
             <i class="fas fa-qq"></i> qq: {{ personEvent.qq.join() }}
          </li>
             <li href="#" v-if="personEvent.phone.length" class="list-group-item">
            <i class="fas fa-phone"></i> {{ personEvent.phone.join() }}
          </li>
             <li href="#" class="list-group-item">
            <i class="fas fa-file"></i> {{ personEvent.eventDetail }}
          </li>
        </ul>
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