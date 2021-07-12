<template>
  <div data-aos="fade-right" class="my-footer">
    <div
      class="footer-toggle-link"
      @click="openSite('https://github.com/siriusblack034/Portfolio')"
    >
      <div class="copy-right">
        {{ new Date().getFullYear() }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-copyright"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="12" cy="12" r="9"></circle>
          <path d="M14.5 9a3.5 4 0 1 0 0 6"></path>
        </svg>
        Sirius Black
      </div>
      <q
        >Programming isn't about what you know; it's about what you can figure
        out.</q
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  methods: {
    openSite(site) {
      window.open(site, "_blank");
    },
  },
};
</script>
<style lang="scss">
.my-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 50px 0;
    flex-direction: column;

    .footer-toggle-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        color: var(--lightSlate);
        flex-direction: column;
        padding: 0 20px;

        .copy-right {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        &:hover {
            color: var(--primary);
        }
    }

    .icon-highlight {
        color: var(--primary);
    }

    &.a-before-enter {
        opacity: 0;
        transform: translateX(20px);
        transition: 0.5s;
    }
    
    &.a-enter {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>