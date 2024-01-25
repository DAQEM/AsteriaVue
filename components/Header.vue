<template>
  <nav class="sticky top-0 left-0 bg-secondary-900">
    <div class="max-w-8xl mx-auto h-24 grid grid-cols-3-mid items-center px-4">
      <a href="/">
        <Brand class="h-12 md:h-16" />
      </a>

      <!-- Hamburger Menu Button -->
      <div class="lg:hidden flex justify-end mr-4">
        <button class="text-white focus:outline-none" @click="toggleMobileMenu">
          <Icon name="fa6-solid:bars" class="h-8 w-8" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-show="mobileMenuOpen"
        class="lg:hidden fixed inset-0 bg-secondary-900 z-50"
      >
        <button
          class="absolute top-8 right-8 text-white focus:outline-none"
          @click="toggleMobileMenu"
        >
          <Icon name="fa6-solid:x" class="h-8 w-8" />
        </button>
        <ul
          class="text-lg font-bold tracking-wide grid grid-cols-2 text-center items-center gap-y-4 pt-24"
        >
          <li>
            <NuxtLink @click="closeMobileMenu" to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink @click="closeMobileMenu" to="/projects"
              >Projects</NuxtLink
            >
          </li>
          <li>
            <NuxtLink @click="closeMobileMenu" to="/blog">Blog</NuxtLink>
          </li>
          <li>
            <NuxtLink @click="closeMobileMenu" to="/support">Support</NuxtLink>
          </li>
          <li>
            <NuxtLink @click="closeMobileMenu" to="/servers">Servers</NuxtLink>
          </li>
          <li></li>
          <li class="flex justify-center">
            <Button color="primary" size="md"> Sign Up </Button>
          </li>
          <li class="flex justify-center">
            <Button color="secondary" size="md"> Discord </Button>
          </li>
        </ul>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden lg:flex max-w-4xl mx-auto">
        <ul class="text-lg font-bold tracking-wide flex gap-16">
          <li>
            <NuxtLink to="/projects">Projects</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog">Blog</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/support">Support</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/servers">Servers</NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Buttons -->
      <div class="hidden lg:flex gap-6">
        <Button :color="player ? 'blue' : 'indigo'" class="!p-[1rem]">
          <Icon name="fa6-solid:user" class="h-5 w-5" />
        </Button>
        <Button :color="player ? 'blue' : 'indigo'" class="!p-[.9rem]">
          <Icon name="fa6-brands:discord" class="h-6 w-6" />
        </Button>
        <Button :color="player ? 'blue' : 'indigo'">Rent Server</Button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Brand from "./Brand.vue";
import Button from "./Button.vue";

const player = useCookie("player");

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};
</script>

<style lang="css" scoped>
nav {
  @apply sticky top-0 left-0 w-full;
}

/* Add any additional styling for the mobile menu here */
</style>
