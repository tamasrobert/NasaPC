import {createRouter,createWebHistory} from 'vue-router'

import Home from '../views/Shop/Home.vue'
import Products from '../views/Shop/Products.vue'
import Cart from '../views/Account/Cart.vue'


import Admin_Product from '../views/Admin/Admin-products.vue'

import Login from '../views/Account/Login.vue'
import Signup from '../views/Account/Signup.vue'
import ActivateAccount from '../views/Account/ActivateAccount.vue'
import Logout from '../views/Account/Logout.vue'
import AccountSettings from '../views/Account/Account-settings.vue'
import WishList from '../views/Account/WishList.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/products', component: Products},
    {path: '/cart', component: Cart},

    
    {path: '/admin/products', component: Admin_Product},

    {path: '/login', component: Login},
    {path: '/signup', component: Signup},
    {path: '/activate/:activatorToken', component: ActivateAccount},
    {path: '/logout', component: Logout},
    {path: '/account/settings', component: AccountSettings},
    {path: '/account/wishlist', component: WishList},
    
    
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router