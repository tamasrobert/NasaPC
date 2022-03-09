<template>
  <div class="body">
    <Navbar/>
        <main>
            <div class="container" v-if="cartItems.length > 0">
                
                <div style="border-bottom: 2px solid white; margin-bottom:45px">
                    <h2 class="highlightedInfoText">This is your cart.</h2>
                    <h3 class="highlightedInfoText">Press the order now button to purchase your items.</h3>
                </div>

                <div class="row">
                    <div class=" col-3 productCardSettings " v-for="(item,i) in cartItems" :key="i">
                        <img src="https://picsum.photos/346/300" alt="https://picsum.photos/325/300">
                        <div class="flex justify-content-between" style="margin: 12px;">
                            <h5>{{item.cartItemName}}</h5>
                            <h5>{{item.cartItemPrice}} FT</h5>
                        </div>
                        
                            <div style="border-top: 2px solid white; padding:5px">
                                <p>{{item.cartItemDescription}}</p>
                            </div>
                            <div style="position: absolute; bottom: 0;">
                                
                                    
                                    <button class="btn bg-danger" style="margin:10px">Remove</button>
                                    <button class="btn bg-info" style="margin-left: 165px ;">Details</button>
                              
                            </div>
                        
                    </div>

                </div>

            </div>
            <!-- Cart isn't empthy ends here -->

            <div v-else style="margin-bottom:45px">
                    <h2 class="highlightedInfoText">Your cart is empthy!</h2>
                    <h3 class="highlightedInfoText">Check out our latest items <router-link class="hotLink" to="/products">HERE!</router-link></h3>
                </div>


        </main>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
export default {
  name: 'Cart',
  components: {
    Navbar,
    Footer
  },
  data(){
      return {
          cartItems: [
              {cartItemName: "1Cartitem", cartItemPrice: "1500", cartItemDescription: "A very good product!", cartItemImage: "https://picsum.photos/200/300"},
              {cartItemName: "2Cartitemasdasdasdasdads", cartItemPrice: "1500", cartItemDescription: "A very good product!", cartItemImage: "https://picsum.photos/200/300"},
              {cartItemName: "3Cartitem", cartItemPrice: "1500", cartItemDescription: "A very good product!", cartItemImage: "https://picsum.photos/200/300"},
              {cartItemName: "4Cartitem", cartItemPrice: "1500", cartItemDescription: "A very good product!", cartItemImage: "https://picsum.photos/200/300"},
              {cartItemName: "5Cartitem", cartItemPrice: "1500", cartItemDescription: "A very good product!", cartItemImage: "https://picsum.photos/200/300"}
          ]
      }
  }

}
</script>

<style>

</style>