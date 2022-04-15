<template>
  <div>
    <div class="wrapper">

    <NavbarView></NavbarView>

    <SideBar></SideBar>

    <router-view></router-view>
    
  </div>
  </div>
</template>

<script>
import NavbarView from "@/components/NavbarView.vue"
import SideBar from "@/components/SideBar.vue"

export default {
  name: 'App',
  components: {
    NavbarView,
    SideBar,
  }
}
</script>
