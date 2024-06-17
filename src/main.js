import { createApp } from 'vue'
import { Quasar, Notify } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import 'quasar/dist/quasar.css'
import App from './App.vue'
import { router } from './routes/routes.js'

const myApp = createApp(App)
myApp.use(router)

myApp.use(Quasar, {
  plugins: {Notify}
})

myApp.mount('#app')

