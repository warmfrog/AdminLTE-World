<template>
    <ul class="nav nav-tabs" role="tablist">
      <NavClazzItem v-for="clazzItem in navClazz" :key="clazzItem.id" :clazz="clazzItem"></NavClazzItem>
    </ul>
</template>

<script>
export default {
  name: 'NavClazz',
  props: {
    'navClazz': Array
  }
}
</script>

<style lang="scss" scoped>

</style>
