<template>
  <FwbSelect
    id="select"
    :modelValue="modelValue"
    @input="updateValue"
    :options="options"
    :label="label"
    class="x_select"
  />
</template>

<script lang="ts">
import { FwbSelect } from "flowbite-vue";

export default {
  name: "Select",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    options: {
      type: Array as () => { value: string; name: string }[],
      default: () => [],
    },
    label: {
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
    FwbSelect,
  },
};
</script>

<style>
.x_select select {
  @apply !bg-background-700 !border-none !text-white focus:!ring-4 !ring-blue-600 !font-medium !text-base;
}
</style>
