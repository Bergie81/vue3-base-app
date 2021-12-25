<template>
  <div class="flex flex-col h-screen">
    <header class="flex flex-col justify-center">
      <AppHeader />
    </header>

    <main class="flex flex-col justify-center flex-1 bg-white mb-14">
      <AppMain />
    </main>
    <footer class="flex flex-col justify-center">
      <AppFooter />
    </footer>
  </div>
</template>

<script>
import AppHeader from "@/layout/components/PageHeader.vue";
import AppMain from "@/layout/components/PageMain.vue";
import AppFooter from "@/layout/components/PageFooter.vue";
export default {
  name: "PageLayout",
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
};
</script>

<style scoped></style>
