<template>
  <div class="body">
    <Navbar/>
        <main>
            <div class="container" v-if="products.length > 0">
                
                <div class="row">
                    
                    <div class=" col-3 productCardSettings " v-for="(product,i) in products" :key="i">
                        <img src="https://picsum.photos/346/300" alt="https://picsum.photos/325/300">
                        <div class="flex justify-content-between" style="margin: 12px;">
                            <h5>{{product.productName}}</h5>
                            <h5>{{product.productPrice}} FT</h5>
                        </div>
                        
                            <div style="border-top: 2px solid white; padding:5px">
                                <p>{{product.productDescription}}</p>
                            </div>
                            <div class="d-flex" style="height:auto; bottom:0">
                                <div class="justify-content-start bottom-0" style="width:50%">
                                    <button class="btn m-1">Add to cart</button>
                                </div>
                                <div class="bottom-0" style="width:50%">
                                    <button class="btn">Delete</button>
                                    <button class="btn">Delete</button>
                                </div>
                            </div>
                        
                    </div>

                </div>

            </div>
        </main>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
export default {
  name: 'Products',
  components: {
    Navbar,
    Footer
  },
  data(){
      return {
          products: [
              {productName: "1OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
              {productName: "2OneProduct123123121", productPrice: "1500", productDescription: "A very good product! I promise! I promise! I promise! I promise! I promise! I promise! I promise! I promise! I promise!", productImage: "https://picsum.photos/200/300"},
              {productName: "3OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
              {productName: "4OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
              {productName: "5OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
              {productName: "6OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
              {productName: "7OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
              {productName: "8OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
              {productName: "9OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
              {productName: "10OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
              {productName: "11OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
              {productName: "12OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
          ]
      }
  }

}
</script>

<style>

</style>