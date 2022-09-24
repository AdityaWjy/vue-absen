import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import AbsenView from '../components/AbsenView.vue'
import DetailAbsen from '../components/DetailAbsen.vue'
import FormAbsen from '../components/FormAbsen.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView
  },
  {
  path: '/dashboard',
  name: 'dashboard',
  component: AbsenView
  },
  
  {
    path: '/detail',
    name: 'detail',
    component: DetailAbsen
  },

  {
    path: '/form',
    name: 'form',
    component: FormAbsen
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
