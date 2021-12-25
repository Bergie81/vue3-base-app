<template>
  <!-- Content of children components added -->
  <router-view :key="key" v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <!-- <transition name="fade" mode="out-in">
    <router-view :key="key" />
  </transition> -->
</template>

<script>
// import COMPONENT from "@/components/..PATH.vue";
export default {
  name: "PageMain",
  components: {
    // COMPONENT
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    key() {
      // console.log("$route:", this.$route);
      return this.$route.fullPath;
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  transition-delay: 0.2s;
}
</style>
