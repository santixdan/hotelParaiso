<template>
    <div class="q-pa-md">
        <div class="q-pa-md">
            <q-parallax :height="500" :speed="1">
                <template v-slot:media>
                    <img
                        src="https://blog.jeep.com.ec/hubfs/7%20deportes%20extremos%20para%20realizar%20outdoor%20despu%C3%A9s%20de%20la%20cuarentena-4.png">
                </template>

                <h1 id="text-white">DEPORTES EXTREMOS</h1>
                <p id="text-white2">
                    En Hotel Paraíso, ofrecemos una variedad de deportes extremos para aquellos que buscan emociones y
                    aventura. <br>
                    Explora nuestras actividades y prepárate para una experiencia inolvidable.
                </p>
            </q-parallax>
        </div>
        <div class="deportes">
            <div id="activity">
                <q-card class="my-card3">
                    <q-video src="https://www.youtube.com/embed/_wC0WT4DPBU?si=CjIiFncHw3HS-YtR">
                        <iframe title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </q-video>

                    <q-card-section>
                        <div class="text-h6">
                            <h4>Parapente</h4>
                        </div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <h2></h2>
                        <p><strong>Descripción:</strong> Disfruta de vistas panorámicas mientras vuelas sobre
                            impresionantes
                            paisajes.</p>
                        <p><strong>Nivel de dificultad:</strong> Moderado</p>
                        <p><strong>Requisitos:</strong> Edad mínima: 16 años, peso máximo: 100 kg</p>
                        <h6>
                            <p><strong>Precio:</strong> $150 por persona</p>
                        </h6>
                    </q-card-section>
                </q-card>
            </div>
            <div id="activity">
                <q-card class="my-card3">
                    <q-video src="https://www.youtube.com/embed/9txxodYuZGc?si=kpLxStoaKyOnWxAu">
                        <iframe title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </q-video>

                    <q-card-section>
                        <div class="text-h6">
                            <h4>Rafting</h4>
                        </div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <h2></h2>
                        <p><strong>Descripción:</strong> Desciende por rápidos emocionantes en uno de nuestros ríos
                            cercanos.</p>
                        <p><strong>Nivel de dificultad:</strong> Alto</p>
                        <p><strong>Requisitos:</strong> Saber nadar, buena condición física</p>
                        <h6>
                            <p><strong>Precio:</strong> $120 por persona</p>
                        </h6>
                    </q-card-section>
                </q-card>
            </div>
            <div id="activity">
                <q-card class="my-card3">
                    <q-video src="https://www.youtube.com/embed/FAWUYDmVVQU?si=fNWFUEK-h04Y5HyZ">
                        <iframe title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
                    </q-video>

                    <q-card-section>
                        <div class="text-h6">
                            <h4>Escalada en Roca</h4>
                        </div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <h2></h2>
                        <p><strong>Descripción:</strong> Desafía tus límites escalando las formaciones rocosas naturales
                            de
                            la zona.
                        </p>
                        <p><strong>Nivel de dificultad:</strong> Difícil</p>
                        <p><strong>Requisitos:</strong> Edad mínima: 18 años, experiencia previa en escalada</p>
                        <h6>
                            <p><strong>Precio:</strong> $100 por persona</p>
                        </h6>
                    </q-card-section>
                </q-card>
            </div>
            <div id="activity">
                <q-card class="my-card3">
                    <q-video src="https://www.youtube.com/embed/S80wAsXTF0U?si=fHIz5edW0mO6yAEA">
                        <iframe title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </q-video>

                    <q-card-section>
                        <div class="text-h6">
                            <h4>Espeleología</h4>
                        </div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <h2></h2>
                        <p><strong>Descripción:</strong> Explora las profundidades de las cuevas naturales de la región.
                        </p>
                        <p><strong>Nivel de dificultad:</strong> Moderado</p>
                        <p><strong>Requisitos:</strong> Edad mínima: 16 años, buen estado físico</p>
                        <h6>
                            <p><strong>Precio:</strong> $75 por persona</p>
                        </h6>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

</script>

<style>
#activity {
    width: 80%;
    /* margin-bottom: 2em; */
    display: flex;
    justify-items: center;
}

.deportes {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    justify-items: center;
    align-items: center;
}

.introduccion {
    /* display: flex;
    flex-direction: column; */
    text-align: center;
}

.my-card3 {
    width: 100%;
    max-width: 1000px;
}

.my-card {
    width: 80%;
    display: flex;
    justify-content: center;
    /* max-width: 350px; */
}
@media screen and (max-width:500px) and (min-width:300px){
    .deportes {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
}
}
</style>