import { resolve } from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
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
          "react-ui": resolve(
            __dirname,
            "../../../packages/react-ui/",
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
