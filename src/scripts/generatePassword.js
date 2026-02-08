import { generateCharactersOptions } from "./generateCharactersOptions.js";
import { getRandomItemFromArray } from "./getRandomItemFromArray.js";
import { checkSomeSettingIsSet } from "./checkSomeSettingsIsSet.js";

const passwordLengthInput = document.getElementById("password-length-input");

export function generatePassword() {
  const passwordRequiredLength = +passwordLengthInput.value;

  if (!checkSomeSettingIsSet()) {
    throw new Error(
      "Please, select at least one type of character to be generated a password",
    );
  }

  const charactersOptions = generateCharactersOptions();

  const passwordCharacters = new Array(passwordRequiredLength).fill(null);

  let characterOptionsIndex = 0;

  for (let i = 0; i < passwordRequiredLength; i++) {
    const charactersAtIndex = charactersOptions[characterOptionsIndex];
    const randomCharacter = getRandomItemFromArray(charactersAtIndex);

    const availableIndexesInPasswordCharacters = passwordCharacters
      .map((_, index) => {
        return index;
      })
      .filter((indexValue) => passwordCharacters[indexValue] === null);

    const randomAvailableIndex = getRandomItemFromArray(
      availableIndexesInPasswordCharacters,
    );

    passwordCharacters[randomAvailableIndex] = randomCharacter;

    characterOptionsIndex =
      characterOptionsIndex >= charactersOptions.length - 1
        ? 0
        : characterOptionsIndex + 1;
  }

  return passwordCharacters.join("");
}
