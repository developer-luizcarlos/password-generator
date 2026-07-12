import { charsQuantityInput } from "./elements.js";
import getIndexesWithNullValue from "./utils/getIndexesWithNullValue.js";
import getLetters from "./utils/getLetters.js";
import getNumberRange from "./utils/getNumberRange.js";
import getRandomItemFromArray from "./utils/getRandomItemFromArray.js";
import getSymbols from "./utils/getSymbols.js";
import hasArrayNullValue from "./utils/hasArrayNullValue.js";

const MIN = +charsQuantityInput.min;
const MAX = +charsQuantityInput.max;

/**
 *
 * @param {Number} length
 * @param {{ symbols: boolean, numbers: boolean, lowercase: boolean, uppercase:boolean }} options
 * @returns {String}
 */
export default function generatePassword(length, options) {
  const isValidLength = length >= MIN && length <= MAX;

  const properties = Object.getOwnPropertyNames(options);
  const isAnyPropertyTrue = properties.some((prop) => options[prop]);

  if (!isValidLength) {
    throw new Error(`Length must be between ${MIN} and ${MAX}`);
  }

  if (!isAnyPropertyTrue) {
    throw new Error(`At least one options' property must be true`);
  }

  const password = new Array(length).fill(null);
  const availableChars = [];

  if (options.symbols) {
    const symbols = getSymbols();

    availableChars.push(symbols);
  }

  if (options.numbers) {
    const numbers = getNumberRange(0, 9);

    availableChars.push(numbers);
  }

  if (options.lowercase) {
    const lowercaseLetters = getLetters();

    availableChars.push(lowercaseLetters);
  }

  if (options.uppercase) {
    const uppercaseLetters = getLetters().map((letter) => letter.toUpperCase());

    availableChars.push(uppercaseLetters);
  }

  let charTypeIndex = 0;

  while (hasArrayNullValue(password)) {
    const indexes = getIndexesWithNullValue(password);
    const randomIndex = getRandomItemFromArray(indexes);

    const charType = availableChars[charTypeIndex];
    const randomChar = getRandomItemFromArray(charType);

    password[randomIndex] = randomChar;

    charTypeIndex =
      charTypeIndex >= availableChars.length - 1 ? 0 : charTypeIndex + 1;
  }

  return password.join("");
}
