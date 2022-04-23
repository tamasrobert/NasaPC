<template>
<div class="overflow-hidden row">
  <div class="col-12">

    <button class="mobile-nav-toggle" @click="toggleNavBar"
        aria-controls="primary-navbar" aria-expanded="false">
    </button>


    <nav>
        <ul id="primary-navbar" data-visible="false" 
        class="primary-navbar flex">
            <Logo/>
            <li class="navbar-item">
                <router-link class="btn navbar-link" to="/">Home</router-link>
            </li>
            <li class="navbar-item">
                <router-link class="btn navbar-link" to="/about">About</router-link>
            </li>
            <li class="navbar-item">
                <router-link class="btn navbar-link" to="/products">Products</router-link>
            </li>
            <li v-if="this.rules.admin == true" class="navbar-item">
                <router-link class="btn navbar-link" to="/admin/products">Admin</router-link>
            </li>

            <div class="AccountMenues">
                <li class="navbar-item">
                    <router-link class="btn navbar-link " to="/cart"><span class="pi pi-shopping-cart NavbarIcons"/></router-link>
                </li>
                <li v-if="this.rules.isLoggedIn == true" class="navbar-item">
                    <router-link class="btn navbar-link " to="/account/wishlist"><span class="pi pi-star-fill NavbarIcons"/></router-link>
                </li>
                <li v-if="this.rules.isLoggedIn == true" class="navbar-item">
                    <button class="btn navbar-link" @click="Logout()"><span class="pi pi-sign-out NavbarIcons"/></button>
                </li>
                 <li v-if="this.rules.isLoggedIn == true" class="navbar-item">
                    <router-link class="btn navbar-link " to="/account/settings"><span class="pi pi-cog NavbarIcons"/></router-link>
                </li>
                <li v-if="this.rules.isLoggedIn == false" class="navbar-item">
                    <router-link class="btn navbar-link " to="/login"><span class="pi pi-sign-in NavbarIcons"/></router-link>
                </li>
                <li v-if="this.rules.isLoggedIn == false" class="navbar-item">
                    <router-link class="btn navbar-link" to="/signup">Signup</router-link>
                </li>
            </div>

            <!-- <li class="navbar-item" v-for="(menuitem,i) in menu" :key="i" @click="toggleDropdowns(i)">
                <div v-if="menuitem.to">
                    <router-link class="btn navbar-link" :to="menuitem.to">{{menuitem.title}}</router-link>
                </div>
                <div v-else>
                    <span class="btn navbar-link">{{menuitem.title}}</span>
                </div>
            </li> -->
        </ul>
    </nav>

    <!-- <div v-for="(menuitem,i) in menu" :key="i" data-visible="false">
        <div v-if="!menuitem.dropdowns"></div>
        
        <div id="secondary-navbar" class="bg-primary secondary-navbar row" v-else-if="menuitem.dropdown == true">
            <div >
                <ul style="list-style:none">
                    <li class="navbar-item" v-for="(drmenuitem,j) in menuitem.dropdowns" :key="j">
                        <router-link class="navbar-link" :to="drmenuitem.to">{{drmenuitem.ddTitle}}</router-link>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div> -->

  </div>
</div>
</template>

<script>
import Logo from './Logo.vue'
import AccountDataService from '../services/AccountDataService.js'
import 'primeicons/primeicons.css';

export default {
    name: 'Navbar',
    components: {
        Logo,
    },
    data(){
        return{
            // menu: [
            //     {title:'Home', to:'/', admin: false},
            //     {title:'Products', dropdown: false, admin: false ,dropdowns: [
            //         {ddTitle:'poroduct', to:'/products'}
            //         ]},
            //     {title:'Admin', dropdown: false, admin: true ,dropdowns: [
            //         {ddTitle:'Add-product', to:'/admin/add-product'},
            //         {ddTitle:'Edit-product', to:'/admin/edit-product'},
            //         {ddTitle:'Products', to:'/admin/products'}
            //         ]}
            // ],
            rules: {isLoggedIn: false ,admin: false, courier: false}
        }
    },
    methods: {
        toggleNavBar() {
            const primaryNav = document.querySelector(".primary-navbar")
            // const secondaryNav = document.querySelector(".secondary-navbar")
            const navToggle = document.querySelector(".mobile-nav-toggle")
            const visibility = primaryNav.getAttribute('data-visible')
            
            if (visibility === "false") {
                primaryNav.setAttribute("data-visible", "true")
                // secondaryNav.setAttribute("data-visible", "true")
                navToggle.setAttribute("aria-expanded", "true")
                
                // this.menu.forEach(n => {
                // if (n.dropdown == true) {
                //     n.dropdown = false
                // }
                // })

            } else if (visibility === "true"){
                primaryNav.setAttribute("data-visible", false)
                // secondaryNav.setAttribute("data-visible", false)
                navToggle.setAttribute("aria-expanded", "false")
                
                // this.menu.forEach(n => {
                // if (n.dropdown == true) {
                //     n.dropdown = false
                // }
                // })
            }
        },
        Logout() {
            AccountDataService.Logout().then(() => {
                this.$router.push('/')
                this.rules.isLoggedIn = false
                this.rules.admin = false
                this.rules.courier = false
            })
            .catch(err => {
                    console.log(err.response.data.error)
            })
        },
        toggleDropdowns(i) {
            
            if (this.menu[i].dropdown) {
                this.menu[i].dropdown = false
            }
            else
            {
                this.menu.forEach(n => {
                if (n.dropdown == true) {
                    n.dropdown = false
                }
                })
                this.menu[i].dropdown = true
            }
            
        }
    },
        mounted() {
            AccountDataService.GetSession().then((response) => {
                this.rules.isLoggedIn = true
                if (response.data[0].admin) {
                    this.rules.admin = true
                }
                if (response.data[0].courier) {
                    this.rules[0].courier = true
                }
            })
            .catch(() => {
            console.log("An error might have accured during the loading of the navigationbar")
            })
        }
}
</script>

<style>
    
</style>