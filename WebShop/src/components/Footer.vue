<template>
    <div class="FooterBackground">
      <div class="row">
          <div class="col-sm-0 col-lg-1 mt-3"></div>

         <div class="col-sm-12 col-lg-2 mt-3">

            
            <div class="row">
                <div class="col-sm-0 col-lg-0"/>
                <div class="col-sm-4 col-lg-12">
                    <h3 class="mb-5" style="color:white">Important note:</h3>
                    <p>This project is the sole property of it's 3 founders, 
                        with this being the case you are prohabited from useing it's
                        source code for gaining profit or for turning it in as 
                        your own.</p>
                </div>
                <div class="col-sm-8 col-lg-0"/>
            </div>


         </div>
         <div class="col-sm-0 col-lg-1 mt-3"/>

          <div class="col-sm-12 col-lg-2 mt-3">
              <h3 class="mb-5">Shop</h3>
              
                  <div class="row">

                      <router-link v-for="(item,i) in footerProductLinks" :key="i"
                        class=" FooterLinkSettings"
                        :to="item.to">{{item.title}}
                      </router-link>

                  </div>
        
          </div>
          <div class="col-sm-12 col-lg-2 mt-3">
              <h3 class="mb-5">Log in now</h3>
              
                  <div class="row">

                      <router-link v-for="(item,i) in footerAuthLinks" :key="i"
                        class=" FooterLinkSettings"
                        :to="item.to">{{item.title}}
                      </router-link>

                  </div>
          </div>
          <div class="col-sm-12 col-lg-2 mt-3">
                <h3 class="mb-5">Used in project</h3>

              <div class="row">
                  <div class="col-12" v-for="(logo,i) in footerLogos" :key="i">
                    <a :href="logo.url">
                        <img style="height:50px; width: auto" :src="logo.path" alt="">
                    </a>
                  </div>
              </div>

          </div>

          
          <div class="col-sm-0 col-lg-2 mt-3"></div>
      </div>
      
      
      
      
      
      
      <div class="row" style="padding: 25px">
          <div class="col-3"></div>
          <div class="col-6" style="text-align: center; text:white;">
              <p>&copy; 2022 NasaPC all rights reserved</p>
          </div>
          <div class="col-3"></div>      
        </div>
    </div>  
</template>

<script>

export default {
    name: 'Footer',
    components: {
        
    },
    data(){
        return{
            footerLogos: [
                {path: '../assets/svg/bootstrap-logo-black.svg', url: 'https://getbootstrap.com/'},
                {path: '../assets/svg/Vue.js-logo.svg', url: 'https://vuejs.org/'},
                {path: '../assets/svg/primevue-logo.svg', url: 'https://www.primefaces.org/primevue/#/'},
                {path: '../assets/svg/mongodb-logo.svg', url: 'https://www.mongodb.com/atlas'},
                {path: '../assets/svg/Visual_Studio_Code-logo.svg', url: 'https://code.visualstudio.com/'},
            ],
            footerProductLinks: [
                {title: "OneProduct", to: "/products"},
                {title: "TwoProduct", to: "/products"},
                {title: "ManyProduct", to: "/products"},
                {title: "ManyProduct", to: "/products"},
                {title: "ManyProduct", to: "/products"},
                {title: "ManyProduct", to: "/products"},
            ],
            footerAuthLinks: [
                {title: "Signup", to: "/signup"},
                {title: "Login", to: "/login"},
            ]
        }
    }
}
</script>

<style>
    .FooterBackground {
        background-color: rgb(37, 36, 36);
        color: white;
    }
    .FooterLinkSettings {
        text-decoration: none;
        color: white;
        padding-top: 10px;
    }
</style>