<template>
   <div id="app">
     <Navbar></Navbar>
  
    <router-view/>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name:'app',
  components:{
    Navbar,
    Footer
  }

}
</script>

<style>

@import "~vue-wysiwyg/dist/vueWysiwyg.css";
</style>



