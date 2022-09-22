import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import SharedLayout from '../src/LayoutView.vue'



const app = createApp(App)

app.use(router)

app.mount('#app')

app.component('SharedLayout', SharedLayout)
