import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@acme/react-ui";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button Primary",
    variant: "primary",
    size: "default",
    rounded: "default",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button Secondary",
    variant: "secondary",
    size: "md",
    rounded: "md",
  },
};