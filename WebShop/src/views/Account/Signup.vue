<template>
  <Navbar/>
    <div class="container">
        <form class="col-6 standardFormSettings m-5">

            <div class="row">
                <div class="mb-3 col-6">
                    <label class="form-label">First Name:</label>
                    <input type="text" class="form-control" v-model="FirstName">
                </div>
                <div class="mb-3 col-6">
                    <label class="form-label">Last Name:</label>
                    <input type="text" class="form-control" v-model="LastName">
                </div>
            </div>
            
            <div class="mb-3 ">
                <label class="form-label">Email:</label>
                <input type="email" class="form-control" v-model="Email">
            </div>
            <div class="mb-3 ">
                <label class="form-label">Phone number:</label>
                <input type="number" class="form-control" v-model="PhoneNumber">
            </div>
            <div class="mb-3 ">
                <label class="form-label">Password:</label>
                <input type="text" class="form-control" v-model="Password">
            </div>
            <div class="mb-3 ">
                <label class="form-label">Repeate Password:</label>
                <input type="text" class="form-control" v-model="PasswordAgain">
            </div>
            <button type="submit" class="btn btn-primary">Signup</button>
        </form>





    </div>
  <Footer/>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'

export default {
    name: 'Signup',
     components: {
        Navbar,
        Footer
    },
    data() {
        return {
            FirstName: "",
            LastName: "",
            Email: "",
            PhoneNumber: "",
            Password: "",
            PasswordAgain: ""

        }
    }

}
</script>

<style>

</style>