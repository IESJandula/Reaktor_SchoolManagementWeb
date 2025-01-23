<script setup>
import FilterCursoEtapa from './components/FilterCursoEtapa.vue';
import { ref } from 'vue';
import TablaAsignaturas from './components/TablaAsignaturas.vue';

const filtroSeleccionado = ref({ curso: null, etapa: '' });

const actualizarSelect = (seleccionado) => {
    filtroSeleccionado.value = seleccionado;
    console.log("Filtro actualizado:", seleccionado);
};
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-row justify-between items-center w-full px-4 py-2">
      <img alt="Vue logo" src="./assets/jandulaLogo.png" class="h-16 w-16 md:h-24 md:w-24">
      <h1 class="text-2xl md:text-4xl">Reaktor Matriculas Horarios</h1>
    </div>
    <FilterCursoEtapa @actualizar-select="actualizarSelect" />
    <TablaAsignaturas :curso="filtroSeleccionado.curso" :etapa="filtroSeleccionado.etapa" />
  </div>
</template>

<style>

</style>
