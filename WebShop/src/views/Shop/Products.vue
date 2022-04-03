<template>
   
        <main>
            <Navbar/>
                
                <div class="row">
                    
                    <div class=" col-3 productCardSettings " v-for="(product,i) in products" :key="i">
                        <img src="https://picsum.photos/200/300">
                        <div class="flex justify-content-between" style="margin: 12px;">
                            <h5>{{product._id}}</h5>
                            <h5>{{product.name}}</h5>
                            <h5>{{product.price}} FT</h5>
                        </div>
                        
                            <div style="border-top: 2px solid white; padding:5px">
                                <p>{{product.description}}</p>
                            </div>
                            <div style="position: absolute; bottom: 0;">
                                
                                    <button class="btn bg-primary" style="margin:10px">Add to cart</button>
                                    
                                    <button class="btn bg-info" style="margin-left: 140px; margin-right:5px">Details</button>
         
                              
                            </div>
                        
                    </div>

                </div>

        <Footer/>
        </main>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import Dataservice from '../../services/DataService.js'
export default {
  name: 'Products',
  components: {
    Navbar,
    Footer
  },
  data(){
      return {
            // products: [
            //     {productName: "1OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
            //     {productName: "2OneProduct123123121", productPrice: "1500", productDescription: "A very good product! I promise! I promise! I promise! I promise! I promise! I promise! I promise! I promise! I promise!", productImage: "https://picsum.photos/200/300"},
            //     {productName: "3OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
            //     {productName: "4OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
            //     {productName: "5OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
            //     {productName: "6OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
            //     {productName: "7OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
            //     {productName: "8OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
            //     {productName: "9OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
            //     {productName: "10OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
            //     {productName: "11OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
            //     {productName: "12OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"}
            // ]
            products: []
        }
    },
    mounted() {
        Dataservice.getAllProducts().then(ress => this.products = ress).catch()
    }

}
</script>

<style>

</style>