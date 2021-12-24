<template>
  <div class="flex justify-center">
    <div class="page-container flex flex-col items-center flex-1">
      <img class="w-96 h-96 mt-14" alt="logo" src="@/assets/svgs/logo.svg" />
      <h1 class="text-6xl font-extralight mt-6">{{ $store.state.app.text }}</h1>
    </div>
  </div>
</template>

<script>
// import COMPONENT from "@/components/..PATH.vue";
export default {
  name: "HomeView",
  metaInfo: {
    title: "Home",
    meta: [
      {
        vmid: "description",
        name: "description",
        content: "",
      },
    ],
  },
  components: {
    // COMPONENT
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped></style>
