<template>
  <div class="flex flex-col h-screen">
    <header class="flex flex-col justify-center">
      <AppHeader />
    </header>
    <main
      class="font flex flex-col justify-center flex-1 bg-white mb-14 mt-14 lg:mt-20"
    >
      <slot />
    </main>
    <footer class="flex flex-col justify-center">
      <AppFooter />
    </footer>
  </div>
</template>

<script>
import AppHeader from "@/layout/components/PageHeader.vue";
import AppFooter from "@/layout/components/PageFooter.vue";
export default {
  name: "PageLayout",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
