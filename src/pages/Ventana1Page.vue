<script setup>
import SeleccionCursoEtapa from '@/components/SeleccionCursoEtapa.vue';
import SubidaEnvioFichero from '@/components/SubidaEnvioFichero.vue';
import { ref } from 'vue';

const filtroSeleccionado = ref({ curso: null, etapa: '' });

const actualizarSelect = (seleccionado) => {
    filtroSeleccionado.value = seleccionado;
    console.log("Filtro actualizado:", seleccionado);
};
</script>

<template>
    <div class="flex flex-col items-center justify-center flex-grow">
        <SeleccionCursoEtapa  @actualizar-select="actualizarSelect" />
        <SubidaEnvioFichero :seleccionado="filtroSeleccionado"/>
    </div>
</template>