<template>
  <div>
    <section class="my-work" style="margin-bottom: 80px">
      <div data-aos="fade-down">
        <h2 class="numbered-header" style="margin: 10px 0px -10px">
          <Icon class="front-icon" name="code" :size="25" />
          {{ $t("project.title") }}
        </h2>
        <!-- <p class="header-des">{{ $t("project.des") }}</p> -->
      </div>
      <div style="margin-top: 100px">
        <div v-for="(work, i) in works.works" :key="i">
          <div class="work-info" :style="'transition-delay:' + i * 200 + 'ms'">
            <div
              :data-aos="i % 2 == 0 ? 'fade-right' : 'fade-left'"
              class="work-info-details"
              :class="i % 2 == 0 ? 'left-content' : 'right-content'"
            >
              <p class="info-overline">{{ work.overline }}</p>
              <h3 class="info-title">{{ work.title }}</h3>
              <div class="info-des-container">
                <p class="info-text" v-html="getDesWork(work.img)"></p>
              </div>
              <ul
                class="info-tech-list"
                :class="i % 2 == 0 ? '' : 'work-links-right'"
              >
                <li v-for="tech in work.techs" :key="tech">
                  {{ tech }}
                </li>
              </ul>
              <div
                class="work-links"
                :class="i % 2 == 0 ? '' : 'work-links-right'"
              >
                <div
                  v-for="link in work.links"
                  class="work-links-toggle tooltip"
                  :key="link.name"
                  aria-label="GitHUB Link"
                  @click="openSite(link.link)"
                >
                  <Icon class="highlight-hover" :name="link.icon" :size="25" />
                  <span class="tool-tip-text">{{ link.tooltip }}</span>
                </div>
              </div>
            </div>
            <div
              :data-aos="i % 2 == 0 ? 'fade-left' : 'fade-right'"
              class="work-info-image"
              :class="i % 2 == 0 ? 'right-image' : 'left-image'"
            >
              <div
                class="work-info-image-link"
                @click="openSite(work.imageLink)"
              >
                <div class="image-wrapping">
                  <div class="front-filter"></div>
                  <img
                    width="300"
                    height="150"
                    loading="lazy"
                    :src="work.img"
                    :alt="`${work.title} - Image`"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <CodeChallenge />
  </div>
</template>
<script>
import CodeChallenge from "../components/CodeChallenge.vue";
import Icon from "../components/Icon/Icon.vue";
import Project from "../constants/work-page";
export default {
  name: "Project",
  components: { Icon, CodeChallenge },
  data: () => {
    return {
      works: Project,
    };
  },
  mounted() {
    this.$store.state.workShow = true;
  },
  computed: {
    myWorks() {
      return this.$store.state.workPage.works;
    },
  },
  methods: {
    getDesWork(img) {
      let listWork = this.$t("project.works");
      let work = listWork.filter((el) => el.img == img);
      let des = work[0].des;
      console.log(des + "des");
      return des ? des : "";
    },
    openSite(site) {
      window.open(site, "_blank");
    },
  },
};
</script>
<style lang="scss" >
.my-work {
  margin: 0px auto;
  max-width: 1000px;

  &.a-before-enter {
    opacity: 0;
    transform: translateY(20px);
    transition: 0.3s ease-in;
  }

  &.a-enter {
    opacity: 1;
    transform: translateY(0);
  }

  .work-info {
    visibility: visible;
    opacity: 1;
    margin: 50px 0px;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    -webkit-box-align: center;
    align-items: center;

    &.a-before-enter {
      opacity: 0;
      transform: translateY(20px);
      transition: 0.2s ease-in-out 400ms;
    }

    &.a-enter {
      opacity: 1;
      transform: translateY(0);
    }

    .left-content {
      position: relative;
      grid-area: 2 / 2 / 1 / 7;
    }

    .right-image {
      position: relative;
      grid-area: 1/6/-1/-1;
    }

    .right-content {
      position: relative;
      grid-area: 1/7/-1/-2;
      text-align: right;
    }

    .left-image {
      position: relative;
      grid-area: 1 / 1 / 1 / 8;
    }

    .work-info-details {
      z-index: 2;
      p {
        margin: 0 !important;
      }

      .info-overline {
        margin: 10px 0px;
        color: var(--primary);
        font-family: var(--font-mono) !important;
        font-size: 13px;
        font-weight: 400;
      }

      .info-title {
        margin: 0px 0px 20px;
        font-size: clamp(18px, 5vw, 23px);
        color: var(--lightestSlate) !important;
      }

      .info-des-container {
        box-shadow: var(--black-shadow);
        transition: var(--transition);
        position: relative;
        z-index: 2;
        padding: 25px;
        border-radius: var(--border-radius);
        background-color: var(--lightBackground);
        color: var(--lightSlate);
        font-size: 18px;
        p {
          // line-height: 1.2;
          font-size: 1rem;
        }
      }

      .info-tech-list {
        -webkit-box-pack: end;
        justify-content: flex-start;
        display: flex;
        flex-wrap: wrap;
        position: relative;
        z-index: 2;
        margin: 25px 0px 10px;
        padding: 0px;
        list-style: none;
        li {
          color: var(--lightSlate);
          font-family: var(--font-mono) !important;
          font-size: var(--fz-xs);
          white-space: nowrap;
          margin-right: 15px;
        }
      }

      .work-links {
        -webkit-box-pack: end;
        justify-content: flex-start;
        margin-left: 0px;
        margin-right: -10px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        position: relative;
        margin-top: 10px;
        margin-left: -10px;
        color: var(--lightestSlate);
        .work-links-toggle {
          padding: 10px;
          cursor: pointer;

          .highlight-hover {
            color: var(--slate) !important;
          }
          &:hover {
            .highlight-hover {
              color: var(--primary) !important;
            }
          }
        }
      }

      .work-links-right {
        justify-content: flex-end !important;
      }
      .work-links-left {
        justify-content: flex-start !important;
      }
    }

    .work-info-image {
      transition: var(--transition);

      .work-info-image-link {
        width: 100%;
        background-color: var(--image-cover);
        border-radius: var(--border-radius);
        vertical-align: middle;
        cursor: pointer;
        transition: 0.25s !important;

        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0px;
          left: 0px;
          right: 0px;
          bottom: 0px;
          z-index: 3;
          transition: var(--transition);
          background-color: var(--navy);
          mix-blend-mode: screen;
        }

        .image-wrapping {
          position: relative;
          overflow: hidden;
          border-radius: var(--border-radius);
          mix-blend-mode: multiply;
          filter: grayscale(100%) contrast(1) brightness(90%);
          .front-filter {
            width: 100%;
            padding-bottom: 62.2857%;
          }
          img {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center center;
            opacity: 1;
            vertical-align: middle;
          }
        }

        &:hover {
          background-color: rgba(0, 0, 0, 0);
          .image-wrapping {
            filter: grayscale(0%) contrast(1) brightness(90%);
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .my-work {
    padding: 0px 0px;
    .work-info {
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(12, 1fr);
      -webkit-box-align: center;
      align-items: center;
      .left-content {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        z-index: 5;
      }
      .right-image {
        grid-column: 1 / -1;
        height: 100%;
        opacity: 0.25;
      }
      .right-content {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        z-index: 5;
      }
      .left-image {
        grid-column: 1 / -1;
        height: 100%;
        opacity: 0.25;
      }
    }
  }
}
</style>