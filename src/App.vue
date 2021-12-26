<template>
  <metainfo>
    <template #title="{ content }">{{
      content ? `${content} | Basic Web App` : `Basic Web App`
    }}</template>
  </metainfo>
  <AppLayout>
    <router-view v-slot="slotProps">
      <transition name="fade" mode="out-in">
        <component :is="slotProps.Component" />
      </transition>
    </router-view>
  </AppLayout>
</template>

<script>
import { useMeta } from "vue-meta";
import AppLayout from "@/layout/PageLayout.vue";

export default {
  name: "App",
  components: { AppLayout },
  setup() {
    useMeta({
      title: "",
      htmlAttrs: { lang: "en", amp: true },
    });
  },
};
</script>
<style lang="scss">
// FADE ANIMATION
// Fade out
.fade-leave-active {
  transition: opacity 0.35s ease-out;
}
.fade-leave-to {
  opacity: 0;
}
// Fade in
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.35s 0.1s ease-out; // delay fade in to avoid visual overlap
}
</style>
