<template>
  <button type="button" class="px-12 bg-primary-900" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

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
    validator: (value: string) => ['small', 'medium', 'large'].includes(value),
  },
  backgroundColor: {
    type: String,
  },
});

// Define emits
const emit = defineEmits(['click']);

// Using reactive to make props reactive is not typically necessary in Vue 3's Composition API,
// since props are already reactive. However, if you need to modify props or pass them around,
// consider using toRefs or a similar approach to maintain reactivity.
// For this example, direct usage without making it reactive again is shown.

const classes = computed(() => ({
  'storybook-button': true,
  'storybook-button--primary': props.primary,
  'storybook-button--secondary': !props.primary,
  [`storybook-button--${props.size || 'medium'}`]: true,
}));

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}));

function onClick() {
  emit('click');
}
</script>
