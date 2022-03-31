import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';

import 'primevue/resources/themes/saga-blue/theme.css'      
import 'primevue/resources/primevue.min.css'                
import 'primeicons/primeicons.css'                        

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/css/Navbar.css'
import './assets/css/Text.css'





createApp(App).use(router).use(PrimeVue).component('Dialog', Dialog).mount('#app')
