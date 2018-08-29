import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from '@/components/ComLogin.vue'
import Register from '@/components/ComRegister.vue'
import MyQuestion from '@/components/MyQuestion.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/myQuestion',
      name: 'MyQuestion',
      component: MyQuestion
    },
    
    
  ]
})
