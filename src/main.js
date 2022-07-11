import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vueAxios from 'vue-axios'
// require("dotenv").config({ path: "../ids.env" });

axios.defaults.baseURL = process.env.VUE_APP_ROOT_API
axios.defaults.headers = {
  'Accept': 'application/json',
  'content-type': 'application/json'
}

createApp(App).use(store).use(router).use(vueAxios, axios).mount('#app')
