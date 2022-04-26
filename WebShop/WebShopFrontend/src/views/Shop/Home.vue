<template>
<main class="mainContent">
  <Navbar/>
  <div class="mainContent" style="margin:5%">
    <Carousel/>
    <div class="line"></div>
  </div>
  <div class="mainContent container ">
    <div class="row" style="margin-bottom: 3%">
    <!-- <div class="col-lg-12 col-xl-12">
      
    </div> -->
    </div>

    <div v-for="(promotion,i) in promotions" :key="i" style="color:white">
      <div class="row mb-1 promotionOne" style="padding: 5px;" v-if="i%2==0">

        <div class="col-sm-0 col-lg-1"></div>
          <div class="col-sm-12 col-lg-10">
            <div class="row">
              <div class="col-sm-12 col-lg-6">
                <img style="height:300px; width:300px" class="img-fluid float-start" :src="'/image/'+promotion.picture">
              </div>
              <div class="col-sm-12 col-lg-6">
                <h2  >{{promotion.title}}</h2>
                <h5>{{promotion.text}}</h5>
                <router-link to="/products" style="text-decoration:none"><Button class="p-button-secondary" style="width:175px; height: 75px; font-size: 25px; align-self:middle;" label="Let's go!"/></router-link>
            </div>
          </div>
        </div>
        
        <div class="cl-sm-0 col-lg-1"></div>
      </div>

      <div class="row mb-2 promotionTwo" style="padding: 5px;" v-else>
        <div class="col-sm-0 col-lg-1"></div>
          <div class="col-sm-12 col-lg-10">
            <div class="row">
              <div class="col-sm-12 col-lg-6">
                <h2>{{promotion.title}}</h2>
                <h5>{{promotion.text}}</h5>
                <router-link to="/products" style="text-decoration:none"><Button class="p-button-secondary" style="width:175px; height: 75px; font-size: 25px; align-self:middle;" label="Let's go!"/></router-link>
            </div>
            <div class="col-sm-12 col-lg-6">
                <img style="height:300px; width:300px" class="img-fluid float-end" :src="'/image/'+promotion.picture">
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>


    <!-- <HotSalesHomePage/> -->
  <Footer/>
</main>
</template>

<script>
import AccountDataService from '../../services/AccountDataService.js'
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
        {title:"EVGA GeForce RTX 3080 Ti XC3 ULTRA", text:"Don't miss out on this check it out now!", picture:"EVGA-GeForce-RTX-3080-Ti-XC3-ULTRA.jpg"},
        {title:"ASUS ROG STRIX B450-F GAMING II", text:"This already has your name on it, take a look at this beast.", picture:"asus-rog-strix-b450-f-gaming-ii.jpg"},
        {title:"Rapture COBRA black", text:"You will regret it later if you don't check this out, I warned you.", picture:"Rapture-COBRA-black.jpg"},
      ]
    }
  },
  mounted() {
    AccountDataService.GetSession().then(() => {
    })
    .catch((err) => {
      console.log(err.response.data.error)
    })
  }

}
</script>

<style  lang="scss">
@import "../../assets/css/CostumeVariables.scss";
.promotionOne {
  background-color: $darkblue;
}
.promotionTwo {
  background-color: $notasdarkblue;
}
.line {
  height: 4px;
  border-radius: 2px;
  background-color: white;
  margin-top: 100px;
}

</style>