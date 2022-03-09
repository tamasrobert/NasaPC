<template>
  <div class="body">
    <Navbar/>
        <main>
            <div class="row">
                    <!-- Form starts here! -->
                    <form class="col-6">
                        <div class="mb-3">
                            <label class="form-label">Name:</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Price:</label>
                            <input type="number" class="form-control">
                        </div>
                        <div class="mb-3 ">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    <!-- Form ends here! -->
                    <!-- Card view starts here! -->
                    <div class=" col-6 productCardSettings ">
                        <img src="https://picsum.photos/346/300" alt="https://picsum.photos/325/300">
                        <div class="flex justify-content-between" style="margin: 12px;">
                            <h5>{{item.cartItemName}}</h5>
                            <h5>{{item.cartItemPrice}} FT</h5>
                        </div>
                        
                            <div style="border-top: 2px solid white; padding:5px">
                                <p>{{item.cartItemDescription}}</p>
                            </div>
                            <div style="position: absolute; bottom: 0;">
                                
                                    
                                   <button class="btn bg-primary" style="margin:10px">Add to cart</button>
                                    
                                    <button class="btn bg-danger" style="margin-left: 65px; margin-right:5px">Delete</button>
                                    <button class="btn bg-danger">Delete</button>
                              
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
          productName:"",
          productPrice:"",
          productDescription:"",
          productImage:""

      }
  }

}
</script>

<style>

</style>