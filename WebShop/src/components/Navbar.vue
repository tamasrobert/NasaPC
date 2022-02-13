<template>
  <div>

    <button class="mobile-nav-toggle" @click="toggleNavBar"
    aria-controls="primary-navbar" aria-expanded="false">
        <span class=""></span></button>


    <nav>
        <ul id="primary-navbar" data-visible="false" 
        class="primary-navbar flex">
            <div v-for="(menuitem,i) in menu" :key="i">
                <li class="navbar-item" v-if="!menuitem.dropdowns">
                    <router-link class="navbar-link" :to="menuitem.to">{{menuitem.title}}</router-link>
                </li>


                    <li class="navbar-item navbar-link-hasChild" @click="toggleDropdowns"  dropdown-data-visible = "false" v-else>
                        <router-link class="navbar-link" :to="menuitem.to">{{menuitem.title}}</router-link>
                        <ul class="secondary-navbar">
                            <li class="navbar-item" v-for="(drmenuitem,j) in menuitem.dropdowns" :key="j">
                                <router-link class="navbar-link" :to="drmenuitem.to">{{drmenuitem.ddTitle}}</router-link>
                            </li>
                        </ul>
                    </li>
            </div>
        </ul>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return{
            menu: [
                {title:'Home1', to:'/', dropdowns: [
                    {ddTitle:'Dropdown', to:'/'},
                    {ddTitle:'Dropdown', to:'/'},
                    {ddTitle:'Dropdown', to:'/'}
                ]},
                {title:'Home2', to:'/'},
                {title:'Home3', to:'/', dropdowns: [
                    {ddTitle:'Dropdown', to:'/'},
                    {ddTitle:'Dropdown', to:'/'},
                    {ddTitle:'Dropdown', to:'/'}
                ]},
                {title:'Home4', to:'/'},
                {title:'Home5', to:'/', dropdowns: [
                    {ddTitle:'Dropdown', to:'/'},
                    {ddTitle:'Dropdown', to:'/'},
                    {ddTitle:'Dropdown', to:'/'}
                ]},
            ]
        }
    },
    methods: {
        toggleNavBar() {
            const primaryNav = document.querySelector(".primary-navbar")
            const navToggle = document.querySelector(".mobile-nav-toggle")
            const visibility = primaryNav.getAttribute('data-visible')
            
            if (visibility === "false") {
                primaryNav.setAttribute("data-visible", "true")
                navToggle.setAttribute("aria-expanded", "true")
            } else if (visibility === "true"){
                primaryNav.setAttribute("data-visible", false)
                navToggle.setAttribute("aria-expanded", "false")
            }
        },
        toggleDropdowns() {
            if (this.getAttribute("dropdown-data-visible") === "false") {
                this.setAttribute("dropdown-data-visible", "true")
            }
            else
            {
                this.setAttribute("dropdown-data-visible", "false")
            }
        }
     }
}
</script>

<style>
    
</style>