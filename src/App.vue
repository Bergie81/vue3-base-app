<template>
  <metainfo>
    <template #title="{ content }">{{
      content ? `${content} | Basic Web App` : `Basic Web App`
    }}</template>
  </metainfo>
  <!-- Content of "PageLayout" added -->
  <router-view />
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  setup() {
    useMeta({
      title: "",
      htmlAttrs: { lang: "en", amp: true },
    });
  },
};
</script>
