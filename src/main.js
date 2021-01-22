import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { CemButton, CemIcon } from 'cem-ui'

const app = createApp(App)
app.use(CemButton).use(CemIcon)

app.use(store).use(router).mount('#app')
