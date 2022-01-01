<template>
  <div
    class="w-screen h-14 lg:h-20 flex justify-center bg-tone fixed top-0 left-0 z-10"
  >
    <div class="page-container w-screen flex justify-between items-center">
      <div class="flex items-center">
        <img
          src="@/assets/svgs/logo.svg"
          width="100"
          height="100"
          alt="Logo"
          class="w-8 h-8 lg:w-12 lg:h-12"
        />
        <p class="text-lg font-serif text-white ml-2">100 Cups of Coffee</p>
      </div>
      <MobileNav class="lg:hidden" />
      <HeaderNav class="hidden lg:block" />
    </div>
    <vue-progress-bar :style="{ position: 'absolute', bottom: '0' }" />
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
import HeaderNav from "@/components/widgets/NavHeader.vue";
import MobileNav from "@/components/widgets/NavMobile.vue";
export default {
  name: "PageHeader",
  components: {
    HeaderNav,
    MobileNav,
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
