import { cva, type VariantProps } from "class-variance-authority";

export { type VariantProps };

export const buttonVariants = cva("text-white", {
  variants: {
    variant: {
      default: "bg-blue-500",
      primary: "bg-blue-500",
      secondary: "bg-orange-500",
      tertiary: "bg-green-500",
    },
    size: {
      default: "p-2",
      sm: "p-2",
      md: "p-4",
      lg: "p-6",
    },
    rounded: {
      default: "rounded-sm",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      circle: "rounded-full",
    },
  },
  defaultVariants: {
    size: "default",
    variant: "default",
    rounded: "default",
  },
});
