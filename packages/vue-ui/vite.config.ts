import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      rollupTypes: true,
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "VueUI",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "tailwind-config": resolve(__dirname, "./tailwind.config.ts"),
    },
  },
});
