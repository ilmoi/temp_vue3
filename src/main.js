import { createRouter } from "vue-router"
import { createApp } from "vue"
import routes from "./routes.js"
import App from './App.vue'

const app = createApp(App)
const router = createRouter({
  routes
})
app.use(router)
app.mount("#app")