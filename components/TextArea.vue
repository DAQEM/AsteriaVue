<template>
  <fwb-textarea
    :modelValue="modelValue"
    @input="updateValue"
    :label="label"
    :placeholder="placeholder"
    :type="type"
    :size="size"
    :rows="rows"
    class="x_textarea"
  >
    <template #prefix v-if="icon">
      <Icon :name="icon" />
    </template>
  </fwb-textarea>
</template>

<script lang="ts">
import { FwbTextarea } from "flowbite-vue";

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
    rows: {
      type: Number,
      default: 3,
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
    FwbTextarea,
  },
};
</script>

<style>
.x_textarea textarea {
  @apply !bg-background-700 !border-none !text-white focus:!ring-4 !ring-blue-600 !font-normal;
}

.x_textarea label > span {
  @apply !text-lg !font-bold !capitalize !text-white !mb-1;
}
</style>
