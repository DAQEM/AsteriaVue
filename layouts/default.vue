<template>
  <div class="relative z-0">
    <Header />
    <div class="px-4">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
</script>

<style></style>
