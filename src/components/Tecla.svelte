<script>
  export let glifo;
  export let interpretacion;
</script>

<section class="letra flex flex-col items-center gap-10">
  <article
    class="glifo flex items-center justify-center size-[240px] border-2 border-black"
  >
    <span class="animated text-[240px] text-[--nexusBlue]">{@html glifo}</span>
  </article>
  <article class="letra flex flex-col gap-4 items-center">
    <article
      class="tecla size-[80px] border-2 border-[--nexusBlue] rounded-lg flex items-center justify-center text-4xl uppercase"
    >
      {@html glifo}
    </article>
    <h4 class="highlight_small">{@html interpretacion}</h4>
  </article>
</section>
