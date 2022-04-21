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
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !store.getters.GET_AUTH_STATUS) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: '/',
      
    }
  }
  if (to.meta.guest && store.getters.GET_AUTH_STATUS) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: '/admin/home',    
    }
  }
})
export default router
