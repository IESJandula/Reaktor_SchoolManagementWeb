<script setup>
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navbar -->
    <nav class="p-4 shadow-lg">
      <div class="container mx-auto flex justify-between items-center">
        <img alt="Vue logo" src="./assets/jandulaLogo.png" class="h-16 w-16 md:h-24 md:w-24">
        <h1 class="text-lg md:text-2xl font-bold">Reaktor Matriculas Horarios</h1>
        <ul class="flex space-x-4">
          <li>
            <router-link to="/" class="hover:underline">Inicio</router-link>
          </li>
          <li>
            <router-link to="/ventana2" class="hover:underline">Ventana 2</router-link>
          </li>
          <li>
            <router-link to="/ventana3" class="hover:underline">Ventana 3</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Contenedor del contenido dinámico -->
    <router-view />
  </div>
</template>

<style>
</style>
