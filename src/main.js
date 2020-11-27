import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/reset.css'
import './assets/css/basic.styl'
import './assets/icon/iconfont.css'

const app = createApp(App)
app.use(router)
app.mount('#app');
