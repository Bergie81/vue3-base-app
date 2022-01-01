<template>
  <div class="flex justify-center">
    <div class="page-container">
      <h1 id="components" class="flex justify-center text-4xl mt-12">
        Components
      </h1>
      <div
        class="flex flex-col justify-center items-center mt-8"
        v-appear:top="{ delay: 100, duration: 1000 }"
      >
        <h2 class="text-xl font-bold underline">Switch</h2>
        <Switch v-model:isChecked="isChecked" class="shadow p-8 rounded-lg" />
        <div>{{ isChecked }}</div>
      </div>
      <div
        class="flex flex-col justify-center items-center mt-8"
        v-appear:top="{ delay: 300, duration: 1000 }"
      >
        <h2 class="text-xl font-bold underline">Lightbox</h2>
        <LightBox />
      </div>
      <div
        class="flex flex-col justify-center items-center mt-8"
        v-appear:top="{ delay: 500, duration: 1000 }"
      >
        <h2 class="text-xl font-bold underline mb-2">Image Lazy Loading</h2>
        <img
          class="w-full h-auto rounded"
          width="1232"
          height="693"
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
import Switch from "@/components/base/Switch.vue";
import LightBox from "@/components/ui/LightBox.vue";
export default {
  name: "ComponentsPage",
  metaInfo: {
    title: "Components",
    description: "Preview of all available components.",
  },
  components: { Switch, LightBox },
  data() {
    return {
      isChecked: true,
    };
  },
};
</script>
