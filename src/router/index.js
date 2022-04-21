import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import HomeView from '@/views/pages/HomeView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import ForgetView from '@/views/auth/password/ForgetView.vue'

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: LoginView,
    meta:{
      guest:true
    }
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView,
    meta:{
      guest:true
    }
  },
  {
    path: '/forget/pass',
    name: 'ForgetView',
    component: ForgetView,
    meta:{
      guest:true
    }
  },
  {
    path: '/admin/home',
    name: 'HomeView',
    component: HomeView,
    meta:{
      requiresAuth:true
    }
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {

  if (to.meta.requiresAuth && !store.getters.GET_AUTH_STATUS) {
    return {
      path: '/',    
    }
  }

  else if (to.meta.guest && store.getters.GET_AUTH_STATUS) {

    return {
      path: '/admin/home',    
    }
  }

})

export default router
