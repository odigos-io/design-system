import { defineConfig } from "tsup";
import svgr from "esbuild-plugin-svgr";
import jsx from "@svgr/plugin-jsx";

export default defineConfig({
  entry: ["src/index.tsx"],
  format: ["cjs", "esm"], // Build for commonJS and ESmodules
  dts: true, // Generate declaration file (.d.ts)
  splitting: false,
  sourcemap: true,
  clean: true,
  esbuildPlugins: [svgr({ svgo: false, plugins: [jsx] })],
});
