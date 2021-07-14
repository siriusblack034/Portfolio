<template>
  <svg
    :viewBox="setViewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    v-html="getIcon(name)"
  ></svg>
</template>
<script>
import Icons from "./icon.js";
export default {
  name: "Icon",
  data: () => {
    return {
      icons: Icons,
    };
  },
  computed: {
    setViewBox() {
      return this.name == "vuetify" || this.name == "java" || this.name =='lang'
        ? "0 0 24 24"
        : "0 0 15 15";
    },
  },
  props: {
    name: { type: String },
    size: { type: Number, default: 24 },
  },
  methods: {
    getIcon(name) {
      return Icons[name];
    },
  },
};
</script>