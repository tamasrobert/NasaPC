import {createRouter,createWebHistory} from 'vue-router'

import Home from '../views/Shop/Home.vue'
import Products from '../views/Shop/Products.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/products', component: Products}
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router