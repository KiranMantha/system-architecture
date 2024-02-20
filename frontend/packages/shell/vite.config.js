/// <reference types="vitest" />
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, loadEnv } from 'vite';

const htmlPlugin = (envVars) => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      return html.replace(/%(.*?)%/g, function (match, p1) {
        return envVars[p1];
      });
    }
  };
};

export default ({ mode }) => {
  const PUBLIC_FOLDER = mode === 'production' ? '' : 'src';
  const envVars = { ...process.env, ...loadEnv(mode, ''), PUBLIC_FOLDER };
  return defineConfig({
    base: '',
    plugins: [htmlPlugin(envVars)],
    build: {
      outDir: 'dist',
      sourcemap: false,
      rollupOptions: {
        plugins: [
          visualizer({
            title: 'Plumejs example repo',
            open: true
          })
        ]
      }
    },
    server: {
      host: true,
      port: 3001,
      open: '/'
    },
    test: {
      globals: true,
      environment: 'happy-dom',
      deps: {
        inline: true
      },
      coverage: {
        reporter: ['text', 'json', 'html'],
        cleanOnRerun: true,
        reportsDirectory: 'coverage'
      }
    }
  });
};
