<template>
  <button
    :class="[
      'btn',
      `btn-${size}`,
      `btn-${color}`,
      { 'btn-disabled': disabled, 'btn-loading': loading },
    ]"
    :disabled="disabled || loading"
  >
    <slot v-if="!loading"></slot>
    <span v-if="loading">Loading...</span>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    color: {
      type: String,
      default: "blue",
    },
    size: {
      type: String,
      default: "md",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.btn {
  @apply font-semibold;
  @apply flex items-center justify-center;
  @apply transition-all duration-300 ease-in-out;
  @apply bg-gradient-to-r;
  @apply rounded-full;
}

.btn-blue {
  @apply text-white from-blue-700 to-blue-600;
}

.btn-blue:hover {
  @apply text-white from-blue-800 to-blue-700;
}

.btn-indigo {
  @apply text-white from-indigo-700 to-indigo-600;
}

.btn-indigo:hover {
  @apply text-white from-indigo-800 to-indigo-700;
}

.btn-sm {
  @apply px-2 py-1;
  @apply text-xs;

  @apply md:text-lg;
  @apply md:px-3 md:py-1;
}

.btn-md {
  @apply px-4 py-2;
  @apply text-sm;

  @apply md:text-lg;
  @apply md:px-6 md:py-2;
}

.btn-lg {
  @apply px-6 py-3;
  @apply text-base;

  @apply md:text-lg;
  @apply md:px-8 md:py-4;
}
</style>
