<template>
 <ul class="navbar-nav">
          <li class="nav-item" v-bind:key="menu.id" v-for="menu in menus">
            <!-- <a href="index3.html" class="nav-link">Home</a> -->
            <router-link class="nav-link" :to="menu.url">
              {{ menu.name }}
            </router-link>
          </li>
        </ul>
</template>

<script>
import menus from "@/data/menus.json";
  export default {
    name: 'Menubar',
    data(){
      return {
         menus: menus.data.menus,
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>