<template>
  <div class="body">
    <Navbar/>
        <main>
            <div v-if="products.length > 0">
                <div class="container">
                    <div class="row">

                        <div class="card col-2 m-2" style="width: 200px;" v-for="(product,i) in products" :key="i">
                            <img src="https://picsum.photos/200/300" class="card-img-top" alt="{{product.productImage}}">
                            <div class="card-body">
                                <h5 class="card-title">{{product.productName}}</h5>
                                <p class="card-text">{{product.productDescription}}</p>
                            </div>
                            <p>{{product.productPrice}}</p>
                            <div class="card-body">
                                <button class="btn btnAddToCart">Add to cart</button>
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
              {productName: "1OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
              {productName: "2OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/200/300"},
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