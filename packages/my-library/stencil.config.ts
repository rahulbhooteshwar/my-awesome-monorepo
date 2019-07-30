import { Config } from '@stencil/core';
import dotenvPlugin from 'rollup-plugin-dotenv';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'my-library',
  plugins: [
    dotenvPlugin({cwd: "../../"}),
    sass()
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
