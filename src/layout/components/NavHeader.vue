<template>
  <nav class="font-semibold text-white">
    <ul class="flex justify-end">
      <li class="cursor-pointer">
        <router-link class="px-3 py-2" :to="{ name: 'home' }" exact
          >Home</router-link
        >
      </li>
      <li class="cursor-pointer">
        <router-link class="px-3 py-2" :to="{ name: 'products' }" exact
          >Products</router-link
        >
      </li>
      <li class="cursor-pointer">
        <router-link class="px-3 py-2" :to="{ name: 'about' }" exact
          >About Us</router-link
        >
      </li>
      <li class="cursor-pointer">
        <router-link class="px-3 py-2" :to="{ name: 'contact' }" exact
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
