import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('@/views/Home/Home.vue')
const Following = () => import('@/views/Following/Following.vue')
const Island = () => import('@/views/Island/Island.vue')
const Message = () => import('@/views/Message/Message.vue')
const Profile = () => import('@/views/Profile/Profile.vue')
const Post = () => import('@/views/Post/Post.vue')
const User = () => import('@/views/User/User.vue')
const Login = () => import('@/views/Login/Login.vue')
const Editor = () => import('@/views/Editor/Editor.vue')

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
    path: '/editor',
    name: 'Editor',
    component: Editor
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
