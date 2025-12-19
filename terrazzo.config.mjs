import { defineConfig } from '@terrazzo/cli';
import css from '@terrazzo/plugin-css';
import sass from '@terrazzo/plugin-sass';
export default defineConfig({
  tokens: ['./tokens/core/core.tokens.json'],
  plugins: [
    css(),
    sass()
  ],
  outDir: './dist/',
  lint: {
    /** @see https://terrazzo.app/docs/cli/lint */
  },
});