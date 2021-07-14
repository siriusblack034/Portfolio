<template>
  <div
    class="theme-dropdown"
    :class="{ 'open-dropdown': open }"
    v-click-outside="hide"
    @click="toggle"
  >
    <div @click="open = !open">
      <Icon
        name="lang"
        :size="28"
        class="nav__lang-icon"
        style="transition: 0.2s ease-in-out; cursor: pointer"
        :style="getFillColor"
      />
    </div>
    <div class="theme-dropdown-content">
      <div class="theme-dropdown-content-wrapper">
        <div
          v-for="lang in langs"
          class="color-theme-choices"
          :class="{ active: selectedLang == lang.key }"
          :key="lang.name"
          @click="changeLang(lang)"
        >
          <span>{{ lang.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ClickOutside from "vue-click-outside";
import Icon from "./Icon/Icon.vue";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  components: {
    Icon,
  },
  computed: {
    getFillColor() {
      return this.open ? "fill: var(--primary);" : "fill: var(--lightSlate);";
    },

    ...mapState(["lang"]),
  },
  data() {
    return {
      open: false,
      selectedLang: "en",
      langs: [
        {
          key: "vi",
          name: "Tiếng Việt",
        },
        {
          key: "en",
          name: "English",
        },
      ],
    };
  },

  created() {
    let lang = this.setLang();
    document.documentElement.setAttribute("lang", lang);
    this.selectedLang = lang;
    this.$i18n.locale = lang;
  },

  mounted() {
    let lang = localStorage.getItem("lang")
      ? localStorage.getItem("lang")
      : "en";
    document.documentElement.setAttribute("lang", lang);
    this.selectedLang = lang;
    this.popupItem = this.$el;
  },
  methods: {
    ...mapActions(["setLang"]),
    ...mapMutations(["setLangMu"]),
    hide() {
      this.open = false;
    },

    toggle() {
      this.open = true;
    },
    changeLang(lang) {
      localStorage.setItem("lang", lang.key);
      this.selectedLang = lang.key;
      this.$i18n.locale = lang.key;
      document.documentElement.setAttribute("lang", lang.name);
      this.setLangMu(lang.key);
      this.hide();
    },
  },
  // do not forget this section
  directives: {
    ClickOutside,
  },
  watch: {
    lang(newVal) {
      this.selectedLang = newVal;
    },
  },
};
</script>
<style lang="scss">
.nav__lang-icon {
  fill: var(--lightSlate);
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.theme-dropdown {
  padding: 0;
  cursor: pointer;
  .color-selector {
    height: 2rem;
    width: 2rem;
    background-color: var(--primary);
    margin: 3px 20px 0px 20px;
    border-radius: 100%;
    border: 3px solid var(--primary);
    transition: 0.3s;
  }
  .theme-dropdown-content {
    position: absolute;
    min-width: 220px;
    transform: translateY(30px);
    right: 20px;
    padding: 15px 0 0 0;
    opacity: 0;
    z-index: 1;
    transition: 0.3s;
    visibility: hidden;
    .theme-dropdown-content-wrapper {
      padding: 5px 5px;
      display: flex;
      flex-direction: column;
      background-color: var(--lightBackground);
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      border-radius: 8px;
    }
  }

  .color-theme-choices {
    display: flex;
    padding: 10px;
    border-radius: 8px;
    .color-selector-pallette {
      display: flex;
      margin: 0 10px 0 0;
    }
    .color-selections {
      border-radius: 100%;
      transition: 0.2s;
    }
    &:hover,
    &.active {
      color: var(--primary);
      background-color: rgba(0, 0, 0, 0.3);
      .color-selections {
        border-radius: 0%;
      }
    }
  }
  &.open-dropdown,
  &:focus {
    .color-selector {
      border: 3px solid #fff;
    }
    .theme-dropdown-content {
      transform: translateY(0px);
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>