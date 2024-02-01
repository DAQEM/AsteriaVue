<template>
  <div class="flex items-center">
    <Icon
      v-if="role === 'administrator'"
      name="fa6-solid:crown"
      class="h-5 w-5"
    />
    <Icon
      v-else-if="role === 'moderator'"
      name="fa6-solid:shield-halved"
      class="h-5 w-5"
    />
    <Icon v-else name="fa6-solid:dice-d6" class="h-5 w-5" />
    <p class="capitalize ml-2 font-semibold">
      {{ role }}
    </p>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  role: {
    type: String,
    default: "player",
  },
});
</script>

<style></style>
