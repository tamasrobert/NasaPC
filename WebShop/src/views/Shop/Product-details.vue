<template>
    <main>
        <Navbar/>
        <div class="row">
            <div class="col-3"></div>      
            <div class="col-6">
                <div class="row">
                    <div class="col-xs-12 col-lg-6">
                        <img src="https://picsum.photos/400/400" alt="https://picsum.photos/400/400">
                    </div>
                    <div class="col-xs-12 col-lg-6">
                        <h2 class="productName">{{this.product.name}}</h2>
                        <h3>{{this.product.category}}</h3>
                        <p>{{this.product.description}}</p>
                        <h1>Ne nézzen tanárúr majd a végén megformázom.</h1>
                    </div>
                </div>
            </div>
            <div class="col-3"></div>
        </div>
        <Footer/>
    </main>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import Dataservice from '../../services/DataService.js'

export default {
    name: "Product-details",
    components: {
        Navbar,
        Footer
    },
    data () {
        return{
            product: {}
        }
    },
    mounted () {
        Dataservice.getProductById(this.$route.params.id).then(response => this.product = response).catch()
    }


}
</script>

<style>
    .productName {
        text-decoration-line: underline;
    }

</style>