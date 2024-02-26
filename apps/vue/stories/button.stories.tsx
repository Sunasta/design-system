import type { Meta, StoryObj } from '@storybook/vue3';
import { Button } from "@acme/vue-ui";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  name: 'Button',
  args: {
    label: 'Cliquez ici',
    primary: true, // Valeur par défaut
    size: 'medium',
    backgroundColor: '#ff6600',
    onClick: () => {}
  },
};