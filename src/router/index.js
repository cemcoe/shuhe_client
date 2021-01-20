import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('@/views/Home.vue')
const Following = () => import('@/views/Following.vue')
const Island = () => import('@/views/Island.vue')
const Message = () => import('@/views/Message.vue')
const Profile = () => import('@/views/Profile.vue')
const Post = () => import('@/views/Post.vue')
const User = () => import('@/views/User.vue')
const Login = () => import('@/views/Login.vue')

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/following',
    name: 'Following',
    component: Following
  },
  {
    path: '/island',
    name: 'Island',
    component: Island
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/p/:pid',
    name: 'Post',
    component: Post
  },
  {
    path: '/u/:uid',
    name: 'User',
    component: User
  },
  {
    path: '/',
    redirect: '/home',
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
