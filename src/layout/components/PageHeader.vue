<template>
  <div class="flex justify-center bg-zinc-400">
    <div class="page-container flex justify-between items-center flex-1 h-14">
      <div class="flex items-center">
        <img src="@/assets/svgs/logo.svg" alt="Logo" class="w-8 h-8" />
        <p class="font-bold text-white ml-2">100 Cups of Coffee</p>
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
  </div>
  <vue-progress-bar :style="{ position: 'absolute', top: '52px' }" />
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
  mounted() {},
  methods: {},
};
</script>

<style scoped></style>
