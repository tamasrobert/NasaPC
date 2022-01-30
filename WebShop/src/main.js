import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/css/Navbar.css'

import router from './router.js'

createApp(App).use(router).mount('#app')
