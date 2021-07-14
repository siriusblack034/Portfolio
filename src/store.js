import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)
export const store = new vuex.Store({
  state: {
    show: false,
    navShow: false,
    lang: "en",
    theme: "Green Light"
  },
  mutations: {
    setNav(state, isShow) {
      console.log(isShow);
      state.navShow = isShow
    },
    setLangMu(state, lang) {
      state.lang = lang;
    },
    setThemeMu(state, theme) {
      state.theme = theme
    }
  },
  actions: {
    setLang({ commit }) {
      let lang = localStorage.getItem("lang")
        ? localStorage.getItem("lang")
        : "en";
      commit('setLang', lang);
    },
    setTheme({ commit }) {
      let theme = localStorage.getItem("theme")
        ? localStorage.getItem("theme")
        : "Green Light";
      commit('setThemeMu', theme)
    }
  }
})