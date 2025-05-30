import { createRouter, createWebHistory } from 'vue-router'
import VenuPortfolio from './components/VenuPortfolio.vue'  // The component for /venu-portfolio
import LandingPage from './components/LandingPage.vue'
import About from './components/About.vue'

const routes =[
   {
  path: '/my-portfolio',
  name: 'LandingPage',
  component: LandingPage
   },
   {
    path: '/my-portfolio/venu-portfolio',
    name: 'VenuPortfolio',
    component: VenuPortfolio
  },
    {
 path: '/my-portfolio/venu-portfolio/about',
 name: 'About',
 component: About
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
    scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

export default router
