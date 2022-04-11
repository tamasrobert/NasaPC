<template>
<main>
    <Navbar/>
            <Dialog v-model:visible="this.showMessage" :breakpoints="{ '960px': '80vw' }" :style="{ width: '30vw' }" position="top">
                <div class="flex align-items-center flex-column pt-6 px-3">
                    <i class="pi pi-check-circle" :style="{fontSize: '5rem', color: 'var(--green-500)' }"></i>
                    <h5>Success!</h5>
                    <p :style="{lineHeight: 1.5, textIndent: '1rem'}">
                   Your account have been activated!
                    </p>
                </div>
                <template #footer>
                    <div class="flex justify-content-center">
                        <Button label="OK" @click="toggleDialog()" class="p-button-text" />
                    </div>
                </template>
            </Dialog>
        <div class="container" style="height: 600px; margin-top: 50px">
            <h1 style="text-align: center">Success!</h1>
            <h3 style="text-align: center">Your account have been activated!</h3>
        </div>
    
    <Footer/>
</main>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import AccountDataService from '../../services/AccountDataService.js'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'

export default {
    name: 'ActivateAccount',
     components: {
        Navbar,
        Footer,
        Dialog,
        Button
    },
    data(){
        return {
            token: this.$route.params.activatorToken,
            showMessage: true
        }
    },
    mounted() {
        AccountDataService.ActivateAccount(this.token)
       .catch(err => {console.log(err.data,this.token)})
    },
    methods: {
        toggleDialog() {
            this.$router.push('/login')
        }
    }

}
</script>

<style>

</style>



