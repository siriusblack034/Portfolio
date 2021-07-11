import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/base.scss'
import ScrollAnimation, { animationViewFull } from './directives/scrollAnimation'
import { store } from './store'
import vuetify from './plugins/vuetify'

Vue.directive('scrollanimation', ScrollAnimation)
Vue.directive('scrollview', animationViewFull)
Vue.directive('click-outside', {
  beforeMount(el, binding) {
    
    el.clickOutsideEvent = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  }
})

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')

