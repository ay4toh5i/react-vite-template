import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import linaria from '@linaria/rollup';
import css from 'rollup-plugin-css-only';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr(),
    linaria({
      sourceMap: mode !== 'production',
    }),
    css({
      output: 'styles.css',
    }),
  ],
}));
