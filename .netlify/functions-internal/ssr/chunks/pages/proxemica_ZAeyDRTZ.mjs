/* empty css                                   */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, h as renderHead, g as renderComponent } from '../astro_wFK4WpfL.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { N as NavBar, H as Huella, $ as $$Home, d as $$Quote, f as $$Intro, g as $$DoubleTextBlue, h as $$ButtonLayout } from './conexionhumana_tFho6f2X.mjs';
/* empty css                              */

const $$Astro$1 = createAstro();
const $$CardProxemica = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardProxemica;
  const { title = "", img = "", text = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="card flex flex-col gap-10 w-[342px]"> <picture> <img${addAttribute(`./public/${img}`, "src")} alt=""> </picture> <article class="text_wrap flex flex-col gap-4"> <h5 class="highlight_small text-[24px]">${title}</h5> <p> ${text} </p> </article> </section>`;
}, "/Users/Jaime/Documents/PROGRAMACIO\u0301N/astro/nexus/src/components/CardProxemica.astro", void 0);

const $$Astro = createAstro();
const $$Proxemica = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Proxemica;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Proxémica | Nexus</title><link rel="icon" href="./public/favicon.svg">${renderHead()}</head> <body> <header class="wrap z-1"> ${renderComponent($$result, "NavBar", NavBar, { "nav": "/proxemica" })} </header> <main class="scroller"> <section> ${renderComponent($$result, "Home", $$Home, {}, { "huella": ($$result2) => renderTemplate`${renderComponent($$result2, "Huella", Huella, { "slot": "huella" })}`, "title": ($$result2) => renderTemplate`<h2 class="text-[80px]">
Teoría de la
<br> <span class="highlight_big text-[100px] leading-[120px]">Proxémica</span> </h2>` })} </section> <section> ${renderComponent($$result, "Quote", $$Quote, {}, { "quote": ($$result2) => renderTemplate`<quote class="max-w-[1440px] text-center text-pretty"> <h4>
La <span class="highlight_small text-[40px] tracking-tight">proxémica</span> tiene sus raíces en investigaciones etológicas que exploraban cómo
              los animales distribuyen su <span class="highlight_small text-[40px] tracking-tight">espacio</span>. Posteriormente, pensadores como Edward T. Hall aplicaron dichas
              investigaciones al estudio de la comunicación en sociedades
              humanas durante la década de 1960
</h4> </quote>` })} <section> ${renderComponent($$result, "Intro", $$Intro, {}, { "default": ($$result2) => renderTemplate` <figure> <img slot="picture" src="./public/Vector2.svg" class="w-[500px] absolute top-0 right-0"> </figure>   `, "text": ($$result2) => renderTemplate`<h3 class="max-w-[944px] text-pretty">
Es una rama de la semiótica que analiza las <span class="highlight_small text-[52px]">relaciones espaciales</span> entre <span class="highlight_small text-[52px]">individuos</span> y objetos durante la interacción, considerando posturas adoptadas
              y la presencia o ausencia de <span class="highlight_small text-[52px]">contacto</span> físico
</h3>`, "title": ($$result2) => renderTemplate`<h1 class="w-full font-semibold text-pretty">
La
<span class="highlight_big text-[144px] text-pretty">proxémica</span>
estudia la organización del espacio en la comunicación
</h1>` })} </section> <section> ${renderComponent($$result, "DoubleTextBlue", $$DoubleTextBlue, {}, { "top_text": ($$result2) => renderTemplate`<h3 class="text-white max-w-[840px] uppercase text-right">
El
<span class="highlight_small_white text-[52px]">modelo</span> de Hall
              clasifica el
<span class="highlight_small_white text-[52px]">espacio</span> personal
              en cuatro subcategorías
</h3>` })} </section> <section class="bg-white px-[120px] py-20 flex flex-col gap-20 w-[100vw]"> <article class="flex"> <h4 class="w-[617px]">
El nivel de proximidad entre dos individuos es directamente
              proporcional a su nivel de conexión
</h4> </article> <div class="cards"> <div class="carousell flex flex-wrap justify-center gap-10"> ${renderComponent($$result, "CardProxemica", $$CardProxemica, { "title": "Espacio \xEDntimo", "img": "espacio_intimo.jpg", "text": "Rango cercano al contacto f\xEDsico. Puede subdividirse en dos intervalos: para situaciones de m\xE1xima intimidad y para distancias menos \xEDntimas pero dentro de un marco de privacidad." })} ${renderComponent($$result, "CardProxemica", $$CardProxemica, { "title": "Espacio personal", "img": "espacio_personal.jpg", "text": "Es com\xFAn en relaciones interpersonales, permitiendo el contacto f\xEDsico." })} ${renderComponent($$result, "CardProxemica", $$CardProxemica, { "title": "Espacio social-consultivo", "img": "espacio_social.jpg", "text": "Se utiliza en situaciones donde se discuten asuntos no personales." })} ${renderComponent($$result, "CardProxemica", $$CardProxemica, { "title": "Espacio p\xFAblico", "img": "espacio_publico.jpg", "text": "Va desde la categor\xEDa anterior hasta el l\xEDmite de lo visible o lo audible. A esta distancia, los participantes necesitan amplificar recursos como la voz para facilitar la comunicaci\xF3n, como en conferencias." })} </div> </div> </section> <section> ${renderComponent($$result, "ButtonLayout", $$ButtonLayout, { "button_text": "Nexus", "route": "nexus" })} </section> </section> </main> 
x
</body></html>`;
}, "/Users/Jaime/Documents/PROGRAMACIO\u0301N/astro/nexus/src/pages/proxemica.astro", void 0);

const $$file = "/Users/Jaime/Documents/PROGRAMACIÓN/astro/nexus/src/pages/proxemica.astro";
const $$url = "/proxemica";

export { $$Proxemica as default, $$file as file, $$url as url };
