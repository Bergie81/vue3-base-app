<template>
  <metainfo>
    <template #title="{ content }">{{
      content ? `${content} | Basic Layout` : `Basic Layout`
    }}</template>
  </metainfo>
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
