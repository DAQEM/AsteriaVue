<template>
  <div class="relative" ref="target">
    <div @click="isOpen = !isOpen">
      <slot name="trigger" />
    </div>
    <div
      v-if="isOpen"
      id="dropdown-options"
      class="mt-2 absolute left-1/2 rounded-md shadow-lg bg-background-800 z-10 -translate-x-1/2"
    >
      <slot name="options" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";

const isOpen = ref(false);

const target = ref(null);

onClickOutside(target, () => {
  isOpen.value = false;
});
</script>

<style scoped></style>
