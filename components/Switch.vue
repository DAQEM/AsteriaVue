<template>
  <button
    @click="toggle"
    class="grid grid-cols-[120px,120px] grid-rows-[0, 1fr] bg-gray-800 rounded-full"
  >
    <div class="col-span-2 h-0">
      <div
        :class="checked ? 'ml-0 bg-blue-600' : ' ml-[120px] bg-indigo-600'"
        class="w-[120px] h-10 rounded-full transition-all duration-300 ease-in-out"
      ></div>
    </div>
    <div class="py-2 px-4">{{ text1 }}</div>
    <div class="py-2 px-4">{{ text2 }}</div>
  </button>
</template>

<script lang="ts">
export default {
  name: "Switch",
  props: {
    checked: {
      type: Boolean,
      default: true,
    },
    text1: {
      type: String,
    },
    text2: {
      type: String,
    },
  },
  methods: {
    toggle() {
      this.$emit("input", !this.checked);
      console.log(this.checked);
    },
  },
};
</script>

<style></style>
