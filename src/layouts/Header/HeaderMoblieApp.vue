<template>
  <div class="nav-mobile">
    <div class="nav-front" :class="{ 'show-nav': $store.state.navShow }">
      <div class="close-button">
        <div @click="$store.state.navShow = false" style="cursor: pointer">
          <Icon name="x" :size="30" />
        </div>
      </div>
      <ul>
        <li style="transition-delay: 100ms">
          <div>
            <ThemeChanger />
          </div>
        </li>
        <li
          style="transition-delay: 200ms"
          @click="
            $router.push({ name: 'AboutMe' });
            $store.state.navShow = false;
          "
        >
          <div :class="{ active: $route.name == 'AboutMe' }">
            <Icon name="user" :size="15" />
            {{ $t("nav.about-me") }}
          </div>
        </li>

        <li
          style="transition-delay: 300ms"
          @click="
            $router.push({ name: 'Project' });
            $store.state.navShow = false;
          "
        >
          <div :class="{ active: $route.name == 'Project' }">
            <Icon name="code" :size="15" />
            {{ $t("nav.projects") }}
          </div>
        </li>
        <li
          style="transition-delay: 400ms"
          @click="
            $router.push({ name: 'Contact' });
            $store.state.navShow = false;
          "
        >
          <div :class="{ active: $route.name == 'Contact' }">
            <Icon name="envelope" :size="15" />
            {{ $t("nav.contact-me") }}
          </div>
        </li>

        <li style="transition-delay: 500ms">
          <GradientBorder
            data-aos="fade-right"
            style="width: 150px"
            :withBg="false"
          >
            <a
              href="https://github.com/BroJenuel/BroJenuel/raw/master/resume/JenuelGanawed-2021.pdf"
              target="_blank"
              class="resume-button"
              rel="noopener"
            >
              <Icon name="file" :size="15" />
              {{ $t("nav.resume") }}
            </a>
          </GradientBorder>
        </li>
        <li style="transition-delay: 600ms">
          <GradientBorder
            aria-label="Send Message"
            style="width: 150px; font-size: 1.5rem !important; font-weight: 900"
          >
            <div class="nav__lang">
              <LangChanger />
            </div>
          </GradientBorder>
        </li>
        <li>
          <ul class="social-medias-in-nav">
            <li v-for="social in SocialNetwork" :key="social.link">
              <div @click="goToLink(social.link)" class="a-link">
                <Icon :name="social.icon" :size="30" />
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div
      class="nav-back"
      :class="{ 'show-nav': $store.state.navShow }"
      @click="$store.state.navShow = false"
    ></div>
  </div>
</template>
<script>
import LangChanger from "./../../components/LangChanger.vue";
import ThemeChanger from "./../../components/ThemeChanger.vue";
import Icon from "../../components/Icon/Icon.vue";
import GradientBorder from "./../../components/GradientBorder.vue";
import { socialMediaLinks } from "./../../constants/social-network";
export default {
  components: { Icon, GradientBorder, ThemeChanger, LangChanger },
  computed: {
    SocialNetwork: () => socialMediaLinks,
  },
  methods: {
    goToLink(link) {
      window.open(link);
    },
  },
};
</script>
<style  >
.nav__lang {
  padding: 0 !important ;
}
li > div > .gradient-border {
  height: 20px;
}
.nav__lang > .theme-dropdown .theme-dropdown-content {
  right: -50px;
}
</style>
<style lang="scss">
.nav-mobile {
  display: none;
  .show-bar-button {
    position: absolute;
    right: 0;
    top: 0;
    margin: 20px;
  }

  .nav-front {
    position: fixed;
    height: 100%;
    overflow: auto;
    background-color: var(--background);
    z-index: 40;
    top: 0;
    right: 0;
    width: 300px;
    margin-right: -300px;
    transition: all 0.3s;
    &.show-nav {
      margin-right: 0px;
    }
    .close-button {
      text-align: right;
      margin: 20px;
      position: absolute;
      top: 0;
      right: 0;
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 20px;
      font-size: 1.3rem;
      li {
        cursor: pointer;
        div {
          padding: 10px;
          user-select: none; /* supported by Chrome and Opera */
          -webkit-user-select: none; /* Safari */
          -khtml-user-select: none; /* Konqueror HTML */
          -moz-user-select: none; /* Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
          &.active {
            color: var(--primary);
          }
        }
      }
    }
    ul.social-medias-in-nav {
      padding: 0;
      padding-left: 40px;
      margin: 0;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
  .nav-back {
    background-color: rgba(0, 0, 0, 0.4);
    height: 0%;
    width: 0%;
    position: fixed;
    z-index: 30;
    top: 0;
    right: 0;
    &.show-nav {
      height: 100%;
      width: 100%;
    }
  }
}
@media only screen and (max-width: 1050px) {
  .nav-mobile {
    display: block;
  }
}
@media only screen and (max-width: 768px) {
  .nav-mobile {
    .nav-front {
      ul.social-medias-in-nav {
        visibility: visible;
      }
    }
  }
}
@media only screen and (max-width: 375px) {
  .nav-mobile {
    .nav-front {
      width: 100%;
      margin-right: -385px;
    }
  }
}
</style>