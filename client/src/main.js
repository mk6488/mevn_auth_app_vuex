import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

const app = createApp(App)

// Setting up default vue's http modules for api calls
app.config.globalProperties.$http = axios
const token = localStorage.getItem("token")
// If there is a token then we will simply append default axios authorization headers
if (token) {
  app.config.globalProperties.defaults.headers.common['Authorization'] = token
}

app.use(router)
app.use(store)
app.mount('#app')