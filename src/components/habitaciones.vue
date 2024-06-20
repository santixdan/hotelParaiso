<template>
    <div class="q-pa-md">
        <q-parallax :height="500" :speed="1">
            <template v-slot:media>
                <img src="https://png.pngtree.com/background/20231030/original/pngtree-contemporary-3d-rendering-of-a-stylish-bedroom-in-a-modern-condominium-picture-image_5799708.jpg">
            </template>

            <h1 class="text-white">NUESTRAS HABITACIONES</h1>
            <p class="text-white2">Descubre las diversas opciones de alojamiento que el Hotel Paraíso tiene para
        ofrecer.<br>Cada una diseñada para proporcionar el máximo confort y lujo durante tu estancia.</p>
        </q-parallax>
    </div>
    <h3 id="habitaciones"></h3>
    <p id="txtHabitaciones"></p>
    <hr>
    <div class="q-pa-md row items-start q-gutter-md" id="cards">
        <q-card class="my-card" flat bordered>
            <q-card-section horizontal>
                <q-card-section>
                    <h4>Habitación estandar</h4>
                    <h6>Descripción</h6>
                    <p>Nuestras habitaciones estándar son acogedoras y perfectas para descansar tras un día de aventuras. Con decoración moderna, ofrecen vistas a los jardines o a la piscina.</p>
                    <h6>Características y Comodidades</h6>
                    <ul>
                        <li>Cama King o Doble</li>
                        <li>Wi-Fi gratuito</li>
                        <li>TV de pantalla plana</li>
                        <li>Minibar</li>
                        <li>Caja fuerte</li>
                        <li>Baño completo con artículos de aseo de lujo</li>
                    </ul>
                    <h5>Precio: Desde $150 por noche</h5>
                    <q-btn label="Reservar" color="black" id="btnModal" @click="icon = true" />
                </q-card-section>

                <q-img class="col-5" src="https://www.hotelvaldorba.com/wp-content/uploads/2014/11/Habitacion-de-Hotel-rural-Valdorba-en-Navarra-1920x1080.jpg" />
            </q-card-section>
        </q-card>
        <q-card class="my-card" flat bordered>
            <q-card-section horizontal>
                <q-img class="col-5" src="https://hotelhaciendadecortes.com.mx/theme/img/slide/jr/lightbox/1.jpg" />
                <q-card-section>
                    <h4>Suite Junior</h4>
                    <h6>Descripción</h6>
                    <p>Las Suites Junior ofrecen un espacio adicional para relajarse, con una zona de estar separada y
                        vistas panorámicas al océano o a las montañas. Ideales para parejas o viajeros que buscan un
                        poco más de lujo y comodidad.</p>
                    <h6>Características y Comodidades</h6>
                    <ul>
                        <li>Cama King</li>
                        <li>Zona de estar separada</li>
                        <li>Wi-Fi gratuito</li>
                        <li>TV de pantalla plana</li>
                        <li>Minibar</li>
                        <li>Caja fuerte</li>
                        <li>Baño completo con artículos de aseo de lujo</li>
                        <li>Balcón privado</li>
                    </ul>
                    <h5>Precio: Desde $250 por noche</h5>
                    <q-btn label="Reservar" color="black" id="btnModal" @click="icon = true" />
                </q-card-section>
            </q-card-section>
        </q-card>
        <q-card class="my-card" flat bordered>
            <q-card-section horizontal>
                <q-card-section>
                    <h4>Suite de Lujo</h4>
                    <h6>Descripción</h6>
                    <p>Nuestras Suites de Lujo son el epítome del confort y la elegancia, con amplios espacios de estar
                        y vistas impresionantes al océano. Perfectas para huéspedes que buscan una experiencia de
                        alojamiento superior.</p>
                    <h6>Características y Comodidades</h6>
                    <ul>
                        <li>Cama King</li>
                        <li>Amplia sala de estar</li>
                        <li>Wi-Fi gratuito</li>
                        <li>TV de pantalla plana</li>
                        <li>Minibar</li>
                        <li>Caja fuerte</li>
                        <li>Baño de lujo con bañera y artículos de aseo premium</li>
                        <li>Balcón privado con tumbonas</li>
                    </ul>
                    <h5>Precio: Desde $400 por noche</h5>
                    <q-btn label="Reservar" color="black" id="btnModal" @click="icon = true" />
                </q-card-section>

                <q-img class="col-5" src="https://images.mirai.com/HOST/500255/room-24672.jpg" />
            </q-card-section>
        </q-card>
        <q-card class="my-card" flat bordered>
            <q-card-section horizontal>
                <q-img class="col-5" src="https://st3.idealista.com/news/archivos/styles/fullwidth_xl/public/2018-08/suite-princesse-grace-3.jpg?VersionId=4GORgqRZX0hbzXsr3j7zn8Dn580DRqLn&itok=hoDo8M8x" />
                <q-card-section>
                    <h4>Suite<br>Presidencial</h4>
                    <h6>Descripción</h6>
                    <p>Las Suites Presidenciales ofrecen la máxima experiencia de lujo y exclusividad. Con espacios
                        generosos, vistas panorámicas incomparables y servicios personalizados, estas suites son ideales
                        para huéspedes que buscan lo mejor de lo mejor.</p>
                    <h6>Características y Comodidades</h6>
                    <ul>
                        <li>Cama King</li>
                        <li>Sala de estar y comedor independientes</li>
                        <li>Cocina equipada</li>
                        <li>Wi-Fi gratuito</li>
                        <li>TV de pantalla plana</li>
                        <li>Minibar y vinoteca</li>
                        <li>Caja fuerte</li>
                        <li>Baño de lujo con bañera y artículos de aseo premium</li>
                        <li>Terraza privada con jacuzzi y tumbonas</li>
                        <li>Servicio de mayordomo</li>
                    </ul>
                    <h5>Precio: Desde $800 por noche</h5>
                    <q-btn label="Reservar" color="black" id="btnModal" @click="icon = true" />
                </q-card-section>
            </q-card-section>
        </q-card>
    </div>
    <q-dialog v-model="icon">
        <q-card>
            <q-card-section class="row items-center q-pb-none">
                <div class="text-h6">Reserva Tu Estancia</div>
                <q-space />
                <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section>
                <div class="q-pa-md" style="max-width: 400px">
                    <q-form @submit="onSubmit()" @reset="onReset()" class="q-gutter-md">
                        <q-input filled v-model="name" label="Su nombre *" hint="Nombre y apellido" lazy-rules
                            :rules="[val => val && val.length > 0 || 'Por favor, dígite su nombre']" />
                        <q-input filled v-model="mail" label="Su correo *" hint="Correo electrónico" lazy-rules
                            :rules="[val => val && val.length > 0 || 'Por favor, dígite su correo']" />
                        <q-input filled type="number" v-model="number" label="Su teléfono *" hint="Número telefónico"
                            lazy-rules :rules="[
                                val => val !== null && val !== '' || 'Por favor, dígite su número de teléfono'
                            ]" />
                        <q-select filled v-model="model" :options="options" hint="Habitación" label="Habitación *"
                            :rules="[val => val && val.length > 0 || 'Por favor, escoja una habitación']" />
                        <q-input filled v-model="date1" label="Fecha de entrada *" hint="Fecha de entrada" :rules="['date', val => val !== null && val !== '' || 'Por favor, dígite la fecha de entrada']">
                            <template v-slot:append>
                                <q-icon name="event" class="cursor-pointer">
                                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                        <q-date v-model="date1">
                                            <div class="row items-center justify-end">
                                                <q-btn v-close-popup label="Close" color="primary" flat />
                                            </div>
                                        </q-date>
                                    </q-popup-proxy>
                                </q-icon>
                            </template>
                        </q-input>
                        <q-input filled v-model="date2" label="Fecha de salida *" hint="Fecha de salida" :rules="['date', val => val !== null && val !== '' || 'Por favor, dígite la fecha de salida']">
                            <template v-slot:append>
                                <q-icon name="event" class="cursor-pointer">
                                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                        <q-date v-model="date2">
                                            <div class="row items-center justify-end">
                                                <q-btn v-close-popup label="Close" color="primary" flat />
                                            </div>
                                        </q-date>
                                    </q-popup-proxy>
                                </q-icon>
                            </template>
                        </q-input>
                        <q-toggle v-model="accept" label="Acepto términos y condiciones" />
                        <div>
                            <q-btn label="Submit" type="submit" color="primary" />
                            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                        </div>
                    </q-form>
                </div>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>
<script setup>
import { useQuasar } from 'quasar'
import { ref } from "vue";

let icon = ref(false)
let $q = useQuasar()

let name = ref(null)
let mail = ref(null)
let number = ref(null)
let accept = ref(false)
let model = ref(null)
let date1 = ref(null)
let date2 = ref(null)
let options = ['Habitación estandar', 'Suit Junior', 'Suit de Lujo', 'Suit Presidencial']

function onSubmit() {
    if (accept.value !== true) {
        $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Primero necesitas aceptar los términos y condiciones'
        })
    } else {
        $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Reserva realizada, a su correo llegará la factura'
        })
    }
}

function onReset() {
    name.value = null
    mail.value = null
    number.value = null
    model.value = null
    date1.value = null
    date2.value = null
    accept.value = false
}
</script>
<style>

.my-card {
    width: 100%;
    /* max-width: 350px; */
}

#habitaciones {
    text-align: center;
    margin: 1%;
}

#txtHabitaciones {
    text-align: center;
    font-size: 130%;
}

#btnModal {
    font-size: 100%;
    color: greenyellow !important;
}
.text-white{
    color: white !important;
    text-shadow: 
    -2px -1px 0 #000000,  
    1px -1px 0 #000000,
    -1px 1px 0 #000000,
    1px 1px 0 #000000;
}
.text-white2{
    color: white !important;
    font-weight: bold;
    font-size: 130%;
    text-shadow: 
    -2px -1px 0 #000000,  
    1px -1px 0 #000000,
    -1px 1px 0 #000000,
    1px 1px 0 #000000;
}
#cards{
    display: flex;
    justify-content: center;
}
@media screen and (max-width:500px) and (min-width:300px){
    .text-white{
        text-align: left;
        font-size: 210%;
    }
    .text-white2{
        font-size: 110%;
        text-align: left;
    }
}
</style>