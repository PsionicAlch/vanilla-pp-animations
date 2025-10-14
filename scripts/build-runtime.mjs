import { build } from 'esbuild';

await build({
	entryPoints: ['src/runtime/index.ts'],
	outfile: 'build/runtime.js',
	bundle: true,
	minify: true,
	sourcemap: true,
	platform: 'browser',
	format: 'iife',
	globalName: 'VanillaPP',
});
