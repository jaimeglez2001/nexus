/* empty css                                   */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderHead, g as renderComponent } from '../astro_wFK4WpfL.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { N as NavBar, H as Huella, $ as $$Home, d as $$Quote, f as $$Intro, h as $$ButtonLayout } from './conexionhumana_tFho6f2X.mjs';
import { $ as $$PreFooter } from './index_798wAti9.mjs';
import { D as DescripcionFases } from './herramientaavanzada_EsLt-uiE.mjs';
/* empty css                          */

const $$Astro = createAstro();
const $$Nexus = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Nexus;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Nexus</title><link rel="icon" href="./public/favicon.svg">${renderHead()}</head> <body> <header class="wrap z-1"> ${renderComponent($$result, "NavBar", NavBar, { "nav": "/nexus" })} </header> <main class="scroller"> <section> ${renderComponent($$result, "Home", $$Home, {}, { "huella": ($$result2) => renderTemplate`${renderComponent($$result2, "Huella", Huella, { "slot": "huella" })}`, "title": ($$result2) => renderTemplate`<h2 class="text-[80px]">
¿Qué es <br> <span class="highlight_big text-[100px] leading-[120px]">Nexus</span> ?
</h2>` })} </section> <section> ${renderComponent($$result, "Quote", $$Quote, {}, { "quote": ($$result2) => renderTemplate`<quote class="max-w-[1440px] text-center text-pretty"> <h4>
Nexus es un proyecto que, basado en la teoría de <span class="highlight_small text-[40px] tracking-tight">relaciones interpersonales</span> de Lewin, relaciona el modelo <span class="highlight_small text-[40px] tracking-tight">proxémixo</span> de Hall con las diferentes <span class="highlight_small text-[40px] tracking-tight">fases</span> de una relación
</h4> </quote>` })} <section> ${renderComponent($$result, "Intro", $$Intro, {}, { "text": ($$result2) => renderTemplate`<h3 class="max-w-[944px] text-pretty">
Las letras de la <span class="highlight_small text-[52px]">tipografía</span> se asocian a las diez <span class="highlight_small text-[52px]">etapas</span> de las relaciones. Cada etapa puede tener tres interpretaciones:
<span class="highlight_small text-[52px]">positiva</span>, <span class="highlight_small text-[52px]">negativa</span> o <span class="highlight_small text-[52px]">neutra</span>,
              asociando cada una a cada glifo de la tipografía
</h3>`, "title": ($$result2) => renderTemplate`<h1 class="w-full font-semibold text-pretty">
Nace de una tipografía
<span class="highlight_big text-[144px] text-pretty">experimental</span> </h1>` })} </section> <section> ${renderComponent($$result, "DescripcionFases", DescripcionFases, { "layout": "horizontal", "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/Jaime/Documents/PROGRAMACIO\u0301N/astro/nexus/src/layouts/DescripcionFases.svelte", "client:component-export": "default" })} </section> <section> ${renderComponent($$result, "PreFooter", $$PreFooter, {}, { "text": ($$result2) => renderTemplate`<div class="text_wrap flex flex-col gap-10"> <h4 class="max-w-[624px] leading-10">
Cada etapa deja marca en una relación.
</h4> <h4 class="max-w-[624px] leading-10">
Nexus permite crear la huella de tus relaciones personales en
                función de las etapas vividas y de cómo fue la experiencia.
</h4> </div>` })} </section> <section> ${renderComponent($$result, "ButtonLayout", $$ButtonLayout, { "button_text": "Crea tu huella", "route": "herramienta" })} </section> </section> </main> 
x
</body></html>`;
}, "/Users/Jaime/Documents/PROGRAMACIO\u0301N/astro/nexus/src/pages/nexus.astro", void 0);

const $$file = "/Users/Jaime/Documents/PROGRAMACIÓN/astro/nexus/src/pages/nexus.astro";
const $$url = "/nexus";

export { $$Nexus as default, $$file as file, $$url as url };
