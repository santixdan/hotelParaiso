<template>
  <div class="q-pa-md">
    <fieldset>
      <legend>
        <h1>Contacto</h1>
      </legend>
      <h5>
        Para cualquier consulta o solicitud, puedes contactarnos a través de los siguientes medios:
      </h5>
      <div>
        <h3>Dirección</h3>
        <h5>Av. Principal 123, Dubái, Emiratos Árabes Unidos</h5>

        <h3>Teléfonos</h3>
        <h5>+123 456 7890</h5>
        <h5>+098 765 4321</h5>

        <h3>Correo Electrónico</h3>
        <h5>contacto@hotelparaiso.com</h5>

        <h3>Horarios de Atención</h3>
        <h5>Lunes a Viernes: 9:00 AM - 6:00 PM</h5>
        <h5>Sábados: 10:00 AM - 4:00 PM</h5>
      </div>


      <h2>Ubicación</h2><br>
      <div id="map" style="height: 400px;"></div>
    </fieldset>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

onMounted(() => {
  const map = L.map('map').setView([25.197222222222, 55.274166666667], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    lang: 'es'
  }).addTo(map);

  L.marker([25.197222222222, 55.274166666667]).addTo(map).bindPopup('Hotel Paraíso').openPopup();
});
</script>

<style>
h3 {
  text-decoration: underline;
}

#map {
  width: 100%;
  height: 400px;
}
</style>