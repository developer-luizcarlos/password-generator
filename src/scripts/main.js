import { generatePassword } from "./generatePassword.js";

// DOM Elements
const resultInput = document.getElementById("result");
const copyToClipboardButton = document.getElementById(
  "copy-to-clipboard-button",
);
const passwordLengthInput = document.getElementById("password-length-input");
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
const generatePasswordButton = document.getElementById(
  "generate-password-button",
);

// Listeners
generatePasswordButton.addEventListener("click", () => {
  const password = generatePassword();

  resultInput.value = password;
});

copyToClipboardButton.addEventListener("click", () => {
  const passwordWasGenerated = resultInput.value.trim() !== "";

  if (!passwordWasGenerated) {
    return;
  }

  const password = resultInput.value.trim();

  try {
    navigator.clipboard.writeText(password);

    alert("Copied with success!");
  } catch (error) {
    alert(`An error happened: ${error.message}`);
  }
});
