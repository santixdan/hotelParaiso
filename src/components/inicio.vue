<template>
    <div class="q-pa-md">
        <q-carousel animated v-model="slide" navigation infinite :autoplay="autoplay" arrows
            transition-prev="slide-right" transition-next="slide-left" @mouseenter="autoplay = false"
            @mouseleave="autoplay = true">
            <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
            <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
            <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
            <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
        </q-carousel>
    </div>
    <div class="q-pa-md row items-start q-gutter-md" id="tagInfo">
        <q-card class="my-card1" flat bordered>
            <q-card-section horizontal>
                <q-card-section id="textTag">
                    En el Hotel Paraíso, cada día es una oportunidad para desafiar tus límites y explorar nuevas
                    emociones.
                    Desde deportes extremos hasta momentos de relajación, ofrecemos una experiencia completa que combina
                    lujo, confort y aventura.
                </q-card-section>
                <q-img class="col-5" src="https://cdn.quasar.dev/img/parallax2.jpg" />
            </q-card-section>
        </q-card>
    </div>
    <hr>
    <h3 id="servicios">NUESTROS SERVICIOS</h3>
    <div class="q-pa-md row items-start q-gutter-md" style="display: flex; justify-content: center;">
        <q-card class="my-card2">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-h6">
                    Piscinas Infinita
                </div>
            </q-img>

            <q-card-section>
                Sumérgete en nuestras espectaculares piscinas infinitas con vistas impresionantes.
            </q-card-section>
        </q-card>
        <q-card class="my-card2">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-h6">
                    Restaurantes Gourmet
                </div>
            </q-img>

            <q-card-section>
                Disfruta de una oferta gastronómica exquisita con platos locales e internacionales.
            </q-card-section>
        </q-card>
        <q-card class="my-card2">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-h6">
                    Spa de Clase Mundial
                </div>
            </q-img>

            <q-card-section>
                Relájate y rejuvenece en nuestro spa, donde el bienestar y la serenidad son la prioridad.
            </q-card-section>
        </q-card>
        <q-card class="my-card2">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-h6">
                    Actividades de Aventura
                </div>
            </q-img>

            <q-card-section>
                Experimenta la adrenalina con nuestras actividades de escalada, parapente, rafting, surf, buceo y
                tirolesa.
            </q-card-section>
        </q-card>
        <q-card class="my-card2">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-h6">
                    Gimnasio Equipado
                </div>
            </q-img>

            <q-card-section>
                Mantén tu rutina de ejercicios en nuestro gimnasio moderno y completamente equipado.
            </q-card-section>
        </q-card>
    </div>
    <hr>
</template>
<script setup>
import { ref } from "vue";

let slide = ref(1)
let autoplay = ref(true)
let lorem1 = ref("")
</script>
<style>
.my-card1 {
    width: 100%;
    max-width: 1000px;
    text-align: center;
    align-items: center;
    font-size: 20px;
}

.my-card2 {
    width: 100%;
    max-width: 250px;
    text-align: center;
    align-items: center;
    font-size: 20px;
}

#tagInfo {
    display: flex;
    justify-content: center;
}

#textTag {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#servicios {
    margin: 1%;
}
</style>