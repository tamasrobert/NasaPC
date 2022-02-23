import {createRouter,createWebHistory} from 'vue-router'

import Home from '../views/Home.vue'
import Products from '../views/Products.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/Products', component: Products}
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router