<script setup lang="ts">
import cn from "@repo/tailwind-config/utils";
import { buttonVariants } from "@repo/tailwind-config/componentsDictionary";

interface ButtonProps {
  variant?: NonNullable<Parameters<typeof buttonVariants>[0]>["variant"];
  size?: NonNullable<Parameters<typeof buttonVariants>[0]>["size"];
  rounded?: NonNullable<Parameters<typeof buttonVariants>[0]>["rounded"];
  as?: string;
}

withDefaults(defineProps<ButtonProps>(), {
  as: "button",
});
</script>

<template>
  <component
    :is="as"
    :class="cn(buttonVariants({ variant, size, rounded }), $attrs.class ?? '')"
  >
    <slot />
  </component>
</template>
