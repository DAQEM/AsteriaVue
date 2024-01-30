<template>
  <div class="relative z-0">
    <Header :user="auth.user" />
    <div class="px-4">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";

const auth = await getAuth();

</script>

<style></style>
