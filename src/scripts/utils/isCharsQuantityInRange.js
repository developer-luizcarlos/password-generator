import { charsQuantityInput } from "../elements.js";

const MIN = +charsQuantityInput.min;
const MAX = +charsQuantityInput.max;

export default function isCharsQuantityInRange() {
  const inputValue = charsQuantityInput.value;

  if (inputValue.trim() === "") {
    return false;
  }

  return +inputValue >= MIN && +inputValue <= MAX;
}
