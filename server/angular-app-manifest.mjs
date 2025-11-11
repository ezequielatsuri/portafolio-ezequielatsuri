
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portafolio-ezequielatsuri/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/portafolio-ezequielatsuri/home",
    "route": "/portafolio-ezequielatsuri"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HOSWFRD3.js"
    ],
    "route": "/portafolio-ezequielatsuri/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5D64LYZH.js"
    ],
    "route": "/portafolio-ezequielatsuri/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6DKHSIW4.js"
    ],
    "route": "/portafolio-ezequielatsuri/skills"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3A72D773.js"
    ],
    "route": "/portafolio-ezequielatsuri/projects"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2H6GTN43.js"
    ],
    "route": "/portafolio-ezequielatsuri/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IDHLWB24.js"
    ],
    "route": "/portafolio-ezequielatsuri/privacy"
  },
  {
    "renderMode": 2,
    "redirectTo": "/portafolio-ezequielatsuri/home",
    "route": "/portafolio-ezequielatsuri/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2323, hash: '5e87f97aca4a6d7201d57ea8182bbbd3ea181276bc695ee60f3df32f67be79d4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1136, hash: '82378a444b315995a83395de47c4ad59ff96fd03e7f4efd7def8da2ca182f60c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'privacy/index.html': {size: 22815, hash: '3a3c7595b2517aa08b28a1ccef2dc6cb6b6f8c5c94a39213127bfbe0d5e22b4b', text: () => import('./assets-chunks/privacy_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 31533, hash: 'fb21843e84129e431d97ace2d4fa67c646b92f6be87a1c8a384f740fa87c119a', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 26788, hash: '03fbe79bc5a4663a12a7112348fffeffdd4d35bc0aa2c7c74ea3dcd4283f24cd', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 21401, hash: '4a0719ff7271f169748a60739af136ee397f708c6d625ae96fceeac75b023fd1', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 23833, hash: '8f0c4e133e61fed5d39deabcc6f770c6ea8c52dc4a0762ebb5f8c365659c8bb8', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 31659, hash: '08837867adb826dda4ebdfbe6180027ad270a704c5aaddab0bdd34d93729d81b', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-XEIVDWY2.css': {size: 24445, hash: '+NaX5iglYEA', text: () => import('./assets-chunks/styles-XEIVDWY2_css.mjs').then(m => m.default)}
  },
};
