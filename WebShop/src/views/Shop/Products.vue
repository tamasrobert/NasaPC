<template>
    <main>
        <Navbar/>





                        <transition name="fade">
                            <div v-if="showDetails" class="details_screen">
                                <img src="https://picsum.photos/500/350">
                                <h4 class="name">{{detailedProduct.name}}</h4>
                                <!-- <div class="lineInTheDetails"></div> -->
                                <div class="descriptionbox">
                                    <p class="description">{{detailedProduct.description}}</p>
                                </div>
                                <button class="add-to-cart">Add to cart</button>
                                <button class="close" @click="closeDetailsScreen()">Close</button>
                                <div class="pricebox"></div>
                                <h3 class="price">{{detailedProduct.price}} HUF</h3>
                            </div>
                        </transition>


                <div class="row">
                    <div v-for="(product,i) in products" :key="i" class="col-lg-4 col-md-6 col-sm-7">

                        <div class="productCardSettings">
                            <img src="https://picsum.photos/290/300">
                            <h6 class="name">{{product.name}}</h6>
                            <button class="add-to-cart">Add to cart</button>
                            <button class="details" @click="openDetailsScreen(product)">Details</button>
                            <div class="pricebox"></div>
                            <h3 class="price">{{product.price}} HUF</h3>
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
            products: [],
            showDetails: false,
            detailedProduct: {
                // _id: "",
                // name: "",
                // description: "",
                // price: "",
                // category: "",
                // path: ""
            }
        }
    },
    mounted() {
        Dataservice.getAllProducts().then(ress => this.products = ress).catch()
    },
    methods: {
        openDetailsScreen(product) {
            this.detailedProduct = product
            // this.product_details = {'_id': product._id,
            //  'name': product.name,
            //   'description': product.description,
            //    'price': product.price,
            //     'path': product.path,
            //      'category': product.category}
            this.showDetails = true;
        },
        closeDetailsScreen() {
            this.showDetails = false
        }
    }

}
</script>

<style>

</style>