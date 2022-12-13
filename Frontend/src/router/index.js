import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/CheckInView',
      name: 'CheckInView',
      component: () => import('../views/CheckInView.vue')
    },
    {
      path: '/LoginView',
      name: 'LoginView',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/BusinessView',
      name: 'BusinessView',
      component: () => import('../views/BusinessView.vue'),
      children:[
        {
          path: '/CreateVacancyView',
          name: 'CreateVacancyView',
          component: () => import('../views/CreateVacancyView.vue')
        },
        {
          path: '/VacantHistoryView',
          name: 'VacantHistoryView',
          component: () => import('../views/VacantHistoryView.vue')
        },
        {
          path: '/TracingView',
          name: 'TracingView',
          component: () => import('../views/TracingView.vue')
        },
      ]
    },
   
    {
      path: '/MyAppsView',
      name: 'MyAppsView',
      component: () => import('../views/MyAppsView.vue')
    },
    {
      path: '/MyDataView',
      name: 'MyDataView',
      component: () => import('../views/MyDataView.vue')
    },
    
  ]
})

export default router
