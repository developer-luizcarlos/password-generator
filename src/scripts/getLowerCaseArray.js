import { generateSequenceArray } from "./generateSequenceArray.js";

export function getLowerCaseArray() {
  const lowerCaseACodePoint = "a".codePointAt(0);
  const lowerCaseZCodePoint = "z".codePointAt(0);

  const lowerCaseLetters = generateSequenceArray(
    lowerCaseACodePoint,
    lowerCaseZCodePoint + 1,
  ).map((codePoint) => {
    return String.fromCodePoint(codePoint);
  });

  return lowerCaseLetters;
}
