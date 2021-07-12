<template>
  <div>
    <div class="modal-window">
      <div class="modal-window-content">
        <transition name="modal">
          <div class="box" v-show="dialog">
            <h1>
              <Icon
                class="skill-icon"
                :name="dialogContent.icon"
                :size="20"
              />{{ dialogContent.title }}
            </h1>
            <div>
              <p v-html="dialogContent.des"></p>
            </div>
          </div>
        </transition>
      </div>
      <transition name="modalBg">
        <div
          v-show="dialog"
          class="modal-window-bg"
          @click="dialog = !dialog"
        ></div>
      </transition>
    </div>
    <section class="about-me">
      <h2
        class="numbered-header"
        data-aos="fade-right"
        style="transition-delay: 150ms"
      >
        <Icon class="front-icon" name="user" :size="30" /> About Me
      </h2>
      <div class="about-me-inner">
        <div class="about-me-text">
          <div
            class="about-me-text-info"
            v-html="AboutMe.info"
            data-aos="fade-right"
            style="transition-delay: 250ms"
          ></div>
          <ul
            class="skill-list"
            data-aos="fade-right"
            style="transition-delay: 300ms"
          >
            <li
              v-for="skill in AboutMe.skills"
              :key="skill.text"
              @click="openDialog(skill)"
            >
              <Icon class="skill-icon" :name="skill.icon" :size="20" />
              {{ skill.text }}
            </li>
          </ul>
        </div>
        <div class="about-me-photo">
          <div class="wrapper">
            <div class="photo" style="position: relative; overflow: hidden">
              <div class="photo-front"></div>
              <img
                loading="lazy"
                src="https://scontent.xx.fbcdn.net/v/t1.15752-0/s280x280/194282812_1022248208309921_2388608516240209942_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=aee45a&_nc_ohc=Ug5q4-yg3UcAX8Rou1i&_nc_oc=AQlu-S2M7nXM38PIGuQG1nK2X1hqKTNunG3wjMd4tlND1W7ZnbAJ2_JFoGsMWaASYXQPmnmww7xPC2WPOolCR3wX&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=e3635d9d44df8c0ef7b0d710a9cd98a8&oe=60F191A8"
                alt="Tuan Chien - Profile Picture"
                width="300"
                height="300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Icon from "../components/Icon/Icon.vue";
import AboutMe from "../constants/about-me";
export default {
  components: {
    Icon,
  },
  data: () => {
    return {
      AboutMe: AboutMe,
      dialog: false,
      dialogContent: {
        title: "",
        des: "",
      },
      services: [
        {
          icon: "gridLayout",
          title: "Front-End Development",
          description:
            "Converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.",
        },
        {
          icon: "database",
          title: "Back-End Development",
          description:
            "Developing the server side responsible for storing and organizing data of an application and everything that communicates between the database and the browser.",
        },
        {
          icon: "toggle",
          title: "Website Management",
          description:
            "Managing all of the activities included in the process of posting and maintaining a website on the World Wide Web. This includes Website optimization and SEO friendly.",
        },
      ],
    };
  },
  methods: {
    openDialog(skill) {
      this.dialogContent = {
        title: skill.text,
        des: skill.des,
        icon: skill.icon,
      };
      this.dialog = !this.dialog;
    },
  },
};
</script>

<style lang="scss">
.about-me {
  z-index: 5;
  max-width: 1000px;
  visibility: visible;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  min-height: 75vh;
  justify-content: center;

  &.a-before-enter {
    opacity: 0;
    transform: translateY(20px);
    transition: 0.3s ease-in;
  }

  &.a-enter {
    opacity: 1;
    transform: translateY(0);
  }

  .about-me-inner {
    display: flex;
    flex-direction: row;
    gap: 50px;
  }

  .skill-list {
    display: flex;
    flex-wrap: wrap;
    padding: 0px;
    margin: 20px 0px 0px;
    gap: 10px;
    list-style: none;

    li {
      font-family: var(--font-mono) !important;
      font-size: 13px;
      transition: 0.1s ease-in-out;
      border: 1px solid var(--slate);
      padding: 9px;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      cursor: pointer;

      &:hover {
        color: var(--primary) !important;
        border: 1px solid var(--primary);
      }
    }

    .a-before-enter {
      opacity: 0;
      transform: translateY(20px);
      transition-property: opacity, transform;
    }
    .a-enter {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  .about-me-photo {
    position: relative;

    .wrapper {
      display: block;
      position: relative;
      border-radius: 10px;
      background-color: var(--image-cover);
      transition: var(--transition);

      &::before,
      &::after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        transition: 0.3s;
      }

      &::before {
        top: 0;
        left: 0;
        mix-blend-mode: screen;
      }

      &::after {
        border: 2px solid var(--primary);
        top: 20px;
        left: 20px;
        z-index: -1;
      }

      .photo {
        border-radius: 10px;
        height: 300px !important;
        width: 300px !important;
        mix-blend-mode: multiply;
        filter: grayscale(100%) contrast(1);
        transition: 0.3s !important;

        img {
          aspect-ratio: attr(width) / attr(height);
        }
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0);

        .photo {
          mix-blend-mode: normal;
          filter: grayscale(0%) contrast(1) brightness(90%);
        }
        &::after {
          top: 10px;
          left: 10px;
        }
      }
    }
  }
}

.what-i-offer-content {
  margin: 70px auto 10px auto;
  max-width: 1000px;
  min-height: 60vh;

  .services-title {
    display: flex;
    flex-direction: column;
    align-items: center;

    &.a-view-before-enter {
      opacity: 0;
      transform: translateY(20px);
      transition: 0.3s;
      transition-delay: 400ms;
    }

    &.a-view-enter {
      opacity: 1;
      transform: translateY(0px);
    }

    h2 {
      display: flex;
      align-items: center;
      font-size: clamp(17px, 5vw, 32px);
      margin: 0 0 10px 0;

      .service-title-icon {
        margin-right: 10px;
        color: var(--primary);
      }
    }
    p {
      margin: 0;
    }
  }

  .services-wrapper {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .services-item {
      margin: 10px;

      &.a-view-before-enter {
        opacity: 0;
        transform: translateY(20px);
        transition: 0.3s;
      }

      &.a-view-enter {
        opacity: 1;
        transform: translateY(0px);
      }
    }
  }
}

// modal
.modal-window {
  .modal-window-bg {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 80;
  }
  .modal-window-content {
    position: fixed;
    z-index: 90;
    top: 0;
    left: 0;

    .box {
      position: fixed;
      max-width: 250px;
      background-color: var(--background);
      padding: 20px;
      border-radius: 10px;
      left: 50%;
      margin-left: -125px;
      margin-top: 20vh;

      h1 {
        margin: 10px 0;
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--primary);
        font-size: 1.3rem;
      }
    }
  }
}

@media only screen and (max-width: 856px) {
  .about-me {
    .about-me-inner {
      display: flex;
      flex-direction: column;
      gap: 50px;

      .about-me-photo {
        order: 1;
        align-self: center;
      }
      .about-me-text {
        order: 2;
        align-self: center;
      }
    }
  }
}
</style>