<template>
<main>
  <Navbar/>
  <div class="row" style="margin-bottom: 3%">
    <div class="col-lg-1 col-xl-2"></div>
   <div class="col-lg-10 col-xl-8">
    <Carousel/>
    <h1 style="color: white; text-align: center">Buy from us, and start building your NASA PC today!</h1>
    <h2 style="color: gray; text-align: center">Check out our newest products here:</h2>
    <div class="row">
      <div>
        <Button class="p-button-secondary" style="width:175px; height: 75px; font-size: 25px; align-self:middle;" label="Let's go!"/>
      </div>
    </div>
   </div>
    <div class="cl-lg-1 col-xl-2"></div>
  </div>

  <div v-for="(promotion,i) in promotions" :key="i">
    <div class="row" style="padding: 5px; background-color: gray;" v-if="i%2==0">
      <div class="col-sm-0 col-lg-1"></div>
      <div class="col-sm-4 col-lg-4">
        <img class="img-fluid float-start" src="https://picsum.photos/350/350">
      </div>
      <div class="col-sm-0 col-lg-1"></div>
      <div class="col-sm-8 col-lg-6">
        <h2 >Lorem valami asdasdasd</h2>
        <h5 >Lorem valami asdasdasdasdasd  Lorem valami Lorem valami asdasdasdasdasd  v
          Lorem valami asdasdasdasdasd  Lorem valami asdasdasdasdasd  
          asdasdasdasdasd  Lorem valami asdasdasdasdasd  </h5>
      </div>
      <div class="cl-sm-0 col-lg-1"></div>
    </div>

    <div class="row" style="padding: 5px; background-color: lightgray;" v-else>
      <div class="col-sm-0 col-lg-1"></div>
      <div class="col-sm-8 col-lg-6">
        <h2 >Lorem valami asdasdasd</h2>
        <h5 >Lorem valami asdasdasdasdasd  Lorem valami Lorem valami asdasdasdasdasd  v
          Lorem valami asdasdasdasdasd  Lorem valami asdasdasdasdasd  
          asdasdasdasdasd  Lorem valami asdasdasdasdasd  </h5>
      </div>
      <div class="col-sm-0 col-lg-1"></div>
      <div class="col-sm-4 col-lg-4">
        <img class="img-fluid float-end" src="https://picsum.photos/350/350">
      </div>
      <div class="cl-sm-0 col-lg-1"></div>
    </div>
  </div>



    <!-- <HotSalesHomePage/> -->
  <Footer/>
</main>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import Carousel from '../../components/Carousel.vue'
import Button from 'primevue/button';
// import HotSalesHomePage from '../../components/HotSalesHomePage.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
    Carousel,
    Button
    // HotSalesHomePage
  },
  data(){
    return {
      promotions: [
        {title:"Lorem valami asdasdasd", text:"Lorem valami asdasdasdasdasd  Lorem valami Lorem valami asdasdasdasdasd vLorem valami asdasdasdasdasd  Lorem valami asdasdasdasdasd  asdasdasdasdasd  Lorem valami asdasdasdasdasd", Picture:"https://picsum.photos/350/350"},
        {title:"Lorem valami asdasdasd", text:"Lorem valami asdasdasdasdasd  Lorem valami Lorem valami asdasdasdasdasd vLorem valami asdasdasdasdasd  Lorem valami asdasdasdasdasd  asdasdasdasdasd  Lorem valami asdasdasdasdasd", Picture:"https://picsum.photos/350/350"},
        {title:"Lorem valami asdasdasd", text:"Lorem valami asdasdasdasdasd  Lorem valami Lorem valami asdasdasdasdasd vLorem valami asdasdasdasdasd  Lorem valami asdasdasdasdasd  asdasdasdasdasd  Lorem valami asdasdasdasdasd", Picture:"https://picsum.photos/350/350"},
      ]
    }
  }

}
</script>

<style>

</style>