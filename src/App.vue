<template>
    <div class="wrapper">

        <!-- Navbar -->
         <NavbarView v-if="loggedInStatus"></NavbarView>
        <!-- /.navbar -->

        <!-- Main Sidebar Container -->
        <SideBar v-if="loggedInStatus"></SideBar>

        <!-- Content Wrapper. Contains page content -->
   
        <router-view/>
      
        <!-- /.content-wrapper -->
        
    </div>
</template>
<script>
import NavbarView from "./components/NavbarView.vue"
import SideBar from "./components/SideBar.vue"
export default {

components:{
    NavbarView,
    SideBar
},
computed: {
    loggedInStatus() {
        return this.$store.getters.GET_AUTH_STATUS;
    }
},
}
</script>
<style>
</style>