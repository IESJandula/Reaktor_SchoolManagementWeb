// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Ventana2Page from '@/pages/Ventana2Page.vue';
import HomePage from '@/pages/HomePage.vue';

const routes = [
  {
    path: '/', // Ruta raíz
    name: 'Home',
    component: HomePage, // Componente que se mostrará en esta ruta
  },
  {
    path: '/ventana2', // Asegúrate de que tenga el `/` inicial
    name: 'Ventana2',
    component: Ventana2Page,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
