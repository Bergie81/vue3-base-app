<template>
  <nav class="text-lg font-bold text-white">
    <ul class="flex justify-end">
      <li class="cursor-pointer">
        <router-link
          class="px-3 py-2 rounded hover:text-darker"
          :to="{ name: 'home' }"
          exact
          >Home</router-link
        >
      </li>
      <li class="cursor-pointer">
        <router-link
          class="px-3 py-2 rounded hover:text-darker"
          :to="{ name: 'components' }"
          exact
          >Components</router-link
        >
      </li>
      <li class="cursor-pointer">
        <router-link
          class="px-3 py-2 rounded hover:text-darker"
          :to="{ name: 'about' }"
          exact
          >About Us</router-link
        >
      </li>
      <li class="cursor-pointer">
        <router-link
          class="px-3 py-2 rounded hover:text-darker"
          :to="{ name: 'contact' }"
          exact
          >Contact</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavHeader",
};
</script>
