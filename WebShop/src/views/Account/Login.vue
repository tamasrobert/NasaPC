<template>
<main>
  <Navbar/>
    <div class="container row">
        
        <div class="col-3"></div>



        <form class="col-6 standardFormSettings m-5" @submit="Login()">
            
            <div class="mb-3 ">
                <label class="form-label">Email:</label>
                <input type="email" class="form-control" v-model="UserData.email">
            </div>
            
            <div class="mb-3 ">
                <label class="form-label">Password:</label>
                <input type="text" class="form-control" v-model="UserData.password">
            </div>

            <div class="row">
                <div class="col-6">
                    <button type="submit" class="btn btn-primary">Login</button>
                </div>
                <div class="col-6">
                    <button class="btn btn-primary">Forgot password</button>
                </div>
            </div>
        </form>



         <div class="col-3"></div>




    </div>
    <Footer/>
</main>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import AccountDataService from '../../services/AccountDataService.js'

export default {
    name: 'Login',
     components: {
        Navbar,
        Footer
    },
    data() {
        return {
            UserData: {
                email: "",
                password: ""
            }

        }
    },
    methods: {
        Login() {
            AccountDataService.Login(this.UserData).then(() => {}).catch()
        }

    }

}
</script>

<style>

</style>



