/* empty css                                   */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderHead, g as renderComponent } from '../astro_wFK4WpfL.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { N as NavBar, H as Huella, $ as $$Home, d as $$Quote, g as $$DoubleTextBlue, h as $$ButtonLayout } from './conexionhumana_tFho6f2X.mjs';
import { $ as $$PreFooter } from './index_798wAti9.mjs';
/* empty css                                              */

const $$Astro = createAstro();
const $$Relacionesinterpersonales = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Relacionesinterpersonales;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Relaciones Interpersonales | Nexus</title><link rel="icon" href="./public/favicon.svg">${renderHead()}</head> <body> <header class="wrap z-1"> ${renderComponent($$result, "NavBar", NavBar, { "nav": "/relacionesinterpersonales" })} </header> <main class="scroller"> <section> ${renderComponent($$result, "Home", $$Home, {}, { "huella": ($$result2) => renderTemplate`${renderComponent($$result2, "Huella", Huella, { "slot": "huella" })}`, "title": ($$result2) => renderTemplate`<h2 class="text-[80px]">
Teoría de las
<br> <span class="highlight_big text-[100px]">Relaciones <br>
Interpersonales</span> </h2>` })} ${renderComponent($$result, "Quote", $$Quote, { "author": "Kurt Lewin" }, { "quote": ($$result2) => renderTemplate`<quote class="max-w-[1440px] text-center text-pretty"> <h4>
El comportamiento humano se concibe como el resultado de un campo
              o “<span class="highlight_small text-[40px] tracking-tight">espacio vital</span> , compuesto por hechos coexistentes donde el <span class="highlight_small text-[40px] tracking-tight">cambio</span> en una parte afecta al <span class="highlight_small text-[40px] tracking-tight">conjunto</span> </h4> </quote>` })} <section> ${renderComponent($$result, "DoubleTextBlue", $$DoubleTextBlue, {}, { "picture": ($$result2) => renderTemplate`<img src="./public/Vector.svg" alt="">`, "top_text": ($$result2) => renderTemplate`<h3 class="text-white max-w-[840px] uppercase text-right mb-20">
Podemos entender ese
<span class="highlight_small_white text-[52px]">"espacio vital"</span>
como el cojunto de relaciones personales de un individuo
</h3>` })} </section> <section> ${renderComponent($$result, "PreFooter", $$PreFooter, {}, { "text": ($$result2) => renderTemplate`<div class="text_wrap flex flex-col gap-10"> <h4 class="max-w-[624px] leading-10">
El <span class="highlight_small text-[40px]">individuo</span> y su
<span class="highlight_small text-[40px]">"espacio vital"</span>
no son entidades separadas, sino que constantemente <span class="highlight_small text-[40px]">interactúan</span> y se modifican mutuamente en tiempo real, es decir, son una misma
                entidad.
</h4> </div>` })} </section> <section> ${renderComponent($$result, "ButtonLayout", $$ButtonLayout, { "button_text": "Prox\xE9mica", "route": "proxemica" })} </section> </section> </main>  </body> </html>`;
}, "/Users/Jaime/Documents/PROGRAMACIO\u0301N/astro/nexus/src/pages/relacionesinterpersonales.astro", void 0);

const $$file = "/Users/Jaime/Documents/PROGRAMACIÓN/astro/nexus/src/pages/relacionesinterpersonales.astro";
const $$url = "/relacionesinterpersonales";

export { $$Relacionesinterpersonales as default, $$file as file, $$url as url };
