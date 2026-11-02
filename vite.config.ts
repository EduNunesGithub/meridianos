import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const config = defineConfig({
  plugins: [tanstackStart(), viteReact(), tailwindcss()],
  preview: {
    port: 3000,
  },
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    port: 3000,
  },
});

export default config;
