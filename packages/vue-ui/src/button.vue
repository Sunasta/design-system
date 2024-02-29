<template>
  <button
    type="button"
    class="px-4 py-20"
    :class="classes"
    @click="onClick"
    :style="style"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

// Define props with TypeScript support
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  primary: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    validator: (value: string) => ["small", "medium", "large"].includes(value),
  },
  backgroundColor: {
    type: String,
  },
});
</script>
