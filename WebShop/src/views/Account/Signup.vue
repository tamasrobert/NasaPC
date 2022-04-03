<template>
    <main>
        <Navbar/>
        <div class="row formAndInfobox">
            
            <div class="col-xs-12 col-lg-6" style="margin-bottom: 2em">
                <div class="form-demo">
                    

                    <div class="flex justify-content-center">
                        <div class="card">
                            <h5> Note: Frontend validation is missing</h5>
                            <h5 class="text-center">Register</h5>
                            <form class="p-fluid" method="post" @submit="SignupNewUser">
                                <div class="field">
                                    <div class="p-float-label p-input-icon-right">
                                        <i class="pi pi-user"></i>
                                        <InputText id="name" v-model="UserData.name" />
                                        <!-- <label for="name" >Name*</label> -->
                                    </div>
                                    <!-- <small v-if="(v$.name.$invalid && submitted) || v$.name.$pending.$response" class="p-error">{{v$.name.required.$message.replace('Value', 'Name')}}</small> -->
                                </div>
                                <div class="field">
                                    <div class="p-float-label p-input-icon-right">
                                        <i class="pi pi-envelope" />
                                        <InputText id="email" v-model="UserData.email"/>
                                        <!-- <label for="email" >Email*</label> -->
                                    </div>
                                    
                                
                                </div>
                                <div class="field">
                                    <div class="p-float-label">
                                        <Password id="password" v-model="UserData.password">
                                            <template #header>
                                                <h6>Pick a password</h6>
                                            </template>
                                            <template #footer="sp">
                                                {{sp.level}}
                                                <Divider />
                                                <p class="mt-2">Suggestions</p>
                                                <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                                                    <li>At least one lowercase</li>
                                                    <li>At least one uppercase</li>
                                                    <li>At least one numeric</li>
                                                    <li>Minimum 8 characters</li>
                                                </ul>
                                            </template>
                                        </Password>
                                        <!-- <label for="password">Password*</label> -->
                                    </div>
                                </div>
                                <div class="field">
                                <span class="p-float-label">
                                    <InputText id="inputtext" type="text" v-model="UserData.passwordAgain" />
                                    <!-- <label for="inputtext">Password Again*</label> -->
                                </span>
                                </div>
                                <div class="field">
                                    <div class="p-float-label">
                                        <Calendar id="date" v-model="UserData.date" :showIcon="true" />
                                        <!-- <label for="date">Birthday</label> -->
                                    </div>
                                </div>
                                <!-- <div class="field">
                                    <div class="p-float-label">
                                        <Dropdown id="country" v-model="country" :options="countries" optionLabel="name" />
                                        <label for="country">Country</label>
                                    </div>
                                </div> -->
                                <div class="field-checkbox">
                                    <Checkbox/>
                                    <label>I agree to the terms and conditions*</label>
                                </div>
                                <Button type="submit" label="Submit" class="mt-2" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>




            <div class="col-xs-12 col-lg-6 ">
                <h4>Create and account and enjoy the following perks:</h4>
                <ul>
                    <li>
                        <p>Get notifications about the new discounts, so you won't miss out on any awesome deal we have.</p>
                    </li>
                    <li>
                        <p>Make a whislist and we will make sure inform you about your dream product.</p>
                    </li>
                    <li>
                        <p>Collect loyality points and turn them in for extra bonuses.</p>
                    </li>
                    <li>
                        <p>Make purchases faster by saving your billing information.</p>
                    </li>
                    <li>
                        <p>Get the maximum experience out of your stay here.</p>
                    </li>
                </ul>
            </div>




        </div>
        <Footer/>
    </main>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
// import { email, required } from "@vuelidate/validators"
// import { useVuelidate } from "@vuelidate/core"
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Calendar from 'primevue/calendar'
import Password from 'primevue/password'
import InputText from 'primevue/inputtext'
import AccountDataService from '../../services/AccountDataService.js'


export default {
    name: 'Signup',
    components: {
        Navbar,
        Footer,
        Button,
        Checkbox,
        Calendar,
        Password,
        InputText,
    },
    data() {
        return {
            UserData: {
                name: 'Name',
                email: 'E-mail',
                password: 'Password',
                passwordAgain: 'PasswordAgain',
                date: ''
            }
        }
    },
    // validations() {
    //     return {
    //         name: {
    //             required
    //         },
    //         email: {
    //             required,
    //             email
    //         },
    //         password: {
    //             required
    //         },
    //         accept: {
    //             required
    //         }
    //     }
    // },
    methods:{
        SignupNewUser() {
            AccountDataService.SignUp(this.UserData).then(() => {}).catch()
            //ToDo: trigger a message which says to check emals !!!
        }

    }
    
    
}
</script>

<style lang="scss" scoped>
.form-demo {
    .card {
        min-width: 300px;

        form {
            margin-top: 2rem;
        }

        .field {
            margin-bottom: 1.5rem;
        }
    }

    @media screen and (max-width: 960px) {
        .card {
            width: 80%;
        }
    }
}
.formAndInfobox {
    margin: 5%;
}

</style>