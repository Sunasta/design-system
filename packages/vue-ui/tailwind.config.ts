import { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config/tailwind.config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  presets: [sharedConfig],
};

export default config;
