<template>
  <div class="flex justify-center">
    <div class="page-container flex flex-col items-center flex-1">
      <img
        width="100"
        height="100"
        class="w-96 h-96 mt-10"
        alt="logo"
        src="@/assets/svgs/logo.svg"
      />
      <h1 class="text-5xl font-serif mt-6 text-center">
        {{ $store.state.app.text }}
      </h1>
    </div>
    <!-- <pre> {{ openGraph }} </pre> -->
  </div>
</template>

<script>
// import COMPONENT from "@/components/..PATH.vue";
export default {
  name: "HomePage",
  metaInfo: {
    title: "Home",
    description: "This is the home page.",
    // meta: this.openGraph, // TODO: How to add dynamic data to Meta 3? "this" is not working!
  },
  components: {
    // COMPONENT
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    openGraph() {
      // TODO: Issue: Open Graph scraper requests page without requesting Javascript!
      return [
        // OpenGraph
        {
          property: "og:title",
          content: "OG Title",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          content: `${
            this.$domain
          }/img/page_${this.$route.name.toLowerCase()}.jpg `,
        },
        {
          property: "og:image:secure_url",
          content: `${
            this.$domain
          }/img/page_${this.$route.name.toLowerCase()}.jpg `,
        },
        {
          property: "og:image:type",
          content: "image/jpeg",
        },
        {
          property: "og:image:width",
          content: "1200",
        },
        {
          property: "og:image:height",
          content: "630",
        },
        {
          property: "og:image:alt",
          content: "Page image",
        },
        {
          property: "og:url",
          content: this.$domain + this.$route.fullPath,
        },
        {
          property: "og:description",
          content: "OG Description",
        },
        {
          property: "og:site_name",
          content: this.$name,
        },
        {
          property: "og:locale",
          content: "en_US",
        },
      ];
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped></style>
