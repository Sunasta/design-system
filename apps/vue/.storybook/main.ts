import { resolve } from "path";
import type { StorybookConfig } from '@storybook/vue3-vite';
import { mergeConfig } from "vite";

const config: StorybookConfig  = {
  stories: ["../stories/*.stories.tsx", "../stories/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs"
  ],
  framework: "@storybook/vue3-vite",
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
            find: "vue-ui",
            replacement: resolve(__dirname, "../../../packages/vue-ui/"),
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
