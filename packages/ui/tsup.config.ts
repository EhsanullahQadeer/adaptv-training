import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/icons/index.ts'],
	outDir: 'dist',
	format: ['cjs', 'esm'],
	dts: true,
	splitting: true,
	sourcemap: true,
	clean: true,
	external: ['react', 'react-dom'],
});
