<template>
  <div>
    <section class="intro">
      <h1
        data-aos="fade-right"
        style="transition-delay: 100ms"
        class="cursor-text"
      >
        <span>👋 </span>{{ $t("intro.title") }}
      </h1>
      <h2
        data-aos="fade-right"
        style="transition-delay: 250ms"
        class="cursor-text"
      >
        {{ $t("intro.info") }}
      </h2>
      <h3
        data-aos="fade-right"
        style="transition-delay: 400ms"
        class="cursor-text"
      >
        {{ $t("intro.ido") }}
      </h3>
      <p
        data-aos="fade-right"
        style="transition-delay: 550ms"
        class="cursor-text"
      >
        {{ $t("intro.des") }}
      </p>
      <div
        data-aos="fade-right"
        style="transition-delay: 700ms; width: 300px"
        @click="closeModal()"
      >
        <GradientBorder
          aria-label="Send Message"
          style="
            margin-top: 30px;
            width: 300px;
            font-size: 1.5rem !important;
            font-weight: 900;
          "
          class="go-button"
        >
          <p
            class="padding: 20px;"
            style="display: flex; align-items: center; gap: 20px"
          >
            <span>{{ $t("intro.continue") }}</span>
            <Icon class="arrow-icon" name="arrowRight" :size="24" />
          </p>
        </GradientBorder>
      </div>
    </section>
  </div>
</template>

<script>
import GradientBorder from "../../components/GradientBorder.vue";
import Icon from "../../components/Icon/Icon.vue";
export default {
  components: { GradientBorder, Icon },

  data() {
    return {
      name: "Nguyen Tuan Chien",
      IDo: "I Build Things for the web.",
      des: "Thanks for Visiting my Personal Website. Please, click continue 😊",
      email: "chien08082000@gmail.com",
    };
  },

  methods: {
    closeModal() {
      if (this.$store.state.show == false) {
        localStorage.setItem("showedIntro", "done");
        localStorage.setItem("expy", Date.now() + 1 * 60 * 60 * 1000);
        this.$store.state.show = true;
      }
    },
  },
};
</script>

<style lang ="scss">
.cursor-text {
  cursor: text;
}
.intro {
  display: flex;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  flex-direction: column;
  max-width: 1000px;
  padding: 0 30px;
  .a-before-enter {
    opacity: 0;
    transform: translateX(-30px);
    transition: 0.2s ease-in;
  }
  .a-enter {
    opacity: 1;
    transform: translateX(0);
  }
  h1 {
    color: var(--primary);
    font-family: var(--font-mono) !important;
    font-size: 25px;
    font-weight: lighter;
    margin: 0;
    span {
      font-size: 50px !important;
    }
  }
  h2 {
    font-family: sans-serif;
    font-size: clamp(2px, 8vw, 3rem);
    color: var(--white);
    margin: 0;
  }
  h3 {
    color: var(--slate);
    font-family: sans-serif;
    font-size: clamp(2rem, 8vw, 3rem);
    margin: 0;
  }
  p {
    max-width: 500px;
    color: var(--slate);
  }
  .get-in-touch {
    border: 1px solid var(--primary);
    border-radius: 4px;
    font-size: 14px;
    color: var(--primary);
    margin-top: 30px;
  }
  .go-button {
    &:hover {
      p {
        color: var(--primary);
      }
      .arrow-icon {
        transition: 0.2s;
        animation: sigways 1s infinite;
      }
    }
  }
}
@keyframes sigways {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>