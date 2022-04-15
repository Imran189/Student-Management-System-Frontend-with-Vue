<template>
    <div class="wrapper">

        <!-- Navbar -->
         <NavbarView/>
        <!-- /.navbar -->

        <!-- Main Sidebar Container -->
        <SideBar/>

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
}
}
</script>
<style>
</style>