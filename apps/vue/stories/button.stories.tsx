import type { Meta, StoryObj } from '@storybook/vue3';
import { Button } from "@acme/vue-ui";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    rounded: 'md',
  },
  render: (args) => ({
    setup() {
      return { args };
    },
    components: { Button },
    template: `<Button :variant="primary" :size="size" :rounded="md"></Button>`,
  })
};