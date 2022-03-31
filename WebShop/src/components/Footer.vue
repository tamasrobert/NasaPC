<template>
    <div class="FooterBackground">
      <div class="row m-3">
          <div class="col-3 mt-3">
              <Logo/>
          </div>
          <div class="col-6 mt-3" style="text-align: center; text:white;">
              <p>&copy; 2022 NasaPC all rights reserved</p>
          </div>
          

          
      </div>
    </div>  
</template>

<script>
import Logo from './Logo.vue'
export default {
    name: 'Footer',
    components: {
        Logo
    }
}
</script>

<style>
    .FooterBackground {
        background-color: rgb(37, 36, 36);
        
    }
   
</style>