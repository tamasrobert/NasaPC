import {createRouter,createWebHistory} from 'vue-router'

import Home from '../views/Shop/Home.vue'
import Products from '../views/Shop/Products.vue'
import Cart from '../views/Shop/Cart.vue'

import AddProduct from '../views/Admin/Add-product.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/products', component: Products},
    {path: '/cart', component: Cart},

    {path: '/Admin/add-product', component: AddProduct}
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router