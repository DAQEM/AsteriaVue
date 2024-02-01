<template>
  <label v-if="showLabel" class="text-lg font-bold capitalize" :for="name">
    {{ name }}
  </label>
  <textarea
    :value="value"
    @input="$emit('update:value', ($event.target as HTMLTextAreaElement).value)"
    :name="name"
    :type="type"
    class="w-full bg-background-700 rounded-xl p-4 mt-1"
    :class="{ 'resize-none': !resizable }"
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
    resizable: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
textarea:focus {
  @apply outline-4 !outline-blue-600 outline-none;
}
</style>
