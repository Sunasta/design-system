import { resolve } from "path";
import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from "vite";

const config: StorybookConfig  = {
  stories: ["../stories/*.stories.tsx", "../stories/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs"
  ],
  framework: "@storybook/react-vite",
  async viteFinal(config, { configType }) {
    if (configType === 'DEVELOPMENT') {
      // Your development configuration goes here
    }
    if (configType === 'PRODUCTION') {
      // Your production configuration goes here.
    }
    return mergeConfig(config, {
      define: { "process.env": {} },
      resolve: {
        alias: [
          {
            find: "react-ui",
            replacement: resolve(__dirname, "../../../packages/react-ui/"),
          },
        ],
      },
    });
  },

  docs: {
    autodocs: true,
  },
};

export default config;
