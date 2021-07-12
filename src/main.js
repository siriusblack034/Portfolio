import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/base.scss'
import { store } from './store.js'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

new Vue({
  created() {
    AOS.init()
  },
  store,
  router,
  render: h => h(App)
}).$mount('#app')
