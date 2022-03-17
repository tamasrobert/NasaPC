<template>
  <div class="container body">
    <Navbar/>
    <Carousel/>
    <h1 style="color: white">This is the main page!</h1>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import Carousel from '../../components/Carousel.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
    Carousel
  }

}
</script>

<style>

</style>