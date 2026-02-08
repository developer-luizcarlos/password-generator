import { getLowerCaseArray } from "./getLowerCaseArray.js";
import { getUpperCaseArray } from "./getUpperCaseArray.js";
import { getNumbersArray } from "./getNumbersArray.js";
import { getSymbolsArray } from "./getSymbolsArray.js";

const includeUpperCaseLettersCheckbox = document.getElementById(
  "include-uppercase-letters-checkbox",
);
const includeLowerCaseLettersCheckbox = document.getElementById(
  "include-lowercase-letters-checkbox",
);
const includeNumbersCheckbox = document.getElementById(
  "include-numbers-checkbox",
);
const includeSymbolsCheckbox = document.getElementById(
  "include-symbols-checkbox",
);

export function generateCharactersOptions() {
  const options = [];

  if (includeLowerCaseLettersCheckbox.checked) {
    options.push(getLowerCaseArray());
  }

  if (includeUpperCaseLettersCheckbox.checked) {
    options.push(getUpperCaseArray());
  }

  if (includeNumbersCheckbox.checked) {
    options.push(getNumbersArray());
  }

  if (includeSymbolsCheckbox.checked) {
    options.push(getSymbolsArray());
  }

  return options;
}
