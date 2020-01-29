<template>
  <div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
    <div class="card bg-light text-left">
      <div class="card-header border-bottom-0">
        <b> {{ software.softwareName }} </b>
      </div>

      <!-- Card Body -->
      <div class="card-body pt-0">
        <div class="row">
          <div class="col-3">
            <img src="../../assets/img/user1-128x128.jpg" alt="" class=" img-fluid">
          </div>
          <div class="col-9">
            <div class="row">
              <div class="col-6">
                <p class="text-muted text-sm"><b>软件: </b> {{ software.softwareName }} </p>
                <p class="text-muted text-sm"><b>平台: </b> {{ software.platform }} </p>
                <p class="text-muted text-sm"><b>付费: </b> {{ software.free ? "免费" : "付费" }} </p>
              </div>
              <div class="col-6">
                <p class="text-muted text-sm"><b>版本: </b> {{ software.version }} </p>
                <p class="text-muted text-sm"><b>分类: </b> {{ software.classifications.join() }} </p>
                <p class="text-muted text-sm"><b>授权: </b> {{ software.openSource ? "开源" : "闭源" }} </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-5">
            <p class="text-muted text-sm"><b>开发者: </b> {{ software.developer }} </p>
            <p class="text-muted text-sm"><b>更新时间: </b> {{ new Date(software.updateTime).toLocaleDateString() }} </p>

          </div>
          <div class="col-7">
            <p class="text-muted text-sm"><b>标签: </b> {{ software.tags.join() }} </p>
            <ul class="ml-4 mb-0 fa-ul text-muted">
              <li class="small"><span class="fa-li"><i class="fas fa-lg fa-desktop"></i></span><b> {{ software.distPlatforms.join() }} </b> </li>
            </ul>
          </div>
        </div>
        <div class="row col-12">
          <p class="text-muted text-sm"><b>官网: </b> {{ software.officialSite }} </p>
        </div>
        <div class="row col-12">
          <p class="text-muted text-sm"><b>Git 仓库: </b> {{ software.git }} </p>
        </div>
        <div class="row col-12">
          <p class="text-muted text-sm"><b>简介: </b> {{ software.introduction }} </p>
        </div>
      </div>

      <!-- Card Footer -->
      <div class="card-footer">
        <div class="text-right">
          <a href="#" class="btn btn-sm bg-outline-teal">
            <i class="fas fa-star"></i> {{ software.score }}
          </a>
          <a href="#" class="btn btn-sm bg-outline-teal">
            <i class="fas fa-thumbs-up"></i> {{ software.likes }}
          </a>
          <a href="#" class="btn btn-sm bg-outline-teal">
            <i class="fas fa-thumbs-down"></i> {{ software.dislikes }}
          </a>
          <a href="#" class="btn btn-sm bg-outline-teal">
            <i class="fas fa-language"></i> {{ software.language == 'zh-cn'? "Zh" : "En" }}
          </a>
          <a href="#" class="btn btn-sm bg-outline-olive">
            <i class="fas fa-file"></i> 文件大小: {{ software.size }}
          </a>
          <a :href="software.downloadLink" class="btn btn-sm bg-outline-teal">
            <i class="fas fa-download"></i> 下载
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SoftwareItem',
  props: {
    'software': {
      'uuid': String,
      'softwareName': String,
      'version': String,
      'updateTime': Date,
      'developer': String,
      'size': String,
      'md5': String,
      'officialSite': String,
      'introduction': String,
      'icon': String,
      'screenShots': Array,
      'tags': Array,
      'classifications': Array,
      'score': Number,
      'platform': String,
      'language': String,
      'free': Boolean,
      'likes': Number,
      'dislikes': Number,
      'openSource': Boolean,
      'git': String,
      'distPlatfroms': Array,
      'downloadLink': String,
      'downloadLinks': Array,
      'tutorials': Array,
      'remark': String,
      'comments': Array,
      'histories': Array
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
