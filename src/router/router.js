// Importaciones necesarias desde Vue Router
import { createRouter, createWebHistory } from 'vue-router';

// Importación de los componentes que se utilizarán como páginas
import Ventana2Page from '@/pages/Ventana2Page.vue'; // Página para la ruta '/ventana2'
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
    path: '/ventana2', // Ruta para la página "Ventana 2"
    name: 'Ventana2', // Nombre único de la ruta
    component: Ventana2Page, // Componente que se mostrará en esta ruta
  },
  {
    path: '/ventana3', // Ruta para la página "Ventana 3"
    name: 'Ventana3', // Nombre único de la ruta
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
export default router;
