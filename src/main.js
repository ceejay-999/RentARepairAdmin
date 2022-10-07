import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import SharedLayout from '../src/LayoutView.vue'
import Filemanage from '../src/views/FileManager.vue'
import Printinvoices from '../src/views/Printinvoice.vue'



const app = createApp(App)

app.use(router)

app.mount('#app')

app.component('SharedLayout', SharedLayout)
app.component('Filemanage', Filemanage)
app.component('Printinvoices', Printinvoices)