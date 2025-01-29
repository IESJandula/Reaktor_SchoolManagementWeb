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
