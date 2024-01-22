/* empty css                                   */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, h as renderHead, g as renderComponent } from '../astro_wFK4WpfL.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { N as NavBar, H as Huella, $ as $$Home, d as $$Quote, f as $$Intro, g as $$DoubleTextBlue, h as $$ButtonLayout } from './conexionhumana_tFho6f2X.mjs';
/* empty css                          */

const $$Astro$2 = createAstro();
const $$Experimental = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Experimental;
  return renderTemplate`${maybeRenderHead()}<section class="main bg-[--nexusBlue] px-[120px] py-20 h-auto flex flex-col justify-end"> <article class="wrap w-full flex justify-end"> <h2 class="animated text-[500px] leading-[400px] text-white">h</h2> </article> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/Users/Jaime/Documents/PROGRAMACIO\u0301N/astro/nexus/src/layouts/Experimental.astro", void 0);

const $$Astro$1 = createAstro();
const $$PreFooter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PreFooter;
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-white flex justify-between items-center px-[120px] py-60"> <div class="huella pl-20"> <h2 class="animated text-[--nexusBlue] text-[300px] leading-[120px] tracking-[-60px]">
af<br>fg
</h2> </div> ${renderSlot($$result, $$slots["text"])} </section>`;
}, "/Users/Jaime/Documents/PROGRAMACIO\u0301N/astro/nexus/src/layouts/PreFooter.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description" content="Proyecto experimental de tipografía  realizado por Jaime González como TFG de Diseño Gráfico en la Escuela Superior de Diseño de Madrid"><title>Home | Nexus</title><link rel="icon" href="./public/favicon.svg">${renderHead()}</head> <header class="wrap z-1"> ${renderComponent($$result, "NavBar", NavBar, { "nav": "/" })} </header> <header class="wrap z-1"> ${renderComponent($$result, "NavBar", NavBar, { "nav": "/" })} </header> <main class="scroller"> <section class="sticky"> ${renderComponent($$result, "Home", $$Home, {}, { "huella": ($$result2) => renderTemplate`${renderComponent($$result2, "Huella", Huella, { "slot": "huella" })}`, "title": ($$result2) => renderTemplate`<h1 class="text-[80px] leading-[80px]">
Bienvenido a
<br> <span class="highlight_big text-[100px]">Nexus</span> </h1>` })} ${renderComponent($$result, "Quote", $$Quote, { "author": "Judith E. Glaser" }, { "quote": ($$result2) => renderTemplate`<quote class="max-w-[1024px] text-center"> <h4>“Cada <span class="highlight_small text-[40px] tracking-tight">individuo</span> posee una voz interior que rápidamente evalúa la <span class="highlight_small text-[40px] tracking-tight">relevancia</span> o significado de algo o alguien”
</h4> </quote>` })} ${renderComponent($$result, "Experimental", $$Experimental, {}, { "default": ($$result2) => renderTemplate` <h2 class="text-white w-full font-semibold">
Nexus es un proyecto <span class="highlight_small_white text-[80px]">experimental</span> que estudia las complejidades de las relaciones personales
</h2> ` })} <section> ${renderComponent($$result, "Intro", $$Intro, {}, { "default": ($$result2) => renderTemplate` <picture> <img slot="picture" src="./public/Vector2.svg" class="w-[500px] absolute top-0 right-0" alt="Imagen de una huella"> </picture>   `, "text": ($$result2) => renderTemplate`<h3 class="max-w-[944px]">
Aunque compartamos <span class="highlight_small text-[52px]">espacio</span> con ellos, el acto de
<span class="highlight_small text-[52px]">"conectar"</span> profundamente
              se reserva a unos pocos
</h3>`, "title": ($$result2) => renderTemplate`<h1 class="w-full font-semibold">
En nuestras vidas nos encontramos con diversidad de
<span class="highlight_big text-[144px]">individuos</span> </h1>` })} </section> </section> <section class="bg-white px-[120px] flex flex-col gap-20 py-40 relative"> <article class="w-full bg-[--nexusBlue] flex flex-col justify-center items-center py-10"> <div class="wrap flex justify-center max-w-[983px] flex-col"> <h3 class="text-white w-full leading-[58px] text-right font-semibold">
La comunicación surge como
</h3> <h3 class="text-white w-full leading-[58px] font-semibold">
el componente central en la formación y desarrollo de las
              relaciones <br> interpersonales
</h3> </div> </article> <article class="w-full flex justify-end"> <h4 class="text-right max-w-[622px] leading-[44px]">
Las interacciones diarias y las conversaciones aparentemente
            triviales desempeñan un papel crucial en la
<span class="highlight_small text-[40px]">estructuración</span> de nuestras
            relaciones
</h4> </article> <figure class="absolute bottom-0 left-0"> <img src="./public/Vector6.svg" alt="Imagen de una huella"> </figure> </section> <section> ${renderComponent($$result, "DoubleTextBlue", $$DoubleTextBlue, {}, { "bot_text": ($$result2) => renderTemplate`<h3 class="text-white max-w-[840px] uppercase">
compartir tiempo en
<span class="highlight_small_white text-[52px]">proximidad</span> también
            puede ser una poderosa CONEXIÓN
</h3>`, "top_text": ($$result2) => renderTemplate`<h3 class="text-white max-w-[840px] uppercase text-right mb-20">
Pero la
<span class="highlight_small_white text-[52px]">conexión</span> no siempre
            depende de palabras
</h3>` })} </section> <section> ${renderComponent($$result, "PreFooter", $$PreFooter, {}, { "text": ($$result2) => renderTemplate`<div class="text_wrap flex flex-col gap-10"> <h4 class="max-w-[624px] leading-10">
Cada <span class="highlight_small text-[40px]">relación</span> es única
              y personal, como una
<span class="highlight_small text-[40px]">huella</span> dactilar.
</h4> <h4 class="max-w-[624px] leading-10">
Hay relaciones que nunca acaban, otras lo hacen muy pronto y otras
              acaban y vuelven a empezar.
</h4> <h4 class="max-w-[624px] leading-10"> <span class="highlight_small text-[40px]">Nexus</span> permite crear
              la
<span class="highlight_small text-[40px]">huella</span> de tus propias
              relaciones personales
</h4> </div>` })} </section> <section> ${renderComponent($$result, "ButtonLayout", $$ButtonLayout, { "button_text": "Conexiones Humanas", "route": "conexionhumana" })} </section> </main>  </html>`;
}, "/Users/Jaime/Documents/PROGRAMACIO\u0301N/astro/nexus/src/pages/index.astro", void 0);

const $$file = "/Users/Jaime/Documents/PROGRAMACIÓN/astro/nexus/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$PreFooter as $, index as i };
