export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/herramientaavanzada_EsLt-uiE.mjs').then(n => n.h);

export { page };
