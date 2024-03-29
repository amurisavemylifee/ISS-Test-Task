import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";

import vue from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
  plugins: [
    vue(),
    AutoImport({
      dts: "./auto-imports.d.ts",
      defaultExportByFilename: false,
      dirs: ["src/stores"],
      imports: ["vue"],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: ["src/ui"],
      dts: "./components.d.ts",
      types: [
        {
          from: "vue",
          names: ["Transition", "TransitionGroup"],
        },
      ],
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
