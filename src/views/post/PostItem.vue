<template>
  <div class="col-12 col-sm-12 col-xm-12 col-md-6 d-flex align-items-stretch">
    <div class="card bg-light text-left">
      <div class="card-header border-bottom-0">
        <b> {{ post.title }} </b>
      </div>

      <!-- Card Body -->
      <div class="card-body pt-0">
        <div class="row">
          <div class="col-3">
            <img src="../../assets/img/user1-128x128.jpg" alt="" class=" img-fluid mb-3">
            <p class="text-xs">
              <span>
                <span class="text-red">关键字: </span>
                <span class="text-green">{{ post.keyWords.join() }}</span>
              </span>
            </p>

          </div>
          <div class="col-9">
            <span> {{ post.brief }} </span>
          </div>
        </div>
      </div>

      <!-- Card Footer -->
      <div class="card-footer">
        <div class="text-left">
          <a href="#" class="btn btn-sm bg-outline-teal">
            <i class="fas fa-user"></i>作者 {{ post.author.name }}
          </a>
          <a href="#" class="btn btn-sm bg-outline-teal">
            <i class="fas fa-clock"></i>发布时间 {{ new Date(post.releaseTime).toLocaleString('chinese',{hour12:false}) }}
          </a>
          <a href="#" class="btn btn-sm bg-outline-teal">
            <i class="fas fa-star"></i>收藏 {{ post.collectionCount }}
          </a>
          <a href="#" class="btn btn-sm bg-outline-teal">
            <i class="fas fa-thumbs-up"></i> {{ post.likes }}
          </a>
          <a href="#" class="btn btn-sm bg-outline-teal">
            <i class="fas fa-thumbs-down"></i> {{ post.dislikes }}
          </a>
          <a :href="post.downloadUrl" class="btn btn-sm bg-outline-teal">
            <i class="fas fa-download"></i> 下载
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    'post': {
      'uuid': String,
      'title': String,
      'keyWords': Array,
      'author': {
        'name': String,
        'email': String,
        'institution': String
      },
      'authors': Array,
      'downloadUrl': String,
      'releaseTime': Date,
      'brief': String,
      'coverImage': String,
      'images': Array,
      'filePath': String,
      'content': String,
      'wordCount': Number,
      'readerCount': Number,
      'likes': Number,
      'dislikes': Number,
      'collectionCount': Number,
      'downloadCount': Number,
      'commentCount': Number,
      'releasedPlatforms': Array,
      'referencedCount': Number,
      'score': Number,
      'language': String,
      'tags': Array,
      'classifications': Array,
      'type': Number,
      'references': Array
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
