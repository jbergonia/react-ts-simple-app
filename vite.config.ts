/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import react from "@vitejs/plugin-react-swc";
import graphql from "@rollup/plugin-graphql";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), graphql()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
});
