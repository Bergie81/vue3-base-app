<template>
  <div class="flex justify-center">
    <div class="page-container">
      <h1 id="components" class="flex justify-center text-4xl mt-12">
        Components
      </h1>
      <div class="flex flex-col justify-center items-center mt-8 pb-96x mb-96x">
        <h2 class="text-xl font-bold underline">Lightbox</h2>
        <LightBox />
      </div>
      <div class="flex flex-col justify-center items-center mt-8">
        <h2 class="text-xl font-bold underline mb-2">Image Lazy Loading</h2>
        <img
          class="w-full h-auto rounded"
          v-lazy="{
            src: 'https://images.unsplash.com/photo-1545294477-c0a0b8033797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
          }"
          alt="wallpaper"
        />
      </div>
      <div class="flex flex-col justify-center items-center mt-8">
        <h2 class="text-xl font-bold underline mb-2">Smooth Scroll</h2>
        <button
          class="px-6 py-4 bg-accent text-white rounded hover:bg-red-600"
          v-scroll-to="'#components'"
        >
          Scroll up
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import LightBox from "@/components/ui/LightBox.vue";
export default {
  name: "ComponentsView",
  components: { LightBox },
};
</script>
