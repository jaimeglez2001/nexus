<script>
  let firstRow = "";
  let secondRow = "";
  let thirdRow = "";
  let fourthRow = "";

  let inputText = "";

  function renderHuella() {
    firstRow = inputText.substring(0, 2);
    secondRow = inputText.substring(2, 5);
    thirdRow = inputText.substring(5, 8);
    fourthRow = inputText.substring(8, 10);
  }
</script>

<section class="main w-full flex items-center flex-col">
  <article class="ctos flex flex-col w-full justify-center items-center mb-20">
    <label for="inputTexto">Ingresa tus fases</label>
    <input
      class="border-2"
      type="text"
      id="inputTexto"
      bind:value={inputText}
      on:input={renderHuella}
    />
  </article>
  <article
    class="fases w-full h-[500px] flex items-center justify-center flex-col mb-40"
  >
    <h4
      class="animated text-[--nexusBlue] text-[300px] leading-[60px] tracking-[-120px]"
      style="white-space: pre-line;"
    >
      {firstRow} <br />
      {secondRow} <br />
      {thirdRow} <br />
      {fourthRow}
    </h4>
  </article>
</section>
