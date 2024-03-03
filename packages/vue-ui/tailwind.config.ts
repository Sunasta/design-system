import { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config/tailwind.config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["../tailwind-config/componentsDictionary.ts"],
  presets: [sharedConfig],
};

export default config;
