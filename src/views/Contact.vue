<template>
  <section data-aos="fade-down" class="contact-me">
    <h2 class="numbered-header" style="margin: 10px 0px -10px">
      <Icon class="front-icon" name="envelope" :size="30" /> Contact Me
    </h2>
    <div>
      <div class="form" style="max-width: 800px">
        <p class="header-des">
          I am currently looking for Job. However, if you have other request or
          questions, don't hesitate to contact me using the form bellow.
        </p>
      </div>
      <Form />
    </div>
  </section>
</template>
<script>
import { socialMediaLinks } from "../constants/social-network";
import Icon from "./../components/Icon/Icon.vue";
import Form from "../components/Form.vue";
export default {
  components: { Icon, Form },
  data: () => {
    return {
      socials: socialMediaLinks,
    };
  },
};
</script>
<style lang="scss">
.contact-me {
  display: flex;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1000px;
  min-height: 50vh;

  &.a-before-enter {
    opacity: 0;
    transform: translateY(20px);
    transition: 0.3s ease-in;
  }

  &.a-enter {
    opacity: 1;
    transform: translateY(0);
  }

  .form {
    margin-top: 30px;
  }

  .social-icons {
    margin-bottom: 20px;
    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      padding-left: 0;
      li {
        margin: 10px;
        .icons {
          color: var(--v-slate-base);
        }

        &:hover {
          .icons {
            color: var(--v-primary-base);
          }
        }
      }
    }
  }
}
</style>