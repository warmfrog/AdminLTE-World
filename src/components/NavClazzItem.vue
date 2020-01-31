<template>
  <li class="nav-item">
    <router-link class="nav-link" :to="clazz.url" role="tab">{{ clazz.clazz }}</router-link>
  </li>
</template>

<script>
export default {
  name: 'ClazzItem',
  props: {
    'clazz': {
      'id': Number,
      'clazz': String,
      'url': String
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
