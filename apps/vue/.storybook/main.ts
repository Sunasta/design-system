import { resolve } from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import type { StorybookConfig } from "@storybook/vue3-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  framework: "@storybook/vue3-vite",
  stories: ["../stories/*.stories.tsx", "../stories/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
  ],
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
      resolve: {
        alias: {
          "vue-ui": resolve(
            __dirname,
            "../../../packages/vue-ui/",
            "tsconfig.json"
          ),
        },
      },
    });
  },

  docs: {
    autodocs: true,
  },
};

export default config;
