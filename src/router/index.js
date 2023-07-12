import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login' // Redirect the root path to the login page
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/loginpage.vue')
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/registerpage.vue')
    },
    {
      path: '/mahasiswa',
      name: 'mahasiswa',
      component: () => import('../components/mahasiswaview.vue')
    }
  ]
})

export default router
