import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { CemButton, CemIcon, CemNavBar } from 'cem-ui'
import './assets/css/reset.css'

const app = createApp(App)
app.use(CemButton).use(CemIcon).use(CemNavBar)

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    console.log('此页面需要登录才能访问')
    // 登录成功，放行
    if (store.state.user) {
      // vuex 中有用户信息
      next()	//放行
    } else {
      // 跳转到登录界面
      next({ path: "/login" })
    }
  }
  else next()
})

app.use(store).use(router).mount('#app')
