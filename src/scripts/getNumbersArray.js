import { generateSequenceArray } from "./generateSequenceArray.js";

export function getNumbersArray() {
  const numbersArray = generateSequenceArray(0, 9 + 1);

  return numbersArray;
}
