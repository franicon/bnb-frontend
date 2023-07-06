import { createRouter, createWebHistory } from 'vue-router';

import MainRoutes from '@/router/MainRoute';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [MainRoutes]
})

export default router
