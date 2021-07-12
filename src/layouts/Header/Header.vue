<template>
  <div
    class="header"
    :class="{
      'navbar--hidden': !showNavbar && scroll > 100,
      'nav-min': scroll > 50,
    }"
  >
    <nav>
      <div class="logo-image">
        <img
          width="50"
          height="50"
          :src="require('../../assets/images/logo.svg')"
          @click="$router.push('/')"
          alt="Jenuel Ganawed Logo Image"
        />
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
              About Me
            </div>
          </li>
          <li
            data-aos="fade-right"
            style="transition-delay: 250ms"
            @click="$router.push({ name: 'Experience' })"
          >
            <div :class="{ active: $route.name == 'Experience' }">
              <Icon name="case" :size="15" />
              Experience
            </div>
          </li>
          <li
            data-aos="fade-right"
            style="transition-delay: 400ms"
            @click="$router.push({ name: 'Project' })"
          >
            <div :class="{ active: $route.name == 'Project' }">
              <Icon name="code" :size="15" />
              Projects
            </div>
          </li>
          <li
            data-aos="fade-right"
            style="transition-delay: 550ms"
            @click="$router.push({ name: 'Contact' })"
          >
            <div :class="{ active: $route.name == 'Contact' }">
              <Icon name="envelope" :size="15" />
              Contact Me
            </div>
          </li>
          
        </ol>
        <GradientBorder
          data-aos="fade-right"
          style="transition-delay: 850ms; margin-left: 20px; font-weight: 900"
          :withBg="false"
        >
          <a
            href="https://drive.google.com/file/d/18spHrGOxLdTXIVTj4l7WYSY0KSJ0TqtO/view?usp=sharing"
            target="_blank"
            class="resume-button"
            rel="noopener"
          >
            <Icon name="file" :size="15" />
            Resume
          </a>
        </GradientBorder>
        <div data-aos="fade-right" style="transition-delay: 1000ms">
          <ThemeChanger />
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
import Icon from "./../../components/Icon/Icon.vue";
import GradientBorder from "../../components/GradientBorder.vue";
import { mapMutations } from "vuex";
export default {
  name: "Header",
  components: { Icon, GradientBorder, ThemeChanger },
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