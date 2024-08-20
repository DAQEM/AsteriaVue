<template>
  <fwb-checkbox
    :modelValue="modelValue"
    :disabled="disabled"
    @update:modelValue="updateValue"
    class="x_checkbox !gap-2"
  >
    <div class="flex justify-center items-center text-background-100">
      <span class="mr-1" v-if="icon">
        <Icon :name="icon" />
      </span>
      <span class="mr-1" v-if="html">
        <div v-html="html" class="h-4 w-4 fill-background-100" />
      </span>
      <span class="font-medium text-base">
        {{ label }}
      </span>
    </div>
  </fwb-checkbox>
</template>

<script lang="ts">
import { FwbCheckbox } from "flowbite-vue";

export default {
  name: "Input",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    html: {
      type: String,
      default: "",
    },
  },
  methods: {
    updateValue(newValue: boolean) {
      this.$emit("update:modelValue", newValue);
      this.$emit("input", newValue);
    },
  },
  components: {
    FwbCheckbox,
  },
  emits: ["update:modelValue", "input"],
};
</script>

<style>
.x_checkbox {
  @apply !bg-transparent !border-none !text-white;
}

.x_checkbox input {
  @apply !bg-background-700 !text-white !ring-offset-0 !border-0 !ring-0 checked:!bg-blue-600;
}
</style>
