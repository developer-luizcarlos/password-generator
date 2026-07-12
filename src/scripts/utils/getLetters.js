const LETTER_A_LOWERCASE_CODEPOINT = "a".codePointAt(0);

export default function getLetters() {
  let letters = new Array(26).fill(0);

  letters = letters.map((_, index) => {
    const letterCodePoint = LETTER_A_LOWERCASE_CODEPOINT + index;
    const letter = String.fromCodePoint(letterCodePoint);

    return letter;
  });

  return letters;
}
