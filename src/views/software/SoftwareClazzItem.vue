<template>
  <li class="nav-item">
    <router-link class="nav-link" :to="softClazz.url" role="tab">{{ softClazz.clazz }}</router-link>
  </li>
</template>

<script>
export default {
  name: 'SoftwareClazzItem',
  props: {
    'softClazz': {
      'id': Number,
      'clazz': String,
      'url': String
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
