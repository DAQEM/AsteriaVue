<template>
  <img :src="image ? image : '/default_pfp.jpg'" alt="Profile">
</template>

<script lang="ts" setup>
defineProps({
  image: {
    type: String,
    default: null,
  },
});
</script>

<style></style>
