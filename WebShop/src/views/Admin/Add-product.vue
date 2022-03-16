<template>
  <div class="body">
    <Navbar/>
        <main>
            <div class="row">
                    <!-- Form starts here! -->
                    <form class="col-6 standardFormSettings">
                        <div class="mb-3 ">
                            <label class="form-label">Name:</label>
                            <input type="text" class="form-control" v-model="productName">
                        </div>
                        <div class="mb-3 ">
                            <label class="form-label">Price:</label>
                            <input type="number" class="form-control" v-model="productPrice">
                        </div>
                        <div class="mb-3 ">
                            <label class="form-label">Image:</label>
                            <input type="text" class="form-control" v-model="productImage">
                        </div>
                        <div class="mb-3 ">
                            <label class="form-label">Description:</label>
                            <textarea class="form-control" v-model="productDescription"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Create</button>
                    </form>
                    <!-- Form ends here! -->
                    <!-- Card view starts here! -->
                    <div class=" col-6 productCardSettings ">
                        <img src="https://picsum.photos/346/300" alt="https://picsum.photos/325/300">
                        <div class="flex justify-content-between" style="margin: 12px;">
                            <h5>{{productName}}</h5>
                            <h5>{{productPrice}} FT</h5>
                        </div>
                        
                            <div style="border-top: 2px solid white; padding:5px">
                                <p>{{productDescription}}</p>
                            </div>
                            <div style="position: absolute; bottom: 0;">
                                
                                    
                                    <button class="btn bg-primary" style="margin:10px">Add to cart</button>
                                    
                                    <button class="btn bg-info" style="margin-left: 140px; margin-right:5px">Details</button>
                              
                            </div>
                        
                    </div>
                    <!-- Card view ends here! -->
            </div>
        </main>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
export default {
  name: 'Add-Product',
  components: {
    Navbar,
    Footer
  },
  data(){
      return {
          productName:"asd",
          productPrice:" 123",
          productDescription:"Description placeholder",
          productImage:"https://picsum.photos/346/300"

      }
  }

}
</script>

<style>

</style>