<template>
<div>
  <div>

    <button class="mobile-nav-toggle" @click="toggleNavBar"
        aria-controls="primary-navbar" aria-expanded="false">
    </button>


    <nav>
        <ul id="primary-navbar" data-visible="false" 
        class="primary-navbar flex">
            <Logo/>

            <!-- <div v-for="(menuitem,i) in menu" :key="i">
                <li class="navbar-item" v-if="!menuitem.dropdowns">
                    <router-link class="navbar-link" :to="menuitem.to">{{menuitem.title}}</router-link>
                </li>


                    <li class="navbar-item navbar-link-hasChild" @click="toggleDropdowns(i)" :dropdown-data-visible = "menuitem.dropdown" v-else>
                        <router-link class="navbar-link" :to="menuitem.to">{{menuitem.title}}</router-link>
                        <div class="bg-primary" style="height:25px"></div>
                        <ul class="secondary-navbar">
                            <li class="navbar-item" v-for="(drmenuitem,j) in menuitem.dropdowns" :key="j">
                                <router-link class="navbar-link" :to="drmenuitem.to">{{drmenuitem.ddTitle}}</router-link>
                            </li>
                        </ul>
                    </li>
            </div> -->

            <li class="navbar-item" v-for="(menuitem,i) in menu" :key="i" @click="toggleDropdowns(i)">
                <div v-if="menuitem.to">
                    <router-link class="btn navbar-link" :to="menuitem.to">{{menuitem.title}}</router-link>
                </div>
                <div v-else>
                    <span class="btn navbar-link">{{menuitem.title}}</span>
                </div>
            </li>
        </ul>
    </nav>

    <div v-for="(menuitem,i) in menu" :key="i" data-visible="false">
        <div v-if="!menuitem.dropdowns"></div>
        
        <div id="secondary-navbar" class="bg-primary secondary-navbar row" v-else-if="menuitem.dropdown == true">
            <div class="col-6">
                <ul style="list-style:none">
                    <li class="navbar-item" v-for="(drmenuitem,j) in menuitem.dropdowns" :key="j">
                        <router-link class="navbar-link" :to="drmenuitem.to">{{drmenuitem.ddTitle}}</router-link>
                    </li>
                </ul>
            </div>
            <div class="col-6"></div>
        </div>
    </div>

  </div>
</div>
</template>

<script>
import Logo from './Logo.vue'
export default {
    name: 'Navbar',
    components: {
        Logo
    },
    data(){
        return{
            menu: [
                {title:'Home', to:'/'},
                {title:'Products', dropdown: false, dropdowns: [
                    {ddTitle:'poroduct', to:'/products'}
                    ]},
                {title:'About us', to:'/'},
                {title:'Account', dropdown: false, dropdowns: [
                    {ddTitle:'WishList', to:'/account/wishlist'},
                    {ddTitle:'Cart', to:'/cart'},
                    {ddTitle:'Settings', to:'/account/settings'},
                    {ddTitle:'Log out', to:'/'}
                    ]},
                {title:'Admin', dropdown: false, dropdowns: [
                    {ddTitle:'Add-product', to:'/admin/add-product'},
                    {ddTitle:'Edit-product', to:'/admin/edit-product'},
                    {ddTitle:'Products', to:'/admin/products'}
                    ]},
                {title:'Login', to:'/login'},
                {title:'Signup', to:'/signup'},
            ]
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
                
                this.menu.forEach(n => {
                if (n.dropdown == true) {
                    n.dropdown = false
                }
                })

            } else if (visibility === "true"){
                primaryNav.setAttribute("data-visible", false)
                // secondaryNav.setAttribute("data-visible", false)
                navToggle.setAttribute("aria-expanded", "false")
                
                this.menu.forEach(n => {
                if (n.dropdown == true) {
                    n.dropdown = false
                }
                })
            }
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
     }
}
</script>

<style>
    
</style>