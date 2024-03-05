/// <reference types='vitest' />
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';
import dts from 'vite-plugin-dts';

const filesNeedToExclude = ['src/mocks/*'];

const filesPathToExclude = filesNeedToExclude.map((src) => {
  return fileURLToPath(new URL(src, import.meta.url));
});

const htmlPlugin = (envVars: Record<string, string>) => {
  return {
    name: 'html-transform',
    transformIndexHtml(html: string) {
      return html.replace(/%(.*?)%/g, function (match, p1) {
        return envVars[p1];
      });
    }
  };
};

export default ({ mode }: { mode: string }) => {
  const PUBLIC_FOLDER = mode === 'production' ? '' : 'src';
  const envVars = { ...process.env, ...loadEnv(mode, ''), PUBLIC_FOLDER };

  return defineConfig({
    root: __dirname,
    cacheDir: '../../node_modules/.vite/packages/shell',

    plugins: [
      htmlPlugin(envVars),
      nxViteTsPaths(),
      dts({
        entryRoot: 'src',
        // tsConfigFilePath: path.join(__dirname, 'tsconfig.lib.json'),
        tsconfigPath: path.join(__dirname, 'tsconfig.lib.json')
        // skipDiagnostics: true,
      })
    ],

    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },

    // Configuration for building your library.
    // See: https://vitejs.dev/guide/build.html#library-mode
    build: {
      outDir: '../../dist/packages/shell',
      reportCompressedSize: true,
      sourcemap: false,
      commonjsOptions: {
        transformMixedEsModules: true
      },
      rollupOptions: {
        // External packages that should not be bundled into your library.
        external: [...filesPathToExclude]
      }
    },
    server: {
      host: true,
      port: 3001,
      open: '/'
    },
    test: {
      globals: true,
      cache: {
        dir: '../../node_modules/.vitest'
      },
      environment: 'node',
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

      reporters: ['default'],
      coverage: {
        reportsDirectory: '../../coverage/packages/shell',
        provider: 'v8'
      }
    }
  });
};
