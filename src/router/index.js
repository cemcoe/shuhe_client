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
const Writer = () => import('@/views/Writer/Writer.vue')

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      showFooter: true
    },
  },
  {
    path: '/following',
    name: 'Following',
    component: Following,
    meta: {
      showFooter: true
    },
  },
  {
    path: '/island',
    name: 'Island',
    component: Island,
    meta: {
      showFooter: true
    },
  },
  {
    path: '/message',
    name: 'Message',
    component: Message,
    meta: {
      showFooter: true
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      showFooter: true
    },
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
    path: '/writer/:pid',
    name: 'Writer',
    component: Writer
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
