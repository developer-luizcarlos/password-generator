import { generateSequenceArray } from "./generateSequenceArray.js";

export function getUpperCaseArray() {
  const upperCaseACodePoint = "A".codePointAt(0);
  const upperCaseZCodePoint = "Z".codePointAt(0);

  const upperCaseLetters = generateSequenceArray(
    upperCaseACodePoint,
    upperCaseZCodePoint + 1,
  ).map((codePoint) => {
    return String.fromCodePoint(codePoint);
  });

  return upperCaseLetters;
}
