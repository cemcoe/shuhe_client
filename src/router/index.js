import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('@/views/Home.vue') 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
