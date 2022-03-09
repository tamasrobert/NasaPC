import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/css/Navbar.css'
import './assets/css/Footer.css'
import './assets/css/Text.css'





createApp(App).use(router).mount('#app')
