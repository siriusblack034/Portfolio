<template>
  <div>
    <Overlay v-show="!$store.state.show">
      <Intro />
    </Overlay>
    <MobileNav />
    <Header v-if="$store.state.show" />
    <SocialMediaLinks v-show="$store.state.show" />
    <main v-if="$store.state.show">
      <router-view />
    </main>
    <Footer v-show="$store.state.show" />
  </div>
</template>
<script>
import Footer from "./layouts/Footer/Footer.vue";
import Header from "./layouts/Header/Header.vue";
import Overlay from "./components/Overlay.vue";
import Intro from "./views/Intro/index.vue";
import MobileNav from "./layouts/Header/HeaderMoblieApp.vue";
import SocialMediaLinks from "./components/SocialMediaLinks.vue";
export default {
  components: { SocialMediaLinks, Header, Overlay, Intro, MobileNav, Footer },
  created() {
    if (localStorage.getItem("showedIntro") == "done") {
      let ext = localStorage.getItem("expy")
        ? localStorage.getItem("expy")
        : "";
      if (ext != "") {
        let isExpire = parseInt(ext);
        let dateNow = Date.now();
        if (isExpire > dateNow) {
          this.$store.state.show = true;
        } else {
          this.$store.state.show = false;
        }
      }
    }
    console.log(
      "%cHey! Whats Up! \n =))\nThanks for looking! Hit me up on FaceBook Nguyễn Tuấn Chiến !",
      "padding:10px;" +
        "border-radius: 10px;" +
        "color:#64ffda;" +
        "font-family:'Ubuntu';" +
        "display: block;" +
        "font-weight:bold;" +
        "font-size:48px;" +
        "background:#0a192f;",
      "padding: 10px; " +
        "border-radius:10px; " +
        "color:#ccd6f6; " +
        "font-family:'Ubuntu'; " +
        "font-weight:100; " +
        "font-size:24px; " +
        "background:#0a192f;"
    );
  },
};
</script>

<style lang="scss">
main {
  margin: 0px auto;
  max-width: 1600px;
  counter-reset: section 0;
  margin-top: 130px;
  min-height: 70vh;
}
@media only screen and (max-width: 1186px) {
  main {
    margin-top: 100px;
    padding: 0px 110px;
  }
}
@media only screen and (max-width: 1050px) {
  main {
    margin-top: 80px;
    padding: 0px 110px;
  }
}
@media only screen and (max-width: 768px) {
  main {
    margin-top: 70px;
    padding: 2px 20px;
  }
}
@media only screen and (max-width: 425px) {
  main {
    padding: 10px 10px 30px 10px;
  }
}
</style>