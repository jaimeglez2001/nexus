<script>
  import etapas from "../data/etapas.json";

  let count = 0;
  let HUELLA = [];
  let firstRow = "";
  let secondRow = "";
  let thirdRow = "";
  let fourthRow = "";

  function renderVacio() {
    if (HUELLA.length < 9) {
      HUELLA.push("");
      count++;
      console.log(count);
    }
  }

  function clear() {
    firstRow = "";
    secondRow = "";
    thirdRow = "";
    fourthRow = "";
    count = 0;
  }

  function volverAtras() {
    if (HUELLA.length > 0 && count > 0) {
      HUELLA.pop();
      count--;

      firstRow = HUELLA.slice(0, 2).join("");
      secondRow = HUELLA.slice(2, 5).join("");
      thirdRow = HUELLA.slice(5, 8).join("");
      if (count === 8 || count === 9) {
        fourthRow = HUELLA.slice(8, 10).join("");
      } else {
        fourthRow = "";
      }
      console.log(count);
      console.log(firstRow);
      console.log(secondRow);
      console.log(thirdRow);
      console.log(fourthRow);
    }
  }

  let Storage = [];

  function renderHuella(caracter) {
    HUELLA.push(etapas[count].letra[caracter]);

    if (HUELLA.length <= 2) {
      firstRow += etapas[count].letra[caracter];
      count++;
    }
    if (HUELLA.length > 2 && HUELLA.length <= 5) {
      secondRow += etapas[count].letra[caracter];
      count++;
    }
    if (HUELLA.length > 5 && HUELLA.length <= 8) {
      thirdRow += etapas[count].letra[caracter];
      count++;
    }
    if (HUELLA.length > 8) {
      if (fourthRow.length < 2) {
        fourthRow += etapas[count].letra[caracter];
      }
      if (count < 9) {
        count++;
      }
    }

    console.log(count);
    console.log(firstRow);
    console.log(secondRow);
    console.log(thirdRow);
    console.log(fourthRow);
  }
</script>

<section class="flex flex-col gap-40 items-center">
  <article class="ctos flex gap-10">
    <button on:click={clear} class="flex gap-4 items-center"> Limpiar</button>
    <button on:click={volverAtras} class="flex gap-4 items-center">
      Volver Atrás</button
    >
  </article>

  <h4
    class="line_1 animated text-[--nexusBlue] text-[300px] leading-[60px] tracking-[-120px]"
    style="white-space: pre-line;"
  >
    {@html firstRow} <br />
    {@html secondRow} <br />
    {@html thirdRow} <br />
    {@html fourthRow}
  </h4>
</section>

<h1 class="text-3xl mb-6 mt-40">{etapas[count].pregunta}</h1>
<h3 class="text-gray-400 text-center max-w-[1024px] text-xl mb-10">
  {etapas[count].ejemplo}
</h3>
<article class="ctas flex gap-10 mb-20">
  <button on:click={() => renderHuella(0)} class="p-4 text-xl border-2"
    >{etapas[count].respuesta[0]}</button
  >
  <button on:click={() => renderHuella(1)} class="p-4 text-xl border-2"
    >{etapas[count].respuesta[1]}</button
  >
  <button on:click={() => renderHuella(2)} class="p-4 text-xl border-2"
    >{etapas[count].respuesta[2]}</button
  >
  <button on:click={renderVacio} class="p-4 text-xl border-2">Ninguno</button>
</article>
