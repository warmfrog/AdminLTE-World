<template>
  <nav class="main-header navbar navbar-expand-md navbar-light navbar-white">
    <!-- <div class="container"> -->
      <div class="row">
      <Logo></Logo>

      <!-- <div class="collapse navbar-collapse order-0"> -->
      <!-- Left navbar links -->
      <Menubar></Menubar>

      <!-- SEARCH FORM -->
      <SearchForm></SearchForm>
      <!-- </div> -->
    </div>

    <RightMenu></RightMenu>
  </nav>
</template>

<script>
import Logo from './Logo'
import Menubar from './Menubar'
import RightMenu from './RightMenu'

export default {
  name: 'Navbar',
  components: {
    Logo,
    Menubar,
    RightMenu
  }
}
</script>

<style lang="scss" scoped>

</style>
