<template>
    <main>
        <Navbar/>

        <div class="card">
            <OrderList v-model="this.cartItems" listStyle="height:auto" dataKey="_id">
                <template #header>
                    <div class="row">
                        <div class="col-md-4 col-sm-12">
                            <span >This is your Cart:</span>
                        </div>
                        <div class="col-md-4 col-sm-0"></div>
                        <div class="col-md-4 col-sm-12">
                            <span >The total price is: {{getTotalPrice()}} HUF</span>
                        </div>
                    </div>
                </template>
                <template #item="slotProps">
                    <div class="product-item">
                        <div class="image-container">
                            <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.item.name" />
                        </div>
                        <div class="product-list-detail">
                            <h6 class="mb-2">{{slotProps.item.name}}</h6>
                            <i class="pi pi-tag product-category-icon"></i>
                            <span class="product-category">{{slotProps.item.category}}</span>
                        </div>
                        <div class="product-list-action">
                            <h6 class="mb-2">{{slotProps.item.price}} HUF</h6>
                            <h6 class="mb-2">Quantity: {{slotProps.item.amount}}</h6>
                            
                            <div class="row">
                                <Button class="p-button-rounded p-button-primary" icon="pi pi-plus" @click="addAmount(slotProps.item._id, 1)"></Button>
                                <Button class="p-button-rounded p-button-danger" style="margin-left:20px" icon="pi pi-minus" @click="addAmount(slotProps.item._id, -1)"></Button>
                            </div>
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
import Button from 'primevue/button'
// import { ref,  } from 'vue';
export default {
  name: 'Cart',
  components: {
    Navbar,
    Footer,
    OrderList,
    Button
  },
  data(){
      return {
          cartItems: [],
          isEmpty: true,
      }
  },
  methods: {
        isCartEmpty() {
            return (JSON.parse(localStorage.getItem('cart')) == null || JSON.parse(localStorage.getItem('cart')) == undefined || JSON.parse(localStorage.getItem('cart')).length == 0);
        },
        getTotalPrice() {
            let sum = 0;
            this.cartItems.forEach(product => {
                sum += (product.price * product.amount);
            });
            return sum;
        },
        addAmount(_id, num) {
            this.cartItems.forEach(product => {
                if(_id === product._id) {
                    let locArr = JSON.parse(localStorage.getItem('cart'));
                    if(num < 0) {
                        if(product.amount > 1) {
                            product.amount += num;
                            for (let i = 0; i < locArr.length; i++) {
                                if(locArr[i]._id === _id) {
                                    locArr[i].amount += num;
                                }
                            }
                        } else {
                            this.removeItemOnce(this.cartItems, product);
                            locArr.forEach(locItem => {
                                if(locItem._id === _id) {
                                    this.removeItemOnce(locArr, locItem);
                                }
                            });
                        }
                    } else {
                        product.amount += num;
                        for (let i = 0; i < locArr.length; i++) {
                            if(locArr[i]._id === _id) {
                                locArr[i].amount += num;
                            }
                        }
                    }
                    localStorage.setItem('cart', JSON.stringify(locArr));
                    this.isEmpty = this.isCartEmpty();
                }
            });
            // this.calculateCartAmount();
        },
        removeItemOnce(arr, value) {
            var index = arr.indexOf(value);
            if (index > -1) {
                arr.splice(index, 1);
            }
            return arr;
        },
        // calculateCartAmount() {
        //     if(!JSON.parse(localStorage.getItem('cart'))) {
        //         this.$store.state.cartItemsLength = 0;
        //     } else {
        //         var locArr = JSON.parse(localStorage.getItem('cart'));
        //         var sum = 0;
        //         locArr.forEach(locItem => {
        //         sum += locItem.amount;
        //         });
        //         this.$store.state.cartItemsLength = sum;
        //     }
        // }
  },
  mounted() {
            var locArr = JSON.parse(localStorage.getItem('cart'));

            locArr.forEach(product => {
                DataService.getProductById(product._id).then((resp) => {
                    this.cartItems.push({...resp, 'amount': product.amount})
                })
                .catch(()=>{})
            });
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