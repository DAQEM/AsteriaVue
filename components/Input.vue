<template>
  <fwb-input
    :modelValue="modelValue"
    @input="updateValue"
    :label="label"
    :placeholder="placeholder"
    :type="type"
    :size="size"
    class="x_input"
  >
    <template #prefix v-if="icon">
      <Icon :name="icon" class="text-background-100" />
    </template>
  </fwb-input>
</template>

<script lang="ts">
import { FwbInput } from "flowbite-vue";

export default {
  name: "Input",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String as () => "text" | "password" | "email",
      default: "text",
    },
    size: {
      type: String as () => "sm" | "md" | "lg",
      default: "md",
    },
    placeholder: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
  },
  methods: {
    updateValue(event: Event) {
      this.$emit(
        "update:modelValue",
        (event.target as HTMLSelectElement).value
      );
    },
  },
  components: {
    FwbInput,
  },
};
</script>

<style>
.x_input input {
  @apply !bg-background-700 !border-none !text-background-100 focus:!text-white focus:!ring-4 !ring-blue-600 !font-medium !text-base;
}

.x_input label {
  @apply !text-lg !font-bold !capitalize !text-white !mb-1;
}
</style>
