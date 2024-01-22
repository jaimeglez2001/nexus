<script>
  import { onMount } from "svelte";

  export let nav;

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
    "-",
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

  const setActiveClass = (path) => {
    return path === currentPath ? "active" : "";
  };

  onMount(() => {
    currentPath = window.location.pathname;
  });
</script>

<nav class="main fixed w-full bg-white border-b-2 border-gray-200 items-center">
  <div class="flex gap-20 items-center justify-between pr-10">
    <article
      class="bg-[--nexusBlue] pr-6 py-10 flex items-center justify-center w-[140px]"
    >
      <a href="/">
        <h1
          class="font-[Connect] font-[1000] text-white text-[60px] tracking-[-30px] leading-[0px] p-4 w-full"
        >
          {letter_1}{letter_2} <br />
          {letter_3}{letter_4}
        </h1>
      </a>
    </article>
    <ul class="flex gap-10 items-center">
      <li>
        <a href="/">
          <button
            class="p-4 hover:bg-[--nexusBlue] hover:text-white h-full {setActiveClass(
              '/'
            )}"
          >
            Home
          </button>
        </a>
      </li>
      <li>
        <a href="conexionhumana">
          <button
            class="p-4 hover:bg-[--nexusBlue] hover:text-white h-full {setActiveClass(
              '/conexionhumana'
            )}"
          >
            Conexiones Humanas
          </button>
        </a>
      </li>
      <li>
        <a href="relacionesinterpersonales">
          <button
            class="p-4 hover:bg-[--nexusBlue] hover:text-white h-full {setActiveClass(
              '/relacionesinterpersonales'
            )}"
          >
            Relaciones Interpersonales
          </button>
        </a>
      </li>
      <li>
        <a href="proxemica">
          <button
            class="p-4 hover:bg-[--nexusBlue] hover:text-white h-full {setActiveClass(
              '/proxemica'
            )}"
          >
            Proxémica
          </button>
        </a>
      </li>
      <li>
        <a href="nexus">
          <button
            class="p-4 hover:bg-[--nexusBlue] hover:text-white h-full {setActiveClass(
              '/nexus'
            )}"
          >
            Nexus
          </button>
        </a>
      </li>
      <li>
        <a href="herramienta">
          <button
            class="p-4 hover:bg-[--nexusBlue] hover:text-white h-full {setActiveClass(
              '/herramienta'
            )}"
          >
            Crea tu huella
          </button>
        </a>
      </li>
    </ul>
  </div>
</nav>

<style>
  .main {
    z-index: 1;
  }
  ul {
    height: 100%;
  }

  .active {
    background-color: var(--nexusBlue);
    color: white;
  }
</style>
