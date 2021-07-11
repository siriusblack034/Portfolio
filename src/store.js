import vuex from 'vuex'
import vue from 'vue'
vue.use(vuex)

export const store = new vuex.Store({
  state: {
    show: false,
    navShow: false
  }
})