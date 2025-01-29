<script>
import axios from 'axios';

/**
 * Autor: David Jason Gianmoena.
 * 
 * Este componente renderiza una lista de alumnos y muestra un checkbox para cada alumno. 
 * Los alumnos se reciben a través de la propiedad 'alumnos'. A través de la propiedad 'grupoSeleccionado', 
 * se gestiona el estado del checkbox para cada alumno. Al marcar el checkbox, el grupo del alumno se asigna 
 * o se elimina según el estado del checkbox.
 * 
 * Funcionalidad:
 * - Escucha cambios en la propiedad 'grupoSeleccionado' y actualiza el estado del grupo en los alumnos.
 * - Permite marcar o desmarcar un grupo a cada alumno individualmente.
 * - Al enviar los datos con el boton, se llama al backend con los datos actualizados.
 */

export default {
  props: {
    // Lista de alumnos recibida desde el componente padre
    alumnos: {
      type: Array,
      required: true
    },
    // El grupo seleccionado que determina qué checkbox está marcado
    grupoSeleccionado: {
      type: String,
      required: true
    },
    curso: {
      type: String,
      required: true
    },
    etapa: {
      type: String,
      required: true
    }
  },

  methods: {

    /**
     * Función que se ejecuta cuando el estado del checkbox de un alumno cambia.
     * Asigna o limpia el grupo del alumno dependiendo del estado del checkbox.
     * 
     * @param {number} indiceParametro - El índice del alumno en la lista.
     */
    actualizaEstadoGrupoAlumno(indiceParametro) {
      // Verifica si el índice proporcionado corresponde a un alumno válido
      if (this.alumnos[indiceParametro]) {
        let alumno = this.alumnos[indiceParametro];
        
        // Imprime en consola el alumno al que se le está cambiando el grupo
        console.log("Alumno activado: " + alumno.nombre + " " + alumno.apellidos + " - Grupo actual: " + alumno.grupo);

        // Si el grupo del alumno no coincide con el grupo seleccionado, se asigna el grupo seleccionado
        if (alumno.grupo !== this.grupoSeleccionado) {
          alumno.grupo = this.grupoSeleccionado; // Asigna el grupo seleccionado
        } else {
          alumno.grupo = ''; // Limpia el grupo si el checkbox es desmarcado
        }
        
        // Imprime en consola el cambio realizado en el grupo del alumno
        console.log("Cambio en el grupo del alumno: " + alumno.grupo);
      }
    },

    /**
     * Función para enviar los datos de la lista de alumnos actualizada al backend.
     * CONTROLAR <-----------------------------------------------------------------------------------------------------------------------------
     *      * CONTROLAR <-----------------------------------------------------------------------------------------------------------------------------
     *      * CONTROLAR <-----------------------------------------------------------------------------------------------------------------------------
     *      * CONTROLAR <-----------------------------------------------------------------------------------------------------------------------------
     *      * CONTROLAR <-----------------------------------------------------------------------------------------------------------------------------
     *      * CONTROLAR <-----------------------------------------------------------------------------------------------------------------------------
     */
    async enviarDatos () {
        console.log('Datos enviados:', this.alumnos);

        try {
            // Define los headers con los valores del curso, etapa y grupo
            const headers = {
                'curso': this.curso,    // Valor del curso
                'etapa': this.etapa,    // Valor de la etapa
                'grupo': this.grupoSeleccionado // Valor del grupo seleccionado
            };

            const data = this.alumnos;  // Asegúrate de que `alumnos` sea una lista o datos válidos

            // Realiza la petición POST, enviando los headers y el listado de alumnos
            const response = await axios.post('http://localhost:8081/direccion/grupos/alumnos', data, { headers });

            // Si la solicitud es exitosa, se imprime la respuesta
            console.log('Respuesta del servidor:', response.data);

        } catch (error) {
            // Maneja errores en caso de que la solicitud falle
            console.error('Error al crear grupo:', error);
        }
    }


  } //metodo

}; // export


</script>

<template>
  <!-- Lista de alumnos con desplazamiento vertical habilitado si es necesario -->
  <ul class="p-3 m-3 border border-gray-300 overflow-auto max-h-60">

    <!-- Si la lista de alumnos está vacía, muestra un mensaje indicativo -->
    <li v-if="alumnos.length === 0">Cargue un listado de alumnos.</li>
    
    <!-- Itera sobre los alumnos y genera un <li> para cada uno -->
    <li v-for="(alumno, index) in alumnos" :key="index" class="p-2 m-1 border border-gray-300 rounded-md">
      
      <!-- Checkbox para seleccionar el grupo de un alumno. 
           Se marca si el grupo del alumno coincide con el grupo seleccionado -->
      <input 
        type="checkbox" 
        :checked="alumno.grupo === grupoSeleccionado" 
        @change="actualizaEstadoGrupoAlumno(index)"  
      />
      
      <!-- Muestra el nombre y los apellidos del alumno -->
      {{ alumno.nombre }} 
      {{ alumno.apellidos }}
    </li>
  </ul>

  <!-- Botón para enviar los datos actualizados de la lista de alumnos -->
  <button @click="enviarDatos" class="p-2 border border-gray-300 rounded-md bg-blue-500 text-white" style="margin-top: 20px;">
    Enviar datos.
  </button>
</template>

<style scoped>

ul {
  max-height: 300px; /* Tamaño contenedor lista */
  overflow-y: auto; /* Habilita el scroll cuando lista larga */
}
</style>
