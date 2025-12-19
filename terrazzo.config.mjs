import { defineConfig } from '@terrazzo/cli';
import css from '@terrazzo/plugin-css';
import sass from '@terrazzo/plugin-sass';
export default defineConfig({
  tokens: ['./tokens/core/core.tokens.json'],
  plugins: [
    css({
      baseSelector: "html",
      filename: "tokens.css",
    }),
    sass({
      filename: "tokens.scss",
    })
  ],
  outDir: './dist/',
  lint: {
    "core/colorspace": "warn",
    "core/consistent-naming": ["error", { format: "kebab-case" }],
  },
});