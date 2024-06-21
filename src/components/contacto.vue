<template>
  <div class="q-pa-md">
    <fieldset id="contacto">
      <legend>
        <h1 id="tltContacto">Contacto</h1>
      </legend>
      <h5 id="relleno">
        Para cualquier consulta o solicitud, puedes contactarnos a través de los siguientes medios:
      </h5>
      <div>
        <h3 id="contexto">Dirección</h3>
        <h5 id="relleno">Av. Principal 123, Dubái, Emiratos Árabes Unidos</h5>

        <h3 id="contexto">Teléfonos</h3>
        <h5 id="relleno">+123 456 7890</h5>
        <h5 id="relleno">+098 765 4321</h5>

        <h3 id="contexto">Correo Electrónico</h3>
        <h5 id="relleno">contacto@hotelparaiso.com</h5>

        <h3 id="contexto">Horarios de Atención</h3>
        <h5 id="relleno">Lunes a Viernes: 9:00 AM - 6:00 PM</h5>
        <h5 id="relleno">Sábados: 10:00 AM - 4:00 PM</h5>
      </div>


      <h3 id="contexto">Ubicación</h3><br>
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
#contexto {
  text-decoration: underline;
}

#map {
  width: 100%;
  height: 400px;
}



@media screen and (max-width:600px) and (min-width:300px) {
  #tltContacto{
    font-size: 450%;
  }
  #contexto{
    font-size: 250%;
  }
  #relleno{
    font-size: 150%;
  }
}
</style>