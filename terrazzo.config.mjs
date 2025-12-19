import { defineConfig } from '@terrazzo/cli';
import css from '@terrazzo/plugin-css';
import js from '@terrazzo/plugin-js';
import sass from '@terrazzo/plugin-sass';
export default defineConfig({
  tokens: ['./tokens/core/core.tokens.json'],
  plugins: [
    css(),
    js(),
    sass()
  ],
  outDir: './dist/',
  lint: {
    /** @see https://terrazzo.app/docs/cli/lint */
  },
});