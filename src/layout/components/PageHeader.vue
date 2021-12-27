<template>
  <div
    class="w-screen h-14 lg:h-20 flex justify-center bg-tone fixed top-0 left-0 z-50"
  >
    <div class="page-container w-screen flex justify-between items-center">
      <div class="flex items-center">
        <img
          src="@/assets/svgs/logo.svg"
          alt="Logo"
          class="w-8 h-8 lg:w-12 lg:h-12"
        />
        <p class="text-lg font-serif text-white ml-2">100 Cups of Coffee</p>
      </div>
      <HeaderNav class="hidden lg:block" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-white cursor-pointer lg:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
    <vue-progress-bar :style="{ position: 'absolute', bottom: '0' }" />
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
import HeaderNav from "@/layout/components/NavHeader.vue";
export default {
  name: "PageHeader",
  components: {
    HeaderNav,
  },
  props: {},
  setup() {
    const internalInstance = getCurrentInstance();
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    internalInstance.appContext.config.globalProperties.$Progress.start();
    // setTimeout(() => {
    internalInstance.appContext.config.globalProperties.$Progress.finish();
    // }, 3500);
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {
    this.value = window.innerWidth;
  },
  methods: {},
};
</script>

<style scoped></style>
