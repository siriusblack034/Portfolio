<template>
  <section data-aos="fade-right" class="code-challenge">
    <h2 class="numbered-header" style="margin: 10px 0px -10px">
      <Icon class="front-icon" name="folders" :size="30" /> Others
    </h2>
    <p class="header-des">
      {{ CodeChallenge.des }}
    </p>
    <div class="code-grid">
      <div v-for="(code, index) in CodeChallenge.challenges" :key="index">
        <div
          data-aos="fade-right"
          :style="'transition-delay:' + index * 100 + 'ms'"
          style="height: 100%"
        >
          <div class="code-item">
            <div class="code-item-inner">
              <header>
                <div class="item-top">
                  <div class="item-folder">
                    <svg
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                    >
                      <path
                        d="M1.5 1A1.5 1.5 0 000 2.5v10A1.5 1.5 0 001.5 14h12a1.5 1.5 0 001.5-1.5v-8A1.5 1.5 0 0013.5 3H7.707l-2-2H1.5z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div class="item-links">
                    <div
                      class="item-links-toggle tooltip"
                      v-for="link in code.links"
                      :key="link.link"
                      @click="openSite(link.link)"
                    >
                      <Icon
                        class="icon"
                        :name="link.icon"
                        :size="25"
                        style="margin-bottom: 10px"
                      />
                      <span class="tool-tip-text">{{ link.tooltip }}</span>
                    </div>
                  </div>
                </div>
                <h3 class="item-title">{{ code.title }}</h3>
                <div
                  class="item-des"
                  v-html="getDesChallenges(code.key)"
                ></div>
              </header>
              <footer>
                <ul>
                  <li v-for="tech in code.techs" :key="tech.name">
                    <Icon :name="tech.icon" :size="15" />
                    {{ tech.name }}
                  </li>
                </ul>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import CodeChallenge from "../constants/project";
import Icon from "./Icon/Icon.vue";
export default {
  components: { Icon },
  data: () => {
    return {
      CodeChallenge: CodeChallenge,
    };
  },

  methods: {
    openSite(site) {
      window.open(site, "_blank");
    },
    getDesChallenges(key){
      let chanllenges = this.$t('project.challenges')
      return chanllenges[key]
    }
  },
};
</script>
<style lang="scss">
.code-challenge {
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

  .code-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 15px;
    position: relative;
    margin-top: 50px;

    .a-before-enter {
      opacity: 0;
      transform: translateY(20px);
      transition: 0.2s ease-in-out;
    }

    .a-enter {
      opacity: 1;
      transform: translateY(0);
    }

    .code-item {
      visibility: visible;
      background-color: rgba(255, 255, 255, 0);
      box-shadow: 0 10px 30px -15px var(--navy-shadow);
      border-radius: var(--border-radius);
      transition: 0.2s;
      height: 100%;

      .code-item-inner {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        flex-direction: column;
        gap: 20px;
        padding: 2rem 1.25rem;
        height: 88%;

        header {
          .item-top {
            display: flex;
            align-items: center;
            margin-bottom: 30px;
            justify-content: space-between;

            .item-folder {
              color: var(--primary) !important;
              .icon {
                color: var(--primary) !important;
              }
            }
            .item-links {
              display: flex;
              margin-right: -15px;
              color: var(--lightSlate) !important;

              .item-links-toggle {
                padding: 0px 5px;
                cursor: pointer;
                .icon {
                  color: var(--lightSlate) !important;
                }

                &:hover {
                  .icon {
                    color: var(--primary) !important;
                  }
                }
              }
            }
          }

          h3 {
            margin: 0px 0px 0px;
            color: var(--lightestSlate);
            font-size: 1.2rem;
            line-height: 1.1;
          }

          .item-des {
            color: var(--lightSlate);
            font-size: 0.9rem;
            line-height: 1.4;
            padding-top : 8px;
          }
        }

        footer {
          ul {
            display: flex;
            align-items: flex-end;
            flex-grow: 1;
            flex-wrap: wrap;
            padding: 0px;
            gap: 10px;
            list-style: none;

            li {
              font-family: var(--font-mono);
              font-size: 0.8rem;
              color: var(--lightSlate);
              display: flex;
              align-items: center;
              gap: 5px;

              .icon {
                color: var(--lightSlate);
              }
            }
          }
        }
      }

      &:hover {
        transition-delay: 0ms !important;
        transform: translate(0px, -5px);
        box-shadow: var(--black-shadow);
        background-color: var(--lightBackground);
      }
    }
  }
}
</style>