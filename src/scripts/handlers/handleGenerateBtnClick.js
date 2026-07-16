import {
  charsQuantityInput,
  lowercaseCheckbox,
  numbersCheckbox,
  output,
  symbolsCheckbox,
  uppercaseCheckbox,
} from "../elements.js";
import closeNotification from "../closeNotification.js";
import generatePassword from "../generatePassword.js";
import isAnyCheckboxChecked from "../utils/isAnyCheckboxChecked.js";
import isCharsQuantityInRange from "../utils/isCharsQuantityInRange.js";
import isNotificationOpened from "../isNotificationOpened.js";
import showNotification from "../showNotification.js";

const MIN = +charsQuantityInput.min;
const MAX = +charsQuantityInput.max;

export default function handleGenerateBtnClick() {
  if (!isAnyCheckboxChecked()) {
    showNotification("Please, select at least one option");

    return;
  }

  if (!isCharsQuantityInRange()) {
    showNotification(
      `Please, set the password length a value between ${MIN} and ${MAX}`,
    );

    charsQuantityInput.focus();

    return;
  }

  if (isNotificationOpened()) {
    closeNotification();
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
