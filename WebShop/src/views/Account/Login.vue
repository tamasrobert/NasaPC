<template>
    <main class="mainContent">
    <Navbar/>
    <div class="m-5">
                <Dialog v-model:visible="this.showMessage" :breakpoints="{ '960px': '80vw' }" :style="{ width: '30vw' }" position="top">
                    <div class="flex align-items-center flex-column pt-6 px-3">
                        <i class="pi pi-check-circle" :style="{fontSize: '5rem', color: messageColor }"></i>
                        <h5>{{this.messageHeader}}</h5>
                        <p :style="{lineHeight: 1.5, textIndent: '1rem'}">
                            {{this.messageText}}
                        </p>
                        <input v-if="this.passwordReset" type="email" class="form-control" v-model="this.UserData.email">
                    </div>
                    <template #footer>
                        <div v-if="this.passwordReset" class="flex justify-content-center">
                            <Button label="Send" @click="sendForgotPasswordRequest()" class="p-button-text" />
                        </div>
                        <div class="flex justify-content-center">
                            <Button label="Cancel" @click="closeDialog()" class="p-button-text" />
                        </div>
                    </template>
                </Dialog>





        <div class="row">
            
            <div class="col-4"></div>


            <div class="col-4 form m-5">
                
                <div class="mb-3 ">
                    <label class="form-label">Email:</label>
                    <input type="email" class="form-control" v-model="UserData.email">
                </div>
                
                <div class="mb-3 ">
                    <label class="form-label">Password:</label>
                    <input type="text" class="form-control" v-model="UserData.password">
                </div>

                <div class="row">
                    <div class="col-2">
                        <button @click="Login()" class="btn btn-primary">Login</button>
                    </div>
                    <div class="col-3">
                        <button class="btn btn-primary" @click="forgotPasswordForm()">Forgot password</button>
                    </div>
                    <div class="col-2"></div>
                    <div class="col-3">
                    <p>Don't have an account yet?</p>
                    <p>Sign up today.</p>
                    </div>
                    <div class="col-2">
                    <router-link to="/signup" class="btn btn-primary">signup</router-link>
                    </div>
                </div>
            </div>



            <div class="col-4"></div>




        </div>
        </div>
        <Footer/>
    </main>
</template>

<script>
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import AccountDataService from '../../services/AccountDataService.js'

export default {
    name: 'Login',
     components: {
        Dialog,
        Button,
        Navbar,
        Footer
    },
    data() {
        return {
            UserData: {
                email: "",
                password: "",
            },
            showMessage: false,
            messageHeader: "",
            messageText: "",
            messageColor: "",
            passwordReset: false

        }
    },
    methods: {
        Login() {
            AccountDataService.Login(this.UserData)
                .then(()=>{
                    console.log("Login was succesfull")
                    this.$router.push('/')
                })
                .catch(err => {
                    console.log(err.response.data.error)
                })
            
        },
        closeDialog() {
            this.showMessage = false
            this.passwordReset = false
            this.messageHeader = ""
            this.messageText = ""
            this.messageColor = ""
        },
        forgotPasswordForm() {
            this.showMessage = true
            this.passwordReset = true
            this.messageHeader = "Forgot Password"
            this.messageText = "Please give us your email address so we can send you a link to reset your password."
            this.messageColor = "blue"
        },
        sendForgotPasswordRequest() {
            AccountDataService.RequestPasswordChange(this.UserData)
            .then(()=>{
                this.successDialog()
            })
            .catch(err => {
                console.log(this.email)
                console.log(err.response.data)
                this.errorDialog(err.response.data.error)
            })
        },
        errorDialog(message) {
            this.showMessage = true
            this.passwordReset = false
            this.messageHeader = "ERROR"
            this.messageText = message
            this.messageColor = "red"
        },
        successDialog() {
            this.passwordReset = false
            this.showMessage = true
            this.messageHeader = "Success!"
            this.messageText = "We sent you an email for further instructions."
            this.messageColor = "green"
        }
    },

}
</script>

<style lang="scss" scoped>
.form {
    background: #ffffff;
    padding: 2rem;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    border-radius: 4px;
    margin-bottom: 2rem;
}

</style>



