import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectView from '../views/ProjectView.vue'
import ProjectOne from '../views/ProjectOne.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
      
    },

    {
      path: '/projects',
      name: 'Project',
      component: ProjectView
    },
    {
      path: '/projects/1',
      name: 'Project One',
      component: ProjectOne
    },
  ]
})

export default router
