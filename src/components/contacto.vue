<template>
  <div class="q-pa-md">
    <h1>Contacto</h1>
    <p>
      Para cualquier consulta o solicitud, puedes contactarnos a través de los siguientes medios:
    </p>
    <div>
      <h3>Dirección</h3>
      <p>Av. Principal 123, Ciudad Paraíso, País</p>

      <h3>Teléfonos</h3>
      <p>+123 456 7890</p>
      <p>+098 765 4321</p>

      <h3>Correo Electrónico</h3>
      <p>contacto@hotelparaiso.com</p>

      <h3>Horarios de Atención</h3>
      <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
      <p>Sábados: 10:00 AM - 4:00 PM</p>
      <p>Domingos: Cerrado</p>
    </div>

    <h2>Ubicación</h2>
    <div id="map" style="height: 400px;"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

onMounted(() => {
  const map = L.map('map').setView([51.505, -0.09], 13)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    lang: 'es'
  }).addTo(map)

  L.marker([51.505, -0.09]).addTo(map)
    .bindPopup('Hotel Paraíso')
    .openPopup()
})
</script>

<style>


#map {
  width: 100%;
  height: 400px;
}
</style>