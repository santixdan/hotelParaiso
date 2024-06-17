<template>
  <div>
    <q-layout view="hhh lpR fff">

      <q-header elevated height-hint="98" class="a">
        <q-toolbar>
          <q-toolbar-title id="title">
            <img src="./imagenes/icono1.png" alt="iconoParaiso" id="imgIcono">
            <h1 id="h1Titulo">HOTEL PARAÍSO</h1>
          </q-toolbar-title>
        </q-toolbar>

        <q-tabs align="left" class="tabs">
          <q-route-tab to="/" label="Inicio" />
          <q-route-tab to="/habitaciones" label="Habitaciones" />
          <q-route-tab to="/extremos" label="Deportes Extremos" />
          <q-route-tab to="/contacto" label="Contacto" />
        </q-tabs>
      </q-header>

      <q-page-container>
        <router-view />
      </q-page-container>

      <q-footer bordered class="a">
        <q-toolbar>
          <q-toolbar-title id="title">
            <a href="https://www.instagram.com/santixdan?igsh=MXNwM3FwNDN6anNjdQ=="><img src="./imagenes/icono1.png" alt="iconoParaiso" id="imgIcono"></a>
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>

    </q-layout>

  </div>
</template>
<script setup>
import { ref } from "vue";

</script>
<style>
@font-face {
  font-family: fuenteTitulo;
  src: url("./fuentes/go3v2.ttf");
}

* {
  margin: 0%;
}

.a {
  background-color: black;
}

#h1Titulo {
  font-family: fuenteTitulo;
  color: greenyellow;
  font-size: 40px;
}

#title {
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
}

#imgIcono {
  width: 80px;
}

.tabs {
  color: greenyellow;
  /* font-style: oblique; */
  /* font-style: italic; */
  font-weight: bolder !important;
  /* font-family: 'Times New Roman', Times, serif; */
}
</style>