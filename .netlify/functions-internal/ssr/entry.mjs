import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_HL_npGUp.mjs';

const _page0  = () => import('./chunks/generic_SdnufZEz.mjs');
const _page1  = () => import('./chunks/index_kpYT_K1y.mjs');
const _page2  = () => import('./chunks/relacionesinterpersonales_Arhr1Arv.mjs');
const _page3  = () => import('./chunks/herramientaavanzada_-Cw2igSW.mjs');
const _page4  = () => import('./chunks/conexionhumana_pqaXwTAJ.mjs');
const _page5  = () => import('./chunks/herramienta_F8zS790G.mjs');
const _page6  = () => import('./chunks/proxemica_JbxuDBzT.mjs');
const _page7  = () => import('./chunks/nexus_bLAE-mNV.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/relacionesinterpersonales.astro", _page2],["src/pages/herramientaavanzada.astro", _page3],["src/pages/conexionhumana.astro", _page4],["src/pages/herramienta.astro", _page5],["src/pages/proxemica.astro", _page6],["src/pages/nexus.astro", _page7]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
