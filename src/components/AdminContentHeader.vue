<template>
  <section class="content-header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 ml-auto">
          <nav class="main-header navbar navbar-expand-md navbar-light navbar-white">
            <div class="container">
              <h6> {{ adminContentHeaderData.listTitle }}</h6>
              <!-- SEARCH FORM -->
              <SearchForm></SearchForm>
              <!-- </div> -->
            </div>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item ">
                <button class="nav-link btn bg-navy" @click="editTypes">
                  分类设置 <i class="fas fa-archive"></i>
                </button>
              </li>
              <li class="nav-item">
                <router-link class="nav-link btn bg-primary" :to="adminContentHeaderData.addLink">
                  添加 <i class="fas fa-plus"></i>
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <Modal :modalInfo="modalInfo" @close="close"></Modal>
  </section>
</template>

<script>
export default {
  name: 'TableHeader',
  props: {
    'adminContentHeaderData': {
      'modalTitle': String,
      'listTitle': String,
      'clazz': Array,
      'addLink': String,
    }

  },
  data() {
    return {
      modalInfo: {
        isShow: false,
        types: this.adminContentHeaderData.clazz,
        title: this.adminContentHeaderData.modalTitle
      }

    }
  },
  methods: {
    close() {
      this.modalInfo.isShow = false;
    },
    editTypes() {
      this.modalInfo.isShow = true;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
