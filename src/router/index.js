import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectView from '../views/ProjectView.vue'
import ProjectOne from '../views/ProjectOne.vue'
import ProjectTwo from '../views/ProjectTwo.vue'
import ProjectThree from '../views/ProjectThree.vue'
import ProjectFour from '../views/ProjectFour.vue'
import Projectnew from '@/views/ProjectNew.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    {
      path: '/projects/2',
      name: 'Project Two',
      component: ProjectTwo
    },
    {
      path: '/projects/3',
      name: 'Project Three',
      component: ProjectThree
    },
    {
      path: '/projects/4',
      name: 'Project Four',
      component: ProjectFour
    },
    {
      path: '/projects/new',
      name: 'Project New',
      component: Projectnew
    },
  ]
})

export default router
