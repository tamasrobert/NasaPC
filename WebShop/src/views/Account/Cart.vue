<template>
    <main>
        <Navbar/>

        <div class="card">
            <OrderList v-model="this.cartItems" listStyle="height:auto" dataKey="_id">
                <template #header>
                    This is your Cart:
                </template>
                <template #item="slotProps">
                    <div class="product-item">
                        <div class="image-container">
                            <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.name" />
                        </div>
                        <div class="product-list-detail">
                            <h6 class="mb-2">{{slotProps.name}}</h6>
                            <i class="pi pi-tag product-category-icon"></i>
                            <span class="product-category">{{slotProps.category}}</span>
                        </div>
                        <div class="product-list-action">
                            <h6 class="mb-2">{{slotProps.price}} HUF</h6>
                        </div>
                    </div>
                </template>
            </OrderList>
        </div>

        <Footer/>
    </main>
</template>

<script>
import DataService from '../../services/DataService.js';
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import OrderList from 'primevue/orderlist'
// import { ref,  } from 'vue';
export default {
  name: 'Cart',
  components: {
    Navbar,
    Footer,
    OrderList,
  },
  data(){
      return {
          cartItems: []
      }
  },
  mounted() {
            var locArr = []

            locArr = JSON.parse(localStorage.getItem('cart'))
            
            console.log("asdasdasda     "+locArr[0]._id)

            locArr.forEach(product => {
                DataService.getProductById(product._id).then((resp) => {
                    this.cartItems.value.push({...resp, 'amount': product.amount})
                })
                .catch(()=>{})
            });

            console.log("This is the cart: "+this.cartItems.value)
  }

}
</script>

<style lang="scss" scoped>
.card {
    background: #ffffff;
    padding: 2rem;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    border-radius: 4px;
    margin-bottom: 2rem;
}
.product-item {
	display: flex;
	align-items: center;
	padding: .5rem;
	width: 100%;

	img {
		width: 75px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        margin-right: 1rem;
	}

	.product-list-detail {
		flex: 1 1 0;
	}

	.product-list-action {
		display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .product-category-icon {
        vertical-align: middle;
        margin-right: .5rem;
        font-size: .875rem;
    }

    .product-category {
        vertical-align: middle;
        line-height: 1;
        font-size: .875rem;
    }
}

@media screen and (max-width: 576px) {
    .product-item {
        flex-wrap: wrap;

        .image-container {
            width: 100%;
            text-align: center;
        }

        img {
            margin: 0 0 1rem 0;
            width: 100px;
        }
    }
}
</style>