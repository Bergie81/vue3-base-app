<template>
  <div class="flex justify-center bg-slate-700">
    <div
      class="page-container min-h-fit w-full pt-8 pb-2 columns-1 sm:columns-2 md:columns-4"
    >
      <div class="flex flex-col items-center mb-6">
        <p class="font-light text-white text-opacity-60 pb-2">WEBSITE</p>
        <ul class="flex flex-col items-center text-white text-lg">
          <li>About this Website</li>
          <li>Terms & Conditions</li>
          <li>Privacy Statement</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div class="flex flex-col items-center mb-6">
        <p class="font-light text-white text-opacity-60 pb-2">COMPANY</p>
        <ul class="flex flex-col items-center text-white text-lg">
          <li>Contact</li>
          <li>About Us</li>
          <li>Homepage</li>
          <li>Jobs</li>
        </ul>
      </div>
      <div class="flex flex-col items-center mb-6">
        <p class="font-light text-white text-opacity-60 pb-2">PRODUCTS</p>
        <ul class="flex flex-col items-center text-white text-lg">
          <li>Product List</li>
          <li>Downloads</li>
          <li>Certificates</li>
          <li>CofA</li>
        </ul>
      </div>
      <div class="flex flex-col items-center mb-6">
        <p class="font-light text-white text-opacity-60 pb-2 mb-20">JOIN US</p>
        <p class="text-white">Version: 1.0</p>
      </div>
    </div>
  </div>
  <div class="flex justify-center items-center h-10 bg-slate-800 text-white">
    &copy;100 Cups of Coffee. All rights reserved.
  </div>
</template>

<script>
// import COMPONENT from "@/components/..PATH.vue";
export default {
  name: "PageFooter",
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
