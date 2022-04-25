<template>
    <main class="mainContent">
        <Navbar/>
        <div class="m-5">
             <div class="row">
                <div class="col-xl-4 col-lg-2 col-md-2 col-sm-0"></div>
                <div class="col-xl-4 col-lg-8 col-md-8 col-sm-12 form m-2">
                    
                </div>
                <div class="col-xl-4 col-lg-2 col-md-2 col-sm-0"></div>
            </div>
            

        </div>
        <Footer/>
    </main>
</template>

<script>
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog'
import Password from 'primevue/password';
import Button from 'primevue/button'
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import DataService from '../../services/DataService.js';
// import AccountDataService from '../../services/AccountDataService.js'
export default {
    name:"Contact",
    components: {
        Dialog,
        Button,
        Navbar,
        Footer,
        Password,
        InputText
    },
    data() {
        return {
            product: ""
        }
    },
    methods: {

    },
    mounted() {
        DataService.getProductById(this.$route.params.id)
        .then((resp) => {this.product = resp})
        .catch((err) => {console.log(err.response.data)})
        
    }
}

</script>

<style lang="scss" scoped>
@import "../../assets/css/CostumeVariables.scss";
.form {
    background: #ffffff;
    padding: 2rem;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    border-radius: 4px;
    margin-bottom: 2rem;
}

</style>