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

    <div v-for="(promotion,i) in promotions" :key="i">
      <div class="row mb-1" style="padding: 5px; background-color: gray;" v-if="i%2==0">

        <div class="col-sm-0 col-lg-1"></div>
          <div class="col-sm-12 col-lg-10">
            <div class="row">
              <div class="col-sm-12 col-lg-6">
                <img class="img-fluid float-start" :src="promotion.picture">
              </div>
              <div class="col-sm-12 col-lg-6">
                <h2 >{{promotion.title}}</h2>
                <h5>{{promotion.text}}</h5>
            </div>
          </div>
        </div>
        
        <div class="cl-sm-0 col-lg-1"></div>
      </div>

      <div class="row mb-2" style="padding: 5px; background-color: lightgray;" v-else>
        <div class="col-sm-0 col-lg-1"></div>
          <div class="col-sm-12 col-lg-10">
            <div class="row">
              <div class="col-sm-12 col-lg-6">
                <h2>{{promotion.title}}</h2>
                <h5>{{promotion.text}}</h5>
                <router-link to="/products" style="text-decoration:none"><Button class="p-button-secondary" style="width:175px; height: 75px; font-size: 25px; align-self:middle;" label="Let's go!"/></router-link>
            </div>
            <div class="col-sm-12 col-lg-6">
                <img class="img-fluid float-end" :src="promotion.picture">
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
        {title:"Lorem valami asdasdasd", text:"Lorem valami asdasdasdasdasd  Lorem valami Lorem valami asdasdasdasdasd vLorem valami asdasdasdasdasd  Lorem valami asdasdasdasdasd  asdasdasdasdasd  Lorem valami asdasdasdasdasd", picture:"https://picsum.photos/350/350"},
        {title:"Lorem valami asdasdasd", text:"Lorem valami asdasdasdasdasd  Lorem valami Lorem valami asdasdasdasdasd vLorem valami asdasdasdasdasd  Lorem valami asdasdasdasdasd  asdasdasdasdasd  Lorem valami asdasdasdasdasd", picture:"https://picsum.photos/350/350"},
        {title:"Lorem valami asdasdasd", text:"Lorem valami asdasdasdasdasd  Lorem valami Lorem valami asdasdasdasdasd vLorem valami asdasdasdasdasd  Lorem valami asdasdasdasdasd  asdasdasdasdasd  Lorem valami asdasdasdasdasd", picture:"https://picsum.photos/350/350"},
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

// .container {
//   background-color: $darkblue;
//   box-shadow: 0 3px 6px $shadowoflightblue;
// }

// main {
//   background-color: $mediumgray;
// }
.line {
  height: 4px;
  border-radius: 2px;
  background-color: white;
  margin-top: 100px;
}

</style>