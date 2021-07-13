import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/base.scss'
import { store } from './store.js'
import AOS from 'aos'
import 'aos/dist/aos.css'
import i18n from './i18n'

new Vue({
  created() {
    AOS.init()
  },

  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
