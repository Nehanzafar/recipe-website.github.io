import { mergeConfig, defineConfig } from "vitest/config";
import viteConfig from "./vite.config.js";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "jsdom",
      globals: true,
      setupFiles: "tests/setup.js",
      coverage: {
        provider: "istanbul",
        reporter: ["text", "json", "html"],
      },
    },
  })
);
