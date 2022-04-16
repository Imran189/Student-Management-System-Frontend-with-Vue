<template>
    <div class="wrapper">

        <!-- Navbar -->
         <NavbarView v-if="auth"></NavbarView>
        <!-- /.navbar -->

        <!-- Main Sidebar Container -->
        <SideBar v-if="auth"></SideBar>

        <!-- Content Wrapper. Contains page content -->
   
        <router-view/>
      
        <!-- /.content-wrapper -->
        
    </div>
</template>
<script>
import NavbarView from "./components/NavbarView.vue"
import SideBar from "./components/SideBar.vue"
export default {
    data() {
        return {
            auth:false
        }
    },
components:{
    NavbarView,
    SideBar
}
}
</script>
<style>
</style>