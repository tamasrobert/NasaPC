<template>
  <Navbar/>
  <div class="container">
   
    <Carousel/>
    <h1 style="color: white">This is the main page!</h1>
    <HotSalesHomePage/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import Carousel from '../../components/Carousel.vue'
import HotSalesHomePage from '../../components/HotSalesHomePage.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
    Carousel,
    HotSalesHomePage
  }

}
</script>

<style>

</style>