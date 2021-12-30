<template>
  <div class="relative h-6 w-6">
    <div
      class="flex flex-col items-end w-screen h-screen absolute top-0 right-0"
    >
      <!-- HAMBURGER ICON -->
      <div
        @click="isOpen = toggleMobileMenu(!$store.state.app.isOpenMobileNav)"
        class="cursor-pointer absolute top-0 right-0 z-20"
      >
        <div
          class="menu-btn hamburger"
          :class="{ 'hamburger-open': $store.state.app.isOpenMobileNav }"
        >
          <span></span>
        </div>
      </div>
      <!-- MOBILE MENU -->
      <div
        class="mobile-nav h-6 w-6 rounded-full"
        :class="{ 'show-nav': $store.state.app.isOpenMobileNav }"
      ></div>
      <!-- MOBILE MENU CONTENT -->
      <div
        class="flex flex-col items-center justify-center w-full h-full pl-7 z-20"
      >
        <nav
          v-if="$store.state.app.isOpenMobileNav"
          class="w-full h-full text-3xl text-white"
        >
          <ul class="flex flex-col items-center justify-center w-full h-full">
            <li>
              <router-link :to="{ name: 'home' }" class="px-6 py-3 rounded"
                >Home</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'components' }"
                class="px-6 py-3 rounded"
                >Components</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'about' }" class="px-6 py-3 rounded"
                >About Us</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'contact' }" class="px-6 py-3 rounded"
                >Contact</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavMobile",
  data() {
    return {
      isOpen: true,
    };
  },
  methods: {
    toggleMobileMenu(open) {
      this.$store.dispatch("openMobileMenu", open);
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  margin-bottom: 2rem;
}
.mobile-nav {
  transform: scale(1);
}
.show-nav {
  background-color: #333;
  transform: scale(150);
  transition: transform 0.4s cubic-bezier(0.8, 0, 1, 0.8);
}

.menu-btn {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: 2px;

  span {
    margin: 0 auto;
    position: relative;
    top: 8px;
  }
  span:before,
  span:after {
    position: absolute;
    content: "";
  }
  span,
  span:before,
  span:after {
    width: 25px;
    height: 3px;
    background-color: white;
    display: block;
  }
  span:before {
    margin-top: -8px;
  }
  span:after {
    margin-top: 8px;
  }
}

.hamburger {
  span {
    -webkit-transition-duration: 0s;
    transition-duration: 0s;
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }
  &-open span {
    background-color: rgba(0, 0, 0, 0);
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }
  span:before {
    -webkit-transition-property: margin, -webkit-transform;
    transition-property: margin, transform;
    -webkit-transition-duration: 0.2s;
    transition-duration: 0.2s;
    -webkit-transition-delay: 0.2s, 0s;
    transition-delay: 0.2s, 0s;
  }
  &-open span:before {
    margin-top: 0;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition-delay: 0s, 0.2s;
    transition-delay: 0s, 0.2s;
  }
  span:after {
    -webkit-transition-property: margin, -webkit-transform;
    transition-property: margin, transform;
    -webkit-transition-duration: 0.2s;
    transition-duration: 0.2s;
    -webkit-transition-delay: 0.2s, 0s;
    transition-delay: 0.2s, 0s;
  }
  &-open span:after {
    margin-top: 0;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transition-delay: 0s, 0.2s;
    transition-delay: 0s, 0.2s;
  }
}

.menu {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: 25px;
}
.menu span {
  margin: 0 auto;
  position: relative;
  top: 12px;
}
.menu span:before,
.menu span:after {
  position: absolute;
  content: "";
}
.menu span,
.menu span:before,
.menu span:after {
  width: 30px;
  height: 6px;
  background-color: #000;
  display: block;
}
.menu span:before {
  margin-top: -12px;
}
.menu span:after {
  margin-top: 12px;
}

.menu-open span {
  -webkit-transition-duration: 0s;
  transition-duration: 0s;
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}
.menu-open:hover span {
  background-color: rgba(0, 0, 0, 0);
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}
.menu-open span:before {
  -webkit-transition-property: margin, -webkit-transform;
  transition-property: margin, transform;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -webkit-transition-delay: 0.2s, 0s;
  transition-delay: 0.2s, 0s;
}
.menu-open:hover span:before {
  margin-top: 0;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transition-delay: 0s, 0.2s;
  transition-delay: 0s, 0.2s;
}
.menu-open span:after {
  -webkit-transition-property: margin, -webkit-transform;
  transition-property: margin, transform;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -webkit-transition-delay: 0.2s, 0s;
  transition-delay: 0.2s, 0s;
}
.menu-open:hover span:after {
  margin-top: 0;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transition-delay: 0s, 0.2s;
  transition-delay: 0s, 0.2s;
}
</style>
