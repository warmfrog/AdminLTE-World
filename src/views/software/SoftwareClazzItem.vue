<template>
  <li class="nav-item">
    <a class="nav-link" :href="softClazz.url" role="tab">{{ softClazz.clazz }}</a>
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
