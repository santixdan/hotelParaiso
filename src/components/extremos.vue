<template>
    <div class="q-pa-md">
        <div class="introduccion">
            <h1>DEPORTES EXTREMOS</h1>
            <p>
                En Hotel Paraíso, ofrecemos una variedad de deportes extremos para aquellos que buscan emociones y
                aventura. <br>
                Explora nuestras actividades y prepárate para una experiencia inolvidable.
            </p>
        </div>
        <div id="activity" v-for="activity in activities" :key="activity.id">
            <q-card class="my-card">
                <q-card-section horizontal>
                    <q-card-section>
                        <h2>{{ activity.name }}</h2>
                        <p><strong>Descripción:</strong> {{ activity.description }}</p>
                        <p><strong>Nivel de dificultad:</strong> {{ activity.difficulty }}</p>
                        <p><strong>Requisitos:</strong> {{ activity.requirements }}</p>
                        <p v-if="activity.price"><strong>Precio:</strong> {{ activity.price }}</p>
                    </q-card-section>

                    <iframe src="https://www.youtube.com/embed/FAWUYDmVVQU?si=fNWFUEK-h04Y5HyZ"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const activities = ref([
    {
        id: 1,
        name: 'Parapente',
        description: 'Disfruta de vistas panorámicas mientras vuelas sobre impresionantes paisajes.',
        difficulty: 'Moderado',
        requirements: 'Edad mínima: 16 años, peso máximo: 100 kg',
        price: '$150 por persona',
        video: 'https://youtu.be/XfvTvsz5J5U?si=bf8oUkPoH7mB5QP9'
    },
    {
        id: 2,
        name: 'Rafting',
        description: 'Desciende por rápidos emocionantes en uno de nuestros ríos cercanos.',
        difficulty: 'Alto',
        requirements: 'Saber nadar, buena condición física',
        price: '$120 por persona',
        video: 'https://youtu.be/8usoVRLo2Dk?si=U4kbUqftxtzQL2Ap'
    },
    {
        id: 3,
        name: 'Escalada en Roca',
        description: 'Desafía tus límites escalando las formaciones rocosas naturales de la zona.',
        difficulty: 'Difícil',
        requirements: 'Edad mínima: 18 años, experiencia previa en escalada',
        price: '$100 por persona',
        video: 'https://www.youtube.com/embed/FAWUYDmVVQU?si=fNWFUEK-h04Y5HyZ'
    }
])
</script>

<style>
#activity {
    margin-bottom: 2em;
    display: flex;
    justify-content: center;
}

.introduccion{
    display: flex;
    flex-direction: column;
    text-align: center;
}

.my-card {
    width: 80%;
    display: flex;
    justify-content: center;
    /* max-width: 350px; */

}
</style>