<template>
  <div
    class="theme-dropdown"
    :class="{ 'open-dropdown': open }"
    v-click-outside="hide"
    @click="toggle"
  >
    <div class="color-selector" @click="open = !open"></div>
    <div class="theme-dropdown-content">
      <div class="theme-dropdown-content-wrapper">
        <div
          v-for="theme in themes"
          class="color-theme-choices"
          :class="{ active: selectedTheme == theme.name }"
          :key="theme.name"
          @click="changeTheme(theme)"
        >
          <div class="color-selector-pallette">
            <div
              class="color-selections"
              :style="`padding: 10px; background-color: ${theme.color1};`"
            ></div>
            <div
              class="color-selections"
              :style="`padding: 10px; background-color: ${theme.color2};`"
            ></div>
            <div
              class="color-selections"
              :style="`padding: 10px; background-color: ${theme.color3};`"
            ></div>
          </div>
          <span>{{ getThemeName(theme.key) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ClickOutside from "vue-click-outside";
export default {
  data() {
    return {
      open: false,
      selectedTheme: "Green Light",
      themes: [
        {
          key: "green-light",
          name: "Green Light",
          color1: "#64ffda",
          color2: "#349780",
          color3: "#0a192f",
        },
        {
          key: "yellow-orange",
          name: "Yellow Orange",
          color1: "#f0a500",
          color2: "#e45826",
          color3: "#222222",
        },

        {
          key: "night-burns",
          name: "Night Burns",
          color1: "#fc595f",
          color2: "#d2494e",
          color3: "#151515",
        },
        {
          key: "light-burns",
          name: "Light Burn",
          color1: "#b8005c",
          color2: "#dcdcdc",
          color3: "#2b2b2b",
        },
      ],
    };
  },
  created() {
    let theme = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "Green Light";
    document.documentElement.setAttribute("theme", theme);
    this.selectedTheme = theme;
  },

  mounted() {
    this.popupItem = this.$el;
  },
  methods: {
    hide() {
      this.open = false;
    },
    getThemeName(name) {
      let themes = this.$t("nav.view");
      return themes[name];
    },
    toggle() {
      this.open = true;
    },
    changeTheme(theme) {
      localStorage.setItem("theme", theme.name);
      this.selectedTheme = theme.name;
      document.documentElement.setAttribute("theme", theme.name);
      this.hide();
    },
  },
  // do not forget this section
  directives: {
    ClickOutside,
  },
};
</script>
<style lang="scss">
.theme-dropdown {
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