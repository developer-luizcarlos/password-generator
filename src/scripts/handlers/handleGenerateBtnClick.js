import {
  charsQuantityInput,
  lowercaseCheckbox,
  numbersCheckbox,
  output,
  symbolsCheckbox,
  uppercaseCheckbox,
} from "../elements.js";
import generatePassword from "../generatePassword.js";
import isAnyCheckboxChecked from "../utils/isAnyCheckboxChecked.js";
import isCharsQuantityInRange from "../utils/isCharsQuantityInRange.js";

const MIN = +charsQuantityInput.min;
const MAX = +charsQuantityInput.max;

export default function handleGenerateBtnClick() {
  if (!isAnyCheckboxChecked()) {
    alert("Please, select at least one option");

    return;
  }

  if (!isCharsQuantityInRange()) {
    alert(`Please, set the password length a value between ${MIN} and ${MAX}`);

    charsQuantityInput.focus();

    return;
  }

  const length = +charsQuantityInput.value;
  const options = {
    symbols: symbolsCheckbox.checked,
    numbers: numbersCheckbox.checked,
    lowercase: lowercaseCheckbox.checked,
    uppercase: uppercaseCheckbox.checked,
  };

  const password = generatePassword(length, options);

  output.textContent = password;
}
