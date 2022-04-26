<template>
    <main class="mainContent">
        <Navbar/>
        <div class="m-5">
             <div class="row">
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-0"></div>
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 card m-2">
                    <div class="CategoryIcon">							
                        <i class="pi pi-tag"></i>
						<span style="font-weight:bold">{{this.product.category}}</span>
					</div>
                    <img :src="'/image/'+this.product.path" class="cardImage" :alt="this.product.path">
                    <h3 class="cardName">{{this.product.name}}</h3>
                    <div class="line"/>
                    <p class="cardDescription">{{this.product.description}}</p>
                    
                </div>
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-0"></div>
            </div>
            

        </div>
        <Footer/>
    </main>
</template>

<script>
// import InputText from 'primevue/inputtext';
// import Dialog from 'primevue/dialog'
// import Password from 'primevue/password';
// import Button from 'primevue/button'
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import DataService from '../../services/DataService.js';
// import AccountDataService from '../../services/AccountDataService.js'
export default {
    name:"Contact",
    components: {
        // Dialog,
        // Button,
        Navbar,
        Footer,
        // Password,
        // InputText
    },
    data() {
        return {
            product: "",
            
        }
    },
    methods: {

    },
    mounted() {
        DataService.getProductById(this.$route.params.Id)
        .then((resp) => {this.product = resp})
        .catch((err) => {console.log(err.response.data)})
        
    }
}

</script>

<style lang="scss" scoped>
@import "../../assets/css/CostumeVariables.scss";
.card {
    background: #ffffff;
    padding: 2rem;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    border-radius: 4px;
    margin-bottom: 2rem;
    align-items: center;

    .cardImage{
        position: relative;
        margin-left: 5%;
        margin-right: 5%;
        margin-top: 2%;
        width: 90%;
    }
    .line{
        background: $darkblue;
        position: relative;
        margin-left: 3%;
        margin-right: 3%;
        margin-top: 2%;
        border-radius: 2px;
        width: 94%;
        height: 3px;
    }
    .cardName{
        color: $darkblue;
        text-decoration: none;
    }
    .CategoryIcon{
        position: absolute;
        top: 2%;
        left: 2%;
        font-size: 20px;
    }
    .cardDescription{
        position: relative;
        margin-left: 5%;
        margin-right: 5%;
        margin-top: 2%;
        width: 90%;
    }
    
}

</style>