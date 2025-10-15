import { context } from 'esbuild';

const ctx = await context({
  entryPoints: ['src/runtime/index.ts'],
  outfile: 'build-runtime/runtime.js',
  bundle: true,
  sourcemap: true,
  platform: 'browser',
  format: 'iife',
  globalName: 'VanillaPP',
});

await ctx.watch();
console.log('🌀 Watching runtime for changes...');
