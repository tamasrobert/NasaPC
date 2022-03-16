import {createRouter,createWebHistory} from 'vue-router'

import Home from '../views/Shop/Home.vue'
import Products from '../views/Shop/Products.vue'
import Cart from '../views/Shop/Cart.vue'

import AddProduct from '../views/Admin/Add-product.vue'
import EditProduct from '../views/Admin/Edit-product.vue'
import Admin_Product from '../views/Admin/Admin-products.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/products', component: Products},
    {path: '/cart', component: Cart},

    {path: '/admin/add-product', component: AddProduct},
    {path: '/admin/edit-product', component: EditProduct},
    {path: '/admin/products', component: Admin_Product},
    
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router