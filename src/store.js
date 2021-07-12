import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)
export const store = new vuex.Store({
  state: {
    show: false,
    navShow: false,
  },
  mutations: {
    setNav(state, isShow) {
      console.log(isShow);
      state.navShow = isShow
    }
  }
})