<template>
  <div
    class="header"
    :class="{
      'navbar--hidden': !showNavbar && scroll > 100,
      'nav-min': scroll > 50,
    }"
  >
    <nav>
      <div class="logo-image" @click="$router.push({ name: 'AboutMe' })">
        <Logo />
      </div>
      <div class="navs">
        <ol>
          <li
            data-aos="fade-right"
            style="transition-delay: 100ms"
            @click="$router.push({ name: 'AboutMe' })"
          >
            <div :class="{ active: $route.name == 'AboutMe' }">
              <Icon name="user" :size="15" />
              {{ $t("nav.about-me") }}
            </div>
          </li>

          <li
            data-aos="fade-right"
            style="transition-delay: 200ms"
            @click="$router.push({ name: 'Project' })"
          >
            <div :class="{ active: $route.name == 'Project' }">
              <Icon name="code" :size="15" />
              {{ $t("nav.projects") }}
            </div>
          </li>
          <li
            data-aos="fade-right"
            style="transition-delay: 350ms"
            @click="$router.push({ name: 'Contact' })"
          >
            <div :class="{ active: $route.name == 'Contact' }">
              <Icon name="envelope" :size="15" />
              {{ $t("nav.contact-me") }}
            </div>
          </li>
        </ol>
        <GradientBorder
          data-aos="fade-right"
          style="transition-delay: 550ms; margin-left: 20px; font-weight: 900"
          :withBg="false"
        >
          <a
            href="https://drive.google.com/file/d/18spHrGOxLdTXIVTj4l7WYSY0KSJ0TqtO/view?usp=sharing"
            target="_blank"
            class="resume-button"
            rel="noopener"
          >
            <Icon name="file" :size="15" />
            {{ $t("nav.resume") }}
          </a>
        </GradientBorder>
        <div data-aos="fade-right" style="transition-delay: 700ms">
          <ThemeChanger />
        </div>
        <div
          class="nav__lang"
          data-aos="fade-right"
          style="transition-delay: 850ms"
        >
          <LangChanger />
        </div>
      </div>
      <div class="show-mobile-nav-but">
        <div @click="toggleNav">
          <Icon
            name="menu"
            :size="30"
            style="margin-right: 20px; cursor: pointer"
          />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import ThemeChanger from "../../components/ThemeChanger.vue";
import LangChanger from "../../components/LangChanger.vue";
import Icon from "./../../components/Icon/Icon.vue";
import GradientBorder from "../../components/GradientBorder.vue";
import { mapMutations } from "vuex";
import Logo from "../../components/Logo";
export default {
  name: "Header",
  components: { Icon, GradientBorder, ThemeChanger, Logo, LangChanger },
  data() {
    return {
      scroll: 0,
      width: 0,
      showNavbar: true,
      lastScrollPosition: 0,
    };
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleWidth);
  },

  methods: {
    ...mapMutations(["setNav"]),
    toggleNav() {
      //console.log(this.$store.state.navShow);
      this.setNav(true);
      //console.log(this.$store.state.navShow);
    },
    goToLink(link) {
      window.open(link);
    },
    handleScroll() {
      this.scroll = window.scrollY;
    },
    handleWidth() {
      this.width = window.innerWidth;
    },
    onScroll() {
      // Get the current scroll position
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return;
      }
      // Here we determine whether we need to show or hide the navbar
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      // Set the current scroll position as the last scroll position
      this.lastScrollPosition = currentScrollPosition;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>
<style scoped>
.navs {
  padding-right: 32px;
}


.nav__lang-option {
  display: none;
  position: absolute;
  background-color: var(--white-color);
  box-shadow: 0 1px 2px #e0e0e0;
  right: 0;
  top: calc(100% + 16px);
  width: 130px;
  z-index: 1;
  border-radius: 2px;
  outline: none;
}

.logo-image {
  margin-left: 26px;
}
/*.nav__lang {
  height: 16px;
  padding-left: 16px;
  position: relative;
  border-left: 1px solid #e8e8e8;
  display: flex;
  align-self: center;
  cursor: pointer;
}
.header__search-select-span {
  font-size: 1.4rem;
  color: var(--text-color);
}
.header__search-select-icon {
  color: #4a4a4a;
  font-size: 1.4rem;
  margin: 0 16px 0 8px;
}
.header__search-select:hover .header__search-option {
  display: block;
}
.header__search-option {
  display: none;
  position: absolute;
  background-color: var(--white-color);
  box-shadow: 0 1px 2px #e0e0e0;
  right: 0;
  top: calc(100% + 16px);
  width: 130px;
  z-index: 1;
  border-radius: 2px;
  outline: none;
  animation: fadeIn ease-in 0.2s;
}
.header__search-option::before {
  content: "";
  display: block;
  width: 100%;
  height: 20px;
  position: absolute;
  top: -16px;
}
.header__search-option-item {
  padding: 8px 16px 8px 8px;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 400;
}
.header__search-option-item i {
  color: #e8e8e8;
  margin-left: 12px;
}
.header__search-option-item:hover {
  background-color: #fafafa;
} */
</style>