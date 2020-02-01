<template>
  <ul class="navbar-nav ml-auto">
    <li class="nav-item" v-for="menu in rightMenus" :key="menu.id">
      <router-link class="nav-link" :to="menu.url">
        {{ menu.name}}
      </router-link>
    </li>
  </ul>
</template>

<script>
import rightMenus from "@/data/rightMenus.json"
export default {
  name: 'RightMenu',
  data() {
    return {

      rightMenus: rightMenus.data.menus
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
