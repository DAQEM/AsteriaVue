<template>
  <label v-if="showLabel" class="text-lg font-bold capitalize" :for="name">
    {{ name }}
  </label>
  <input
    :value="value"
    @input="$emit('update:value', ($event.target as HTMLInputElement).value)"
    :name="name"
    :type="type"
    class="w-full bg-background-700 rounded-xl p-4 mt-1"
  />
</template>

<script lang="ts">
export default {
  name: "Input",
  props: {
    value: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    showLabel: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style>
input:focus {
  @apply outline-4 !outline-blue-600 outline-none;
}
</style>
