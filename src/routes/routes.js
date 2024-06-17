import Inicio from "../components/inicio.vue"
import Habitaciones from "../components/habitaciones.vue"
import Extremos from "../components/extremos.vue"
import Contacto from "../components/contacto.vue"
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {path:"/", component: Inicio},
    {path: "/habitaciones", component: Habitaciones},
    {path: "/extremos", component: Extremos},
    {path: "/contacto", component: Contacto}
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})