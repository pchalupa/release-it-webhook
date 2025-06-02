import { type Options, defineConfig } from "tsup";

export default defineConfig((options: Options) => ({
	entryPoints: ["src/index.ts"],
	outDir: ".",
	format: "esm",
	target: "es2022",
	platform: "node",
	dts: true,
	...options,
}));
