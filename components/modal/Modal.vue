<template>
  <div
    v-if="showModal"
    class="fixed z-50 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div
        class="fixed inset-0 bg-secondary-950 bg-opacity-65 transition-opacity"
        aria-hidden="true"
      />
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >
      <div
        ref="target"
        class="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onClickOutside } from "@vueuse/core";

defineProps({
  showModal: {
    type: Boolean,
    default() {
      return {
        value: false,
      };
    },
  },
});

const methods = defineEmits(["closeModal"]);

function closeModal() {
  methods("closeModal");
}

const target = ref(null);

onClickOutside(target, () => {
  closeModal();
});
</script>

<style></style>
