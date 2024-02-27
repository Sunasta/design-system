import type { StorybookConfig } from "@storybook/html-vite";
import refs from "./refs";

const config: StorybookConfig = {
  framework: "@storybook/html-vite",
  stories: ["../stories/*.stories.tsx", "../stories/**/*.stories.tsx"],
  refs: refs(
    process.env.STORYBOOK_CONFIG_TYPE
      ? process.env.STORYBOOK_CONFIG_TYPE
      : "DEVELOPMENT"
  ),
  docs: {
    autodocs: true,
  },
};

export default config;
