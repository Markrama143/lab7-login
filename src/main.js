import { createApp } from 'vue'
import App from './App.vue'
import axiosInstance from './api/interceptor'

const app = createApp(App)

// Make axios globally available
app.config.globalProperties.$http = axiosInstance
app.config.globalProperties.$axios = axiosInstance

app.mount('#app')
