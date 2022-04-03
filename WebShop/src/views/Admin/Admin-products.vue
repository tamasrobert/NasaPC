<template>
        <main>
             <Navbar/>
            <div class="container " v-if="products.length > 0">
                
                <div class="row">
                    
                    <div class=" col-3 productCardSettings " v-for="(product,i) in products" :key="i">
                        <img :src="product.productImage" :alt="product.productImage">
                        <div class="flex justify-content-between" style="margin: 12px;">
                            <h5>{{product.productName}}</h5>
                            <h5>{{product.productPrice}} FT</h5>
                        </div>
                        
                            <div style="border-top: 2px solid white; padding:5px">
                                <p>{{product.productDescription}}</p>
                            </div>
                            <div style="position: absolute; bottom: 0;">
                                
                                    <router-link to="/admin/edit-product/{{}}" class="btn bg-primary" style="margin:10px">Edit</router-link>
                                    
                                    <button class="btn bg-warning" style="margin-left: 65px; margin-right:5px">Disable</button>
                                    <button class="btn bg-danger" @click="DeleteThisProduct(product._id)">Delete</button>
                              
                            </div>
                        
                    </div>

                </div>

            </div>
            <Footer/>
        </main>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import DataService from '../../services/DataService.js'
import AdminDataService from '../../services/AdminDataService.js'
export default {
  name: 'Admin-products',
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
            //     {productName: "12OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
            // ],
            products: []
        }
    },
    mounted() {
        DataService.getAllProducts().then(ress => this.products = ress).catch()
    },
    methods: {
        DeleteThisProduct(id) {
            AdminDataService(id).then(() => {})
        }
    }

}
</script>

<style>

</style>