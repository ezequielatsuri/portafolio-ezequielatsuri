
export default {
  basePath: '/portafolio-ezequielatsuri',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
