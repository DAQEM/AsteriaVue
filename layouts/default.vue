<template>
  <div class="relative z-0">
    <Header :user="user" />
    <div class="px-4 min-h-[50vh]">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Footer from "../components/Footer.vue";

const auth = await getAuth();
const user = auth.value?.user ?? null;
</script>

<style></style>
