<template>
  <div>

    <button class="mobile-nav-toggle" @click="toggleNavBar"
    aria-controls="primary-navbar" aria-expanded="false">
        <span class=""></span></button>

        <!-- find out why I can't use JavaScript, 34:47  -->

    <nav>
        <ul id="primary-navbar" data-visible="false" 
        class="primary-navbar flex">
            <li class="" v-for="(menuitem,i) in menu" :key="i">
                <router-link class="navbar-link" :to="menuitem.to">{{menuitem.title}}</router-link>
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
                {title:'Home', to:'/'},
                {title:'Home', to:'/'},
                {title:'Home', to:'/'},
                {title:'Home', to:'/'},
                {title:'Home', to:'/'}
                //Menues are to be changed as the project
                //progresses on or deleted if neccessary
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