<template>
  <div class="body">
    <Navbar/>
        <main>
            <div v-if="products.length > 0">
                <div class="grid">
                    
                </div>

            </div>
        </main>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Products',
  components: {
    Navbar,
    Footer
  },
  data(){
      return {
          products: [
              {productName: "OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
              {productName: "OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
              {productName: "OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
              {productName: "OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
              {productName: "OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
              {productName: "OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
              {productName: "OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
              {productName: "OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
              {productName: "OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
              {productName: "OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
              {productName: "OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
              {productName: "OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
          ]
      }
  }

}
</script>

<style>

</style>