import { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Welcome',
};

export default meta;

export const Welcome: StoryObj = {
  render: () => {
    const title = document.createElement('h1');
    title.innerText = 'Welcome to Storybook!';
    return title;
  }
};