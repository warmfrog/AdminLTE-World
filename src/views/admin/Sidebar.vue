<template>
  <div class="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">
    <div class="os-resize-observer-host">
      <div class="os-resize-observer observed" style="left: 0px; right: auto;"></div>
    </div>
    <div class="os-size-auto-observer" style="height: calc(100% + 1px); float: left;">
      <div class="os-resize-observer observed"></div>
    </div>
    <div class="os-content-glue" style="margin: 0px -8px; width: 249px;"></div>
    <div class="os-padding">
      <div class="os-viewport os-viewport-native-scrollbars-invisible os-viewport-native-scrollbars-overlaid" style="overflow-y: scroll;">
        <div class="os-content" style="padding: 0px 8px; height: 100%; width: 100%;">
          <!-- Sidebar user (optional) -->
          <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
              <img src="../../assets/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
            </div>
            <div class="info">
              <a href="#" class="d-block">Alexander Pierce</a>
            </div>
          </div>

          <!-- Sidebar Menu -->
          <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column"  role="menu">
              <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
              <li class="nav-item text-left" v-for="menu in menus" :key="menu.id" :menu="menu">
                <router-link :to="menu.url" class="nav-link">
                  <i class="nav-icon" :class="menu.icon"></i>
                  <p>
                    {{ menu.name }}
                  </p>
                </router-link>
              </li>
            </ul>
          </nav>
          <!-- /.sidebar-menu -->
        </div>
      </div>
    </div>
    <div class="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
      <div class="os-scrollbar-track">
        <div class="os-scrollbar-handle" style="width: 100%; transform: translate(0px, 0px);"></div>
      </div>
    </div>
    <div class="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
      <div class="os-scrollbar-track">
        <div class="os-scrollbar-handle" style="height: 77.5709%; transform: translate(0px, 0px);"></div>
      </div>
    </div>
    <div class="os-scrollbar-corner"></div>
  </div>
</template>

<script>
import sidebarMenu from '@/data/admin/sidebar-menus.json'
export default {
  name: 'Sidebar',
  data() {
    return {
      menus: sidebarMenu.data.menus
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
