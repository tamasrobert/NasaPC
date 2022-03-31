<template>
    <Navbar/>
    <div class="row mt-5">
        <div class="col-1"></div>

        <div class="col-10">
            <OrderList v-model="wishlist" listStyle="height:auto" dataKey="vin">
                <template #header>
                    Your WishList
                </template>
                <template #item="WishListItem">
                    <div class="p-caritem row WishListItemBoxSettings">
                        <div class="col-6">
                             <img class="WishListPictureSettings" :src="WishListItem.item.productImage">
                        </div>
                       
                        <div class="col-6">
                            <div class="row">
                                <span style="width: 90%; height:50%; word-wrap: break-word" class="p-caritem-vin">{{WishListItem.item.productName}}</span>
                                <span style="margin-top: 20%" >{{WishListItem.item.productPrice}} EU</span>
                            </div>
                        </div>
                    </div>
                </template>
            </OrderList>
        </div>

        <div class="col-1"></div>
    </div>
    <Footer/>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import OrderList from 'primevue/orderlist'


export default {
    name: 'WishList',
    components: {
        Navbar,
        Footer,
        OrderList,
    },
    data() {
        return {
            wishlist: [
                {productName: "1OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/300/200"},
                {productName: "2OneProduct123123121", productPrice: "1500", productDescription: "A very good product! I promise! I promise! I promise! I promise! I promise! I promise! I promise! I promise! I promise!", productImage: "https://picsum.photos/300/200"},
                {productName: "3OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/300/200"},
                {productName: "4OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/300/200"},
                {productName: "5OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/300/200"},
                {productName: "6OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/300/200"},
                {productName: "7OneProduct", productPrice: "1500", productDescription: "A very good product!", productImage: "https://picsum.photos/300/200"},
            ]
        }
    }

}
</script>

<style>
    .WishListItemBoxSettings {
        height: fit-content;

    }
    .WishListPictureSettings {
        width: 75%;
        height: 75%;
    }
    

</style>