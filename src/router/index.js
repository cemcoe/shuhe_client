import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('@/views/Home/Home.vue')
const Following = () => import('@/views/Following/Following.vue')
const Island = () => import('@/views/Island/Island.vue')
const IslandDetail = () => import('@/views/Island/IslandDetail.vue')
const Message = () => import('@/views/Message/Message.vue')
const Profile = () => import('@/views/Profile/Profile.vue')
const Post = () => import('@/views/Post/Post.vue')
const User = () => import('@/views/User/User.vue')
const Search = () => import('@/views/Search/Search.vue')
const UserFollowing = () => import('@/views/User/UserFollowing.vue')
const UserFollower = () => import('@/views/User/UserFollower.vue')
const Login = () => import('@/views/Login/Login.vue')
const Editor = () => import('@/views/Editor/Editor.vue')
const Writer = () => import('@/views/Writer/Writer.vue')

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      showFooter: true,
      title: "首页 - 书核"
    },
  },
  {
    path: '/following',
    name: 'Following',
    component: Following,
    meta: {
      showFooter: true,
      requireAuth: true,
      title: "关注页 - 书核"
    },
  },
  {
    path: '/island',
    name: 'Island',
    component: Island,
    meta: {
      showFooter: true,
      requireAuth: true,
      title: "小岛页 - 书核"
    },
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    meta: {
      title: "搜索页 - 书核"
    },
  },
  {
    path: '/island/:islandId',
    name: 'IslandDetail',
    component: IslandDetail,
    meta: {
      requireAuth: true,
      title: "小岛详情页 - 书核"
    }
  },
  {
    path: '/message',
    name: 'Message',
    component: Message,
    meta: {
      showFooter: true,
      requireAuth: true,
      title: "消息页 - 书核"
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      showFooter: true,
      title: "个人页 - 书核"
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    title: "登录 - 书核"
  },
  {
    path: '/editor',
    name: 'Editor',
    component: Editor,
    meta: {
      requireAuth: true,
      title: "编辑 - 书核"
    }
  },
  {
    path: '/writer/:pid',
    name: 'Writer',
    component: Writer,
    meta: {
      requireAuth: true,
    }
  },
  {
    path: '/p/:pid',
    name: 'Post',
    component: Post,
    meta: {
      requireAuth: true,
      title: "文章详情页 - 书核",
    }
  },
  {
    path: '/u/:uid',
    name: 'User',
    component: User,
    meta: {
      requireAuth: true,
      title: "用户详情页 - 书核"
    }
  },
  {
    path: '/u/:uid/following',
    name: 'UserFollowing',
    component: UserFollowing,
    meta: {
      requireAuth: true,
    }
  },
  {
    path: '/u/:uid/follower',
    name: 'UserFollower',
    component: UserFollower,
    meta: {
      requireAuth: true,
    }
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

const defaultTitle = '书核'
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : defaultTitle
  next()
})


export default router
