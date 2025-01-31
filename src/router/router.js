// Importaciones necesarias desde Vue Router
import { createRouter, createWebHistory } from 'vue-router';

// Importación de los componentes que se utilizarán como páginas
import HomePage from '@/pages/HomePage.vue'; // Página principal de la aplicación
import CargaDatos from '@/pages/CargaDatos.vue'; // Página para la ruta '/ventana3'

// Definición de las rutas
const routes = [
  {
    path: '/', // Ruta raíz (inicio de la aplicación)
    name: 'Home', // Nombre único de la ruta
    component: HomePage, // Componente que se mostrará al acceder a esta ruta
  },
  {
    path: '/carga-datos', // Ruta para la página "Carga datos"
    name: 'CargaDatos', // Nombre único de la ruta
    component: CargaDatos, // Componente que se mostrará en esta ruta
  }
];

// Creación de la instancia de Vue Router
const router = createRouter({
  // Configuración del historial de navegación
  history: createWebHistory(), // Usa el modo de historial HTML5 para URLs limpias
  routes, // Asigna las rutas definidas anteriormente
});

// Exportación del router para que pueda ser utilizado en `main.js`

// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Ventana2Page from '@/pages/Ventana2Page.vue';
import Ventana1Page from '@/pages/Ventana1Page.vue';
import Ventana3Page from '@/pages/Ventana3Page.vue';

const routes = [
  {
    path: '/', // Ruta raíz
    name: 'Ventana1',
    component: Ventana1Page, // Componente que se mostrará en esta ruta
  },
  {
    path: '/ventana2', // Asegúrate de que tenga el `/` inicial
    name: 'Ventana2',
    component: Ventana2Page,
  },
  {
    path: '/ventana3', // Asegúrate de que tenga el `/` inicial
    name: 'Ventana3',
    component: Ventana3Page,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
