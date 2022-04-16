import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/pages/HomeView.vue'
import LoginView from '@/views/auth/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/admin/home',
    name: 'HomeView',
    component: HomeView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
