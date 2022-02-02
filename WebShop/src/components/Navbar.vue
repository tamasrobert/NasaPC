<template>
  <div>

    <button class="mobile-nav-toggle" @click="toggleNavBar"
    aria-controls="primary-navbar" aria-expanded="false">
        <span class=""></span></button>


    <nav>
        <ul id="primary-navbar" data-visible="false" 
        class="primary-navbar flex">
            <li class="" v-for="(menuitem,i) in menu" :key="i">
                <router-link class="navbar-link" :to="menuitem.to">{{menuitem.title}}</router-link>
            </li>
            <li class="navbar-link-hasChild">
                <router-link class="navbar-link" to="/">asdasdads</router-link>
                <ul class="secondary-navbar">
                    <li>
                        <router-link class="navbar-link" to="/">asdasdads</router-link>
                    </li>
                    <li>
                        <router-link class="navbar-link" to="/">asdasdads</router-link>
                    </li>
                    <li>
                        <router-link class="navbar-link" to="/">asdasdads</router-link>
                    </li>
                </ul>
            </li>
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
                {title:'Home', to:'/', dropdowns: [
                    {ddTitle:'Dropdown', to:'/'},
                    {ddTitle:'Dropdown', to:'/'},
                    {ddTitle:'Dropdown', to:'/'}
                ]},
                {title:'Home', to:'/', dropdowns: []},
                {title:'Home', to:'/', dropdowns: [
                    {ddTitle:'Dropdown', to:'/'},
                    {ddTitle:'Dropdown', to:'/'},
                    {ddTitle:'Dropdown', to:'/'}
                ]},
                {title:'Home', to:'/', dropdowns: []},
                {title:'Home', to:'/', dropdowns: [
                    {ddTitle:'Dropdown', to:'/'},
                    {ddTitle:'Dropdown', to:'/'},
                    {ddTitle:'Dropdown', to:'/'}
                ]}
                //https://www.youtube.com/watch?v=vb_u7mj84Tc
                //Watch this...this is what I want, and the code too
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

            
        }
    }
}
</script>

<style>
    
</style>