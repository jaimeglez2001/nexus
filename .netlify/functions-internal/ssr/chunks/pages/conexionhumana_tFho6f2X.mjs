/* empty css                                   */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, f as addAttribute, g as renderComponent, h as renderHead } from '../astro_wFK4WpfL.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                   */

const $$Astro$8 = createAstro();
const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Home;
  return renderTemplate`${maybeRenderHead()}<section class="pb-40 h-auto pt-[160px] mb-[120px]"> <article class="pl-[80px] uppercase"> ${renderSlot($$result, $$slots["title"])} </article> <article class="flex w-full items-end justify-end pr-[300px]"> ${renderSlot($$result, $$slots["huella"])} </article> </section>`;
}, "/Users/Jaime/Documents/PROGRAMACIO\u0301N/astro/nexus/src/layouts/Home.astro", void 0);

const $$Astro$7 = createAstro();
const $$Intro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Intro;
  return renderTemplate`${maybeRenderHead()}<section class="main bg-white px-[120px] pt-60 pb-40 flex flex-col gap-20 relative justify-between"> <picture> ${renderSlot($$result, $$slots["picture"])} </picture> ${renderSlot($$result, $$slots["title"])} <article class="wrap flex w-full"> ${renderSlot($$result, $$slots["text"])} </article> </section>`;
}, "/Users/Jaime/Documents/PROGRAMACIO\u0301N/astro/nexus/src/layouts/Intro.astro", void 0);

const $$Astro$6 = createAstro();
const $$DoubleTextBlue = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$DoubleTextBlue;
  return renderTemplate`${maybeRenderHead()}<body> <main class="main bg-[--nexusBlue] px-[120px] py-20 h-auto flex flex-col relative justify-center"> <figure class="absolute top-0 right-0"> ${renderSlot($$result, $$slots["picture"])} </figure> <section class="text-section w-full flex"> <article class="text_wrap"> ${renderSlot($$result, $$slots["top_text"])} </article> </section> <section class="text-section w-full flex justify-end"> <article class="text_wrap"> ${renderSlot($$result, $$slots["bot_text"])} </article> </section> </main> </body>`;
}, "/Users/Jaime/Documents/PROGRAMACIO\u0301N/astro/nexus/src/layouts/DoubleTextBlue.astro", void 0);

/** @returns {void} */

function run(fn) {
	return fn();
}

function blank_object() {
	return Object.create(null);
}

/**
 * @param {Function[]} fns
 * @returns {void}
 */
function run_all(fns) {
	fns.forEach(run);
}

let current_component;

/** @returns {void} */
function set_current_component(component) {
	current_component = component;
}

const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;

/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 * @param {unknown} value
 * @returns {string}
 */
function escape(value, is_attr = false) {
	const str = String(value);
	const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
	pattern.lastIndex = 0;
	let escaped = '';
	let last = 0;
	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}
	return escaped + str.substring(last);
}

function validate_component(component, name) {
	if (!component || !component.$$render) {
		if (name === 'svelte:component') name += ' this={...}';
		throw new Error(
			`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`
		);
	}
	return component;
}

let on_destroy;

/** @returns {{ render: (props?: {}, { $$slots, context }?: { $$slots?: {}; context?: Map<any, any>; }) => { html: any; css: { code: string; map: any; }; head: string; }; $$render: (result: any, props: any, bindings: any, slots: any, context: any) => any; }} */
function create_ssr_component(fn) {
	function $$render(result, props, bindings, slots, context) {
		const parent_component = current_component;
		const $$ = {
			on_destroy,
			context: new Map(context || (parent_component ? parent_component.$$.context : [])),
			// these will be immediately discarded
			on_mount: [],
			before_update: [],
			after_update: [],
			callbacks: blank_object()
		};
		set_current_component({ $$ });
		const html = fn(result, props, bindings, slots);
		set_current_component(parent_component);
		return html;
	}
	return {
		render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
			on_destroy = [];
			const result = { title: '', head: '', css: new Set() };
			const html = $$render(result, props, {}, $$slots, context);
			run_all(on_destroy);
			return {
				html,
				css: {
					code: Array.from(result.css)
						.map((css) => css.code)
						.join('\n'),
					map: null // TODO
				},
				head: result.title + result.head
			};
		},
		$$render
	};
}

/** @returns {string} */
function add_attribute(name, value, boolean) {
	if (value == null || (boolean && !value)) return '';
	const assignment = boolean && value === true ? '' : `="${escape(value, true)}"`;
	return ` ${name}${assignment}`;
}

/* src/components/NavBar.svelte generated by Svelte v4.2.8 */

const css = {
	code: ".main.svelte-1ec6gpz{z-index:1}ul.svelte-1ec6gpz{height:100%}.active.svelte-1ec6gpz{background-color:var(--nexusBlue);color:white}",
	map: null
};

const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { nav } = $$props;

	const letters = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"ñ",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
		",",
		".",
		"-"
	];

	let letter_1 = "";
	let letter_2 = "";
	let letter_3 = "";
	let letter_4 = "";

	function getRandomLetter() {
		letter_1 = getRandomSingleLetter();
		letter_2 = getRandomSingleLetter();
		letter_3 = getRandomSingleLetter();
		letter_4 = getRandomSingleLetter();
	}

	function getRandomSingleLetter() {
		const availableLetters = [...letters];
		const randomIndex = Math.floor(Math.random() * availableLetters.length);
		const randomLetter = availableLetters[randomIndex];
		availableLetters.splice(randomIndex, 1);
		return randomLetter;
	}

	getRandomLetter();
	let currentPath = nav; //

	const setActiveClass = path => {
		return path === currentPath ? "active" : "";
	};

	if ($$props.nav === void 0 && $$bindings.nav && nav !== void 0) $$bindings.nav(nav);
	$$result.css.add(css);
	return `<nav class="main fixed w-full bg-white border-b-2 border-gray-200 items-center svelte-1ec6gpz"><div class="flex gap-20 items-center justify-between pr-10"><article class="bg-[--nexusBlue] pr-6 py-10 flex items-center justify-center w-[140px]"><a href="/"><h1 class="font-[Connect] font-[1000] text-white text-[60px] tracking-[-30px] leading-[0px] p-4 w-full">${escape(letter_1)}${escape(letter_2)} <br> ${escape(letter_3)}${escape(letter_4)}</h1></a></article> <ul class="flex gap-10 items-center svelte-1ec6gpz"><li><a href="/"><button class="${"p-4 hover:bg-[--nexusBlue] hover:text-white h-full " + escape(setActiveClass('/'), true) + " svelte-1ec6gpz"}">Home</button></a></li> <li><a href="conexionhumana"><button class="${"p-4 hover:bg-[--nexusBlue] hover:text-white h-full " + escape(setActiveClass('/conexionhumana'), true) + " svelte-1ec6gpz"}">Conexiones Humanas</button></a></li> <li><a href="relacionesinterpersonales"><button class="${"p-4 hover:bg-[--nexusBlue] hover:text-white h-full " + escape(setActiveClass('/relacionesinterpersonales'), true) + " svelte-1ec6gpz"}">Relaciones Interpersonales</button></a></li> <li><a href="proxemica"><button class="${"p-4 hover:bg-[--nexusBlue] hover:text-white h-full " + escape(setActiveClass('/proxemica'), true) + " svelte-1ec6gpz"}">Proxémica</button></a></li> <li><a href="nexus"><button class="${"p-4 hover:bg-[--nexusBlue] hover:text-white h-full " + escape(setActiveClass('/nexus'), true) + " svelte-1ec6gpz"}">Nexus</button></a></li> <li><a href="herramienta"><button class="${"p-4 hover:bg-[--nexusBlue] hover:text-white h-full " + escape(setActiveClass('/herramienta'), true) + " svelte-1ec6gpz"}">Crea tu huella</button></a></li></ul></div> </nav>`;
});

const $$Astro$5 = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Button;
  const { button_text, route } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button class="py-4 px-8 border-black border-2 rounded-3xl hover:bg-[--nexusBlue] duration-200 hover:border-white hover:text-white"> <a${addAttribute(`${route}`, "href")}><span class="font-[Pixelify] hover:text-white uppercase text-5xl">${button_text}</span></a> </button>`;
}, "/Users/Jaime/Documents/PROGRAMACIO\u0301N/astro/nexus/src/components/Button.astro", void 0);

const $$Astro$4 = createAstro();
const $$ButtonLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ButtonLayout;
  const { button_text, route } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-white main flex justify-center items-center h-[100vh] relative border-t-2 border-gray-300"> ${renderComponent($$result, "Button", $$Button, { "button_text": button_text, "route": route })} </section>`;
}, "/Users/Jaime/Documents/PROGRAMACIO\u0301N/astro/nexus/src/layouts/ButtonLayout.astro", void 0);

const $$Astro$3 = createAstro();
const $$Quote = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Quote;
  const { author = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="quote_wrapper sticky top-0 h-[100vh] px-[120px] w-full flex flex-col gap-4 justify-center items-center border-t-2 z-[-90]"> ${renderSlot($$result, $$slots["quote"])} <p class="text-2xl">${author}</p> </article>`;
}, "/Users/Jaime/Documents/PROGRAMACIO\u0301N/astro/nexus/src/layouts/Quote.astro", void 0);

/* src/components/Huella.svelte generated by Svelte v4.2.8 */

const Huella = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const letters = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"ñ",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
		",",
		".",
		"-"
	];

	let letter_1 = "";
	let letter_2 = "";
	let letter_3 = "";
	let letter_4 = "";
	const selectedLetters = [];

	function getRandomLetter() {
		letter_1 = getRandomSingleLetter();
		letter_2 = getRandomSingleLetter();
		letter_3 = getRandomSingleLetter();
		letter_4 = getRandomSingleLetter();

		if (selectedLetters.length === letters.length) {
			selectedLetters.length = 0;
		}
	}

	function getRandomSingleLetter() {
		const availableLetters = letters.filter(letter => !selectedLetters.includes(letter));

		if (availableLetters.length === 0) {
			selectedLetters.length = 0;
		}

		const randomIndex = Math.floor(Math.random() * availableLetters.length);
		const randomLetter = availableLetters[randomIndex];
		selectedLetters.push(randomLetter);
		return randomLetter;
	}

	getRandomLetter();
	return `<div class="animated text-[--nexusBlue] text-[600px] leading-[240px] tracking-[-360px] pr-80">${escape(letter_1)}${escape(letter_2)}<br>${escape(letter_3)}${escape(letter_4)}</div>`;
});

const etapas = [
	{
		fase: "Iniciación",
		pregunta: "¿Cuál fue tu primera impresión de esa persona?",
		ejemplo: "En la etapa de iniciación, las personas se evalúan mutuamente e intentan presentarse de manera favorable. Ya sea que te encuentres con alguien en el pasillo de la escuela o en la sección de productos en la tienda de comestibles, observas a la persona y consideras cualquier conocimiento previo que tengas de ella, las expectativas para la situación, entre otros factores.",
		letra: [
			"q",
			"a",
			"z"
		],
		respuesta: [
			"Buena",
			"Normal",
			"Mala",
			"No me acuerdo"
		],
		texto: "En esta fase, las personas se evalúan mutuamente, buscando presentarse de manera favorable."
	},
	{
		fase: "Experimentación",
		pregunta: "¿Disfrutas con esa persona?",
		ejemplo: "Descubrir que ambos tenéis intereses comunes puede llevar a conversaciones más extensas; sin embargo, a veces el experimento puede fallar. Si tenéis opiniones opuestas o tus intentos de intercambio de información con otra persona durante la etapa experimental se encuentran con silencio o vacilación, podrías interpretar su falta de comunicación como una señal de que no deberías buscar una interacción futura.",
		letra: [
			"w",
			"s",
			"x"
		],
		respuesta: [
			"Mucho, tenemos intereses comunes",
			"Sin más",
			"No, lo hago por cortesía",
			"No lo sé"
		],
		texto: "Aquí, se produce un intercambio de información, similar al 'ritual de olfateo' en animales, llevando a una transición de desconocidos a conocidos."
	},
	{
		fase: "Intensificación",
		pregunta: "¿Habéis compartido experiencias más íntimas que con otras personas?",
		ejemplo: "La intensificación gradual de la relación puede llevarse a cabo durante semanas, meses o años. Invitar a alguien de vacaciones sin tener interacciones menos íntimas previas sería considerado extraño. Solicitar demasiados favores o no devolver los favores concedidos puede desequilibrar la relación, llevándola a transitar a otra etapa, como la diferenciación.",
		letra: [
			"e",
			"d",
			"c"
		],
		respuesta: [
			"Sí, hemos vivido experiencias muy íntimas",
			"Hemos compartido vivencias casuales",
			"Sí, pero no fue bien",
			"No"
		],
		texto: "Se señala la apertura a una mayor intimidad, esperando una señal de aceptación antes de avanzar."
	},
	{
		fase: "Integración",
		pregunta: "¿Formáis parte de la vida íntima del otro?",
		ejemplo: "Ejemplos como la fusión con las amistades del otro o la percepción externa de los compañeros como una misma unidad. A pesar de integrarse, las personas suelen mantener un sentido de identidad propio al pasar tiempo con amigos y familiares por separado, equilibrando así la independencia y conexión. La ruptura de este equilibrio puede generar dependencia en una de las partes, lo que podría afectar negativamente la relación.",
		letra: [
			"r",
			"f",
			"v"
		],
		respuesta: [
			"Hemos integrado nuestras vidas",
			"Compartimos cosas superficiales",
			"Sí, pero uno de nosotros es dependiente del otro",
			"No"
		],
		texto: "Identidades y personalidades se fusionan, generando un sentido de interdependencia, evidente en diversas formas de relación."
	},
	{
		fase: "Lazo",
		pregunta: "¿Habéis establecido un vínculo único?",
		ejemplo: "Pueden incluir rituales formales como un matrimonio pero o interpretarse como una unión más abstracta, como un mejor amigo. En cierto modo, el ritual de vinculación es arbitrario, ya que puede ocurrir en cualquier etapa de una relación.",
		letra: [
			"t",
			"g",
			"b"
		],
		respuesta: [
			"Sí",
			"Tuvimos un vínculo pero se rompió",
			"No es correspondido",
			"No"
		],
		texto: "Se incluye un ritual público que anuncia formalmente el compromiso, principalmente aplicable a parejas románticas."
	},
	{
		fase: "Diferenciación",
		pregunta: "¿Cómo lleváis vuestras diferencias?",
		ejemplo: "Diferenciarse es lo opuesto a integrarse, ya que el 'nosotros' y 'nuestro' retrocede a 'yo' y 'mío'. La diferenciación puede comenzar en una relación que se vinculó antes de que los individuos se conocieran lo suficiente en profundidad y amplitud, o en una relación que apenas ha empezado",
		letra: [
			"y",
			"h",
			"n"
		],
		respuesta: [
			"Nos unen más",
			"No nos afectan",
			"Nos perjudican",
			"No tenemos diferencias"
		],
		texto: "Las diferencias individuales se comunican, revirtiendo la integración hacia una afirmación de individualidad."
	},
	{
		fase: "Circunscripción",
		pregunta: "¿Evitáis hablar de ciertos temas?",
		ejemplo: "La comunicación disminuye y ciertas áreas o temas se restringen a medida que las personas se cierran verbalmente entre sí. Pueden decir cosas como 'No quiero hablar más de eso' o 'Tú atiende tus asuntos y yo atenderé los míos'",
		letra: [
			"u",
			"j",
			"m"
		],
		respuesta: [
			"Sí",
			"Sí, pero no muchos",
			"Sí y nos perjudicó",
			"No"
		],
		texto: "La comunicación disminuye y ciertos temas se restringen, marcando un cierre verbal entre las personas."
	},
	{
		fase: "Estancamiento",
		pregunta: "¿Llegó esa relación a un punto muerto?",
		ejemplo: "Esta etapa puede prolongarse en algunas relaciones. Padres e hijos que están distanciados, parejas separadas que esperan un divorcio, o amigos que quieren poner fin a una relación pero no saben cómo hacerlo pueden pasar periodos extendidos de estancamiento.",
		letra: [
			"i",
			"k",
			","
		],
		respuesta: [
			"Sí, pero retomamos la relación",
			"Sí",
			"Sí, y fue a peor",
			"No"
		],
		texto: "La relación puede estancarse, esperando que la comunicación interna evite el conflicto relacional."
	},
	{
		fase: "Evitación",
		pregunta: "¿Alguna de las parte ha intentado evitar al otro?",
		ejemplo: "La comunicación en la etapa de evitación puede ser muy directa, como 'No quiero hablar contigo más', o más indirecta, como 'Tengo que encontrarme con alguien en un rato, así que no puedo hablar mucho'. Si bien la evitación física, como salir de una habitación o solicitar un cambio de horario en el trabajo",
		letra: [
			"o",
			"l",
			"."
		],
		respuesta: [
			"Durante una época",
			"Sí pero de forma indirecta",
			"Sí, de forma directa",
			"No"
		],
		texto: "Se busca cerrar las líneas de comunicación para poner fin a la incomodidad, implicando la disociación cognitiva en algunos casos."
	},
	{
		fase: "Finalización",
		pregunta: "¿Cómo acabó esa relación?",
		ejemplo: "La etapa de terminación de una relación puede ocurrir poco después de la iniciación o después de que se haya establecido una historia relacional de diez o veinte años. La terminación puede ser resultado de circunstancias externas como la separación geográfica o factores internos como cambios en valores o personalidades que llevan a debilitar el vínculo.",
		letra: [
			"p",
			"ñ",
			"-"
		],
		respuesta: [
			"Acabó, pero volvió a empezar",
			"No acabó mal",
			"Acabó mal",
			"No ha acabado"
		],
		texto: "Puede ocurrir temprano en la relación o después de años, impulsada por factores externos o cambios internos que debilitan el vínculo."
	}
];

const $$Astro$2 = createAstro();
const $$EtapasDesarrollo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$EtapasDesarrollo;
  return renderTemplate`${maybeRenderHead()}<section class="slider flex w-full overflow-scroll bg-white"> ${etapas.map(({ letra, fase, texto }) => renderTemplate`<section class="etapa flex flex-col p-10 border-r-2 h-auto gap-10 items-center"> <article class="text_wrap flex"> <h2 class="animated text-[--nexusBlue] text-[200px] leading-[200px]"> ${letra[1]} </h2> </article> <article class="flex flex-col description gap-2"> <h3 class="highlight_small text-4xl">${fase}</h3> <p class="w-[280px]">${texto}</p> </article> </section>`)} </section>`;
}, "/Users/Jaime/Documents/PROGRAMACIO\u0301N/astro/nexus/src/components/EtapasDesarrollo.astro", void 0);

const $$Astro$1 = createAstro();
const $$RelacionesCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RelacionesCard;
  const { title, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="card bg-[--nexusBlue] size-[410px] flex flex-col items-center justify-center gap-8 p-8"> <picture> ${renderSlot($$result, $$slots["picture"])} </picture> <article class="text_wrap"> <h5 class="highlight_small_white text-[32px]">${title}</h5> <p class="text-[18px] text-white"> ${text} </p> </article> </section>`;
}, "/Users/Jaime/Documents/PROGRAMACIO\u0301N/astro/nexus/src/components/RelacionesCard.astro", void 0);

const $$Astro = createAstro();
const $$Conexionhumana = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Conexionhumana;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description" content="Proyecto experimental de tipografía  realizado por Jaime González como TFG de Diseño Gráfico en la Escuela Superior de Diseño de Madrid"><title>Conexiones Humanas | Nexus</title><link rel="icon" href="./public/favicon.svg">${renderHead()}</head> <body> <header class="wrap z-1"> ${renderComponent($$result, "NavBar", NavBar, { "nav": "/conexionhumana" })} </header> <main class="scroller main w-[full]"> <section class="sticky"> ${renderComponent($$result, "Home", $$Home, {}, { "huella": ($$result2) => renderTemplate`${renderComponent($$result2, "Huella", Huella, { "slot": "huella" })}`, "title": ($$result2) => renderTemplate`<h1 class="text-7xl">
Conexiones <br> <span class="highlight_big text-[90px]">humanas</span> </h1>` })} ${renderComponent($$result, "Quote", $$Quote, {}, { "quote": ($$result2) => renderTemplate`<h4 class="max-w-[1440px] text-center text-pretty">
La <span class="highlight_small text-[40px] tracking-tight">conexión</span> profunda no se limita a gestos o miradas. Su origen se encuentra en
            la <span class="highlight_small text-[40px] tracking-tight">interacción</span> y el trato. Se manifiesta principalmente a través de la palabra <span class="highlight_small text-[40px] tracking-tight">"compartir"</span> </h4>` })} <section> ${renderComponent($$result, "Intro", $$Intro, {}, { "text": ($$result2) => renderTemplate`<article class="flex flex-col gap-5"> <h3 class="max-w-[944px]">
Definida como la sensación de <span class="highlight_small text-[52px]">cercanía</span> y pertenencia experimentada al establecer relaciones de apoyo con
                nuestro entorno
</h3> <p class="text-[28px] max-w-[680px] leading-8">
Se materializa cuando dos o más individuos interactúan,
                sintiéndose cada uno valorado, reconocido y escuchado
</p> </article>`, "title": ($$result2) => renderTemplate`<h1 class="text-9xl w-full font-semibold">
La <span class="highlight_big text-[144px]">conexión</span> humana
</h1>` })} </section> <section class="bg-white px-[120px] py-20 flex flex-col gap-20 items-center"> <div class="wrap flex flex-col gap-20"> <h3 class="max-w-[730px]">
En el <span class="highlight_small text-[52px]">complejo</span> análisis
              de las relaciones humanas, resulta esencial dividirlas en dos categorías
              fundamentales
</h3> <div class="wrap flex gap-10"> <article class="flex flex-col gap-4"> <p class="text-pretty max-w-[400px] text-2xl">
Una distinción propuesta por VanLear, Koerner y Allen en 2006.
</p> <p class="text-pretty max-w-[400px] text-2xl">
Esta clasificación ofrece un marco para examinar la diversidad
                  de las conexiones humanas.
</p> </article> <div class="cards flex gap-4"> ${renderComponent($$result, "RelacionesCard", $$RelacionesCard, { "title": "Relaciones personales", "text": "Las relaciones personales involucran una cercan\xEDa e interdependencia significativas, como aquellas con amigos cercanos, parejas o familiares," }, { "picture": ($$result2) => renderTemplate`<img src="./public/Relaciones/Vector.svg" alt="">` })} ${renderComponent($$result, "RelacionesCard", $$RelacionesCard, { "title": "Relaciones sociales", "text": "Las relaciones sociales, en contraste, satisfacen ocasionalmente nuestras necesidades y carecen de la misma proximidad e interdependencia." }, { "picture": ($$result2) => renderTemplate`<img src="./public/Relaciones/Vector2.svg" alt="">` })} </div> </div> </div> </section> <section> ${renderComponent($$result, "DoubleTextBlue", $$DoubleTextBlue, {}, { "picture": ($$result2) => renderTemplate`<img src="./public/Vector.svg" alt="">`, "top_text": ($$result2) => renderTemplate`<h3 class="text-white max-w-[840px] uppercase text-right">
El proceso de
<span class="highlight_small_white text-[52px]">formación</span>
y
<span class="highlight_small_white text-[52px]">desgaste</span>de
              las relaciones se define a través de diez <span class="highlight_small_white text-[52px]">etapas</span> establecidas
</h3>` })} </section> <section> ${renderComponent($$result, "EtapasDesarrollo", $$EtapasDesarrollo, {})} </section> <section class="bg-white px-[120px] py-40 flex flex-col gap-10"> <h3 class="max-w-[1047px]">
Aunque estas <span class="highlight_small text-[52px]">etapas</span>
no siempre se experimentan de manera lineal, y algunas relaciones pueden
            no atravesarlas todas, el modelo proporciona una <span class="highlight_small text-[52px]">estructura</span> para comprender la dinámica relacional
</h3> <h4 class="max-w-[1047px]">
Es crucial reconocer que el movimiento consciente entre estas etapas
            y la unión o separación no poseen una connotación inherentemente
            buena o mala
</h4> </section> <section> ${renderComponent($$result, "ButtonLayout", $$ButtonLayout, { "button_text": "Relaciones interpersonales", "route": "relacionesinterpersonales" })} </section> </section> </main> </body></html>`;
}, "/Users/Jaime/Documents/PROGRAMACIO\u0301N/astro/nexus/src/pages/conexionhumana.astro", void 0);

const $$file = "/Users/Jaime/Documents/PROGRAMACIÓN/astro/nexus/src/pages/conexionhumana.astro";
const $$url = "/conexionhumana";

const conexionhumana = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Conexionhumana,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Home as $, Huella as H, NavBar as N, etapas as a, add_attribute as b, create_ssr_component as c, $$Quote as d, escape as e, $$Intro as f, $$DoubleTextBlue as g, $$ButtonLayout as h, conexionhumana as i, validate_component as v };
