import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'zui-button',
  bundles: [
    {components: ['zui-button']}
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
