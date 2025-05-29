import { createRouter, createWebHistory } from 'vue-router'
import VenuPortfolio from '../components/VenuPortfolio.vue'  // The component for /venu-portfolio

const routes = [
  {
    path: '/venu-portfolio',
    name: 'VenuPortfolio',
    component: VenuPortfolio
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
