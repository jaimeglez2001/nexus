<script>
  import Tecla from "../components/Tecla.svelte";
  import etapas from "../data/etapas.json";

  export let layout;

  let count = 0;

  function countDown() {
    if (count > 0) {
      count--;
    }
  }

  function countUp() {
    if (count < 9) {
      count++;
    }
  }
</script>


{#if layout === "horizontal"}
<main
  class="bg-white px-[120px] py-20 flex flex-col justify-center items-center"
>
  <section class="max-w-[1500px] flex flex-col gap-10 justify-center">
    <section class="ctas flex justify-between">
      <article class="flex flex-col gap-4">
        <h4 class="highlight_small">
          {count + 1} / 10
        </h4>
        <h4>
          Fase de <br />
          <span class="highlight_small text-[40px]">{etapas[count].fase}</span>
        </h4>
      </article>
      <article class="arrows flex gap-4 justify-end items-center">
        <button class="p-4 border-2 border-black" on:click={countDown}>
          <img src="/arrow-left.svg" alt="" class="h-10" />
        </button>
        <button class="p-4 border-2 border-black" on:click={countUp}>
          <img src="/arrow-right.svg" alt="" class="h-10" />
        </button>
      </article>
    </section>
    <section class="info flex gap-10 justify-between">
      <article
        class="text_wrap bg-[--nexusBlue] max-w-[520px] p-10 flex items-end h-full"
      >
        <p class="text-white text-[24px] leading-8 tex-pretty">
          {etapas[count].ejemplo}
        </p>
      </article>
      <article class="tecla flex gap-4">
        <Tecla glifo={etapas[count].letra[0]} interpretacion="Positiva" />
        <Tecla glifo={etapas[count].letra[1]} interpretacion="Neutra" />
        <Tecla glifo={etapas[count].letra[2]} interpretacion="Negativa" />
      </article>
    </section>
  </section>
</main>
{/if}

{#if layout === "vertical"}
<main
  class="bg-white pb-20 flex flex-col justify-center items-center"
>
  <section class="max-w-[1500px] flex flex-col gap-6 justify-center">
    <section class="ctas flex justify-between">
      <article class="flex items-center gap-10">
        <h4 class="highlight_small">
          {count + 1} / 10
        </h4>
        <h4>
          Fase de <br />
          <span class="highlight_small text-[40px]">{etapas[count].fase}</span>
        </h4>
      </article>
      <article class="arrows flex gap-4 justify-end items-center">
        <button class="p-4 border-2 border-black" on:click={countDown}>
          <img src="/arrow-left.svg" alt="" class="h-5" />
        </button>
        <button class="p-4 border-2 border-black" on:click={countUp}>
          <img src="/arrow-right.svg" alt="" class="h-5" />
        </button>
      </article>
    </section>
    <section class="info flex flex-col gap-6 justify-between max-w-[760px]">
      <article
        class="text_wrap bg-[--nexusBlue] w-full p-10 flex items-end h-full"
      >
        <p class="text-white text-[18px] leading-6 tex-pretty">
          {etapas[count].ejemplo}
        </p>
      </article>
      <article class="tecla flex gap-4">
        <Tecla glifo={etapas[count].letra[0]} interpretacion="Positiva" />
        <Tecla glifo={etapas[count].letra[1]} interpretacion="Neutra" />
        <Tecla glifo={etapas[count].letra[2]} interpretacion="Negativa" />
      </article>
    </section>
  </section>
</main>
{/if}