<template>
  <div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
    <div class="card bg-light text-left">
      <div class="card-header border-bottom-0">
        <b> {{ book.title }} </b>
      </div>

      <!-- Card Body -->
      <div class="card-body pt-0">
        <div class="row mb-2">
          <div class="col-3">
            <img src="../../assets/myImg/bookExample.jpg" alt="" class=" img-fluid">
          </div>
          <div class="col-9">
            <div class="row">
              <div class="col-6">
                <p class="text-muted text-sm"><b>书名: </b> {{ book.title }} </p>
                <p class="text-muted text-sm"><b>作者: </b> {{ book.author.name }} </p>
                <p class="text-muted text-sm"><b>出版社: </b> {{ book.publisher }} </p>
                <p class="text-muted text-sm"><b>出版日期: </b> {{ new Date(book.publishDate).toLocaleDateString() }} </p>

              </div>
              <div class="col-6">

                <p class="text-muted text-sm"><b>分类: </b> {{ book.classifications.join() }} </p>
                <p class="text-muted text-sm"><b>标签: </b> {{ book.tags.join() }} </p>
                <p class="text-muted text-sm"><b>版本: </b> {{ book.version.description }} </p>
                <p class="text-muted text-sm"><b>页数: </b> {{ book.pages }} </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-5">
            <p class="text-muted text-sm"><b>出品方: </b> {{ book.producer }} </p>
            <p class="text-muted text-sm"><b>价格: </b> {{ book.price }} </p>
          </div>
          <div class="col-7">
            <ul class="ml-4 mb-0 fa-ul text-muted">
              <p class="text-muted text-sm"><b>评分: </b> {{ book.score }} </p>
              <p class="text-muted text-sm"><b>语言: </b> {{ book.language == 'zh-cn'? "中文" : "英文" }} </p>
              <!-- <li class="small"><span class="fa-li"><i class="fas fa-lg fa-language"></i></span><b> {{ book.language == 'zh-cn'? "中文" : "英文" }} </b> </li> -->
            </ul>
          </div>
        </div>
        <div class="row col-12">
          <p class="text-muted text-sm m-0 p-0"><b>简介: </b> {{ book.brief }} </p>
        </div>
      </div>

      <!-- Card Footer -->
      <div class="card-footer">
        <div class="text-right">
          <a href="#" class="btn btn-sm bg-outline-teal">
            <i class="fas fa-star"></i> {{ book.score }}
          </a>
          <a href="#" class="btn btn-sm bg-outline-teal">
            <i class="fas fa-book"></i> {{ book.readCount }}
          </a>
          <a href="#" class="btn btn-sm  bg-outline-teal">
            <i class="fas fa-book-reader"></i> {{ book.readingCount }}
          </a>
          <a href="#" class="btn btn-sm bg-outline-olive">
            <i class="fas fa-file"></i> 文件大小: {{ book.size }}
          </a>
          <a :href="book.downloadLinks[0].downloadUrl" class="btn btn-sm bg-outline-teal">
            <i class="fas fa-download"></i> 下载
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookItem',
  props: {
    'book': {
      'uuid': String,
      'title': String,
      'subtitle': String,
      'version': {
        'serialNumber': Number,
        'description': String
      },
      'isbn': String,
      'author': {
        'name': String,
        'country': String,
        'introduction': String
      },
      'authors': Array,
      'translators': Array,
      'producer': String,
      'hasPaper': Boolean,
      'hasEbook': Boolean,
      'bookDesign': String,
      'publisher': String,
      'publishDate': Date,
      'pages': Number,
      'price': Number,
      'brief': String,
      'catalog': Array,
      'score': Number,
      'tags': Array,
      'classifications': Array,
      'downloadLinks': Array,
      'paperPurchaseLinks': Array,
      'ebookPurchaseLinks': Array,
      'douban': {
        'id': String,
        'url': String,
        'ebookPurchaseLink': String,
        'paperPurchaseLink': String,
        'score': Number,
        'stars': {
          'onStar': Number,
          'twoStar': Number,
          'threeStar': Number,
          'fourStar': Number,
          'fiveStar': Number
        }
      },
      'readCount': Number,
      'readingCount': Number,
      'wantReadCount': Number,
      'language': String
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
