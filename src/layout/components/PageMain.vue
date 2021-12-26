<template>
  <!-- Content of children components added -->
  <router-view v-slot="slotProps">
    <transition name="fade" mode="out-in">
      <component :is="slotProps.Component" />
    </transition>
  </router-view>
</template>

<script>
export default {
  name: "PageMain",
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
