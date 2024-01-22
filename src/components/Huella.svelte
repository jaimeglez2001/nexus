<script>
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
</script>

<div
  class="animated text-[--nexusBlue] text-[600px] leading-[240px] tracking-[-360px] pr-80"
>
  {letter_1}{letter_2}<br />{letter_3}{letter_4}
</div>
