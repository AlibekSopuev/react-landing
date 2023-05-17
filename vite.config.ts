import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import viteSvgr from 'vite-plugin-svgr';
import viteCompression from 'vite-plugin-compression';
import * as path from 'path';

const applicationsPrefix = '/v1/bond/applications';
const applicationsHost = 'https://credit.doscredobank.kg/';

export default defineConfig({
  base: '/dcb-green/',
  plugins: [
    react(),
    viteSvgr(),
    eslintPlugin({
      include: ['src/**/+(js|jsx|ts|tsx)'],
    }),
    viteCompression(),
  ],
  server: {
    proxy: {
      [applicationsPrefix]: {
        target: applicationsHost,
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: [
      {
        find: 'src',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
});
