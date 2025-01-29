<script setup>
import FilterCursoEtapa from '../components/FilterCursoEtapa.vue'; // Componente para seleccionar curso y etapa
import { ref } from 'vue'; // Composables de Vue para trabajar con datos reactivos
import axios from 'axios';
import ComboGrupos from '../components/ComboGrupos.vue';
import ListViewAlumnos from '../components/ListViewAlumnos.vue';

// Variable reactiva que almacena el filtro seleccionado (curso y etapa)
const filtroSeleccionado = ref({ curso: null, etapa: '' });

// Declara la variable reactiva con un valor inicial
const grupoSeleccionado = ref('');

var listadoAlumnos = ref([])

// Define la variable que almacenará el mensaje de éxito
const resultadoGrupos = ref('');  // Usamos ref para que sea reactivo

// Función que se ejecuta al actualizar el filtro en el componente FilterCursoEtapa
const actualizarSelect = (parametro) => {
    // Actualiza la variable reactiva con el nuevo valor del filtro
    filtroSeleccionado.value = parametro;
    // Muestra el filtro actualizado en la consola para depuración
    console.log("Filtro actualizado:", filtroSeleccionado.value);

    resultadoGrupos.value="";

    obtenerGrupos(filtroSeleccionado.value.curso, filtroSeleccionado.value.etapa);
};

const actualizarGrupo = (parametro) => {
    grupoSeleccionado.value = parametro;
    console.log("Filtro grupos actualizado:", grupoSeleccionado.value);

    // reinicia la lista de alumnos recuperada anteriormente.
    listadoAlumnos.value=[];
};



// Función asíncrona para cargar los datos de cursos y etapas desde el servidor
const crearNuevoGrupo = async (curso, etapa) => {
    try {
        // Convierte el curso a un número entero si no es ya un número
        const cursoInt = parseInt(curso);

        // Define los headers con los valores del curso y etapa
        const headers = {
            'curso': cursoInt,    // Valor del curso
            'etapa': etapa        // Valor de la etapa
        };

        // Realiza la petición POST, enviando los headers correctamente
        const response = await axios.post('http://localhost:8081/direccion/grupos', null, { headers });

        // Si la solicitud es exitosa, se imprime la respuesta
        console.log('Respuesta del servidor:', response.data);

        // Verificamos si la respuesta es exitosa
        if (response.status === 200) {
            // Asignamos el mensaje de éxito
            resultadoGrupos.value = "GRUPO CREADO CON ÉXITO";

            // actualiza el listado actual.
            obtenerGrupos(cursoInt, etapa);

            // falta mecanismo para actualizar el grupo seleccionado.
            actualizarGrupo();

        } else {
            // Si la respuesta no es 200, mostramos otro mensaje
            resultadoGrupos.value = "Hubo un problema al crear el grupo.";
        }
    } catch (error) {
        // Maneja errores en caso de que la solicitud falle
        console.error('Error al crear grupo:', error);
    }
};


const grupos = ref([]);

// Función asíncrona para cargar los datos de cursos y etapas desde el servidor
const obtenerGrupos = async ( curso, etapa ) => {
    try {
        if ( curso != null && etapa != '' ){

            console.log("PARAMETROS RECIBIDOS : " + curso + " - " + etapa);

                    // Define los valores que quieres pasar en los headers
        const headers = {
            'curso': parseInt(curso),    // Valor del curso
            'etapa': etapa     // Valor de la etapa
        };

        console.log("VALORES HEADERS: " + curso + " - " + etapa);

        // Realiza una petición HTTP GET para obtener los grupos
        console.log("ANTES DE PETICION A GRUOPS");
        const response = await axios.get('http://localhost:8081/direccion/grupos', {
            headers: headers
        });

        // Asigna los datos obtenidos a la variable reactiva
        console.log("ANTES DE ASIGNACION");
        grupos.value = response.data;
        console.log("DESPUES DE ASIGNACION -> " + response.data);

        // inicialirzar combo grupos
        

        }

    } catch (error) {
        // Maneja errores en caso de que la solicitud falle
        console.error('Error al cargar grupos', error);
    }
};

/*
 * Funcion para alimentar el combobox de 
 */
const obtenerAlumnos = async ( cursoP, etapa, grupo ) => {
    try {

        const curso = parseInt(cursoP);
        
        if ( curso != null && etapa != '' && grupo != '' ){

            console.log("PARAMETROS RECIBIDOS : " + curso + " - " + etapa + " - " + grupo);

                    // Define los valores que quieres pasar en los headers
        const params = {
            curso: curso,
            etapa: etapa,
            grupo: grupo
        };

        // Realiza una petición HTTP GET para obtener los grupos
        console.log("ANTES DE PETICION A ALUMNOS");
        const response = await axios.get('http://localhost:8081/direccion/grupos/alumnos', {
            params: params
        });

        // Asigna los datos obtenidos a la variable reactiva
        console.log("DESPUES DE PETICION");
        console.log(response.data);
        listadoAlumnos.value = response.data;
        }

    } catch (error) {
        // Maneja errores en caso de que la solicitud falle
        console.error('Error al cargar alumnos', error);
    }
};

</script>


<template>
  <div class="flex flex-col items-center justify-center flex-grow">
    <h1 class="text-4xl font-bold" style="margin-bottom: 50px">CARGA DATOS</h1>

    <!-- Escucha al evento personalizado llamado "actualizar-select" -->
    <FilterCursoEtapa @actualizar-select="actualizarSelect"/>
    
    <h1> {{ resultadoGrupos }} </h1>
    
    <button @click="crearNuevoGrupo(filtroSeleccionado.curso, filtroSeleccionado.etapa)" class="p-2 border border-gray-300 rounded-md bg-blue-500 text-white" style="margin-top: 20px;" > Crea grupo.</button>
    
    <ComboGrupos @actualizar-grupos="actualizarGrupo" :grupos="grupos" style="margin-top:20px"/>
    
    <button  @click="obtenerAlumnos( filtroSeleccionado.curso, filtroSeleccionado.etapa, grupoSeleccionado )" class="p-2 border border-gray-300 rounded-md bg-blue-500 text-white" style="margin-top: 20px;" > Cargar alumnos.</button>

    <!-- Recibe listado de alumnos y parametros necesarios para hacer la llamada al backend-->
    <ListViewAlumnos :alumnos="listadoAlumnos" :grupoSeleccionado="grupoSeleccionado" :etapa="filtroSeleccionado.etapa" :curso="filtroSeleccionado.curso"/>

  </div>
</template>

<style>
</style>
