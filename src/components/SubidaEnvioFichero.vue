<script setup>
import {  ref,toRefs, defineProps  } from 'vue';
import axios from 'axios';

const props = defineProps({
  seleccionado: {
    type: Object,
    required: true
  }
});

const { seleccionado } = toRefs(props);

  // Ref para el input de archivo
  const fileInputUsers = ref(null);

const subirFichero = async () => {
    try {
        const file = fileInputUsers.value.files[0];
        
        const formData = new FormData();
        formData.append('csv', file);

        const response = await axios.post('http://localhost:8081/direccion/cargarMatriculas', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'curso': parseInt(seleccionado.value.curso,10),
                'etapa': seleccionado.value.etapa
            }
        });
        console.log("Fichero Cargado:", response.data);
    } catch (error) {
        console.error('Error al cargar matriculas', error);
    }
};

</script>

<template>
    <div>
      <p class="mb-4">Subir fichero</p>
      <form @submit.prevent="subirFichero">
        <input type="file" ref="fileInputUsers" />
        <br>
        <button type="submit">Enviar</button>
      </form>
    </div>
  </template>

<style>

</style>
