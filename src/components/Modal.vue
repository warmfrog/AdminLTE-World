<template>
  <div class="modal fade" :class="{show: modalInfo.isShow}">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">{{ modalInfo.title }}</h4>
          <button type="button" class="close" @click="$emit('close')">
            <span>×</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-3" v-for="type in modalInfo.types" :key="type.id" :type="type">
                <div class="card card-navy">
                  <div class="card-header">
                    <h3 class="card-title">{{ type.clazz }}</h3>
                    <div class="card-tools">
                      <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer justify-content-right">
          <form class="form-inline ml-0 ml-md-2">
            <div class="input-group input-group-sm">
              <input class="form-control " type="search" placeholder="类型">
              <div class="input-group-append">
                <button class="btn btn-primary" type="submit">
                  添加
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    'modalInfo': {
      'title': String,
      'isShow': Boolean,
      'types': Array
    }

  },
  methods: {
    open() {
      this.isShow = true
    }
  }
}
</script>

<style scoped>
.show {
  display: block;
}
</style>
