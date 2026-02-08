export function checkSomeSettingIsSet() {
  const isSomeSettingCheckboxChecked = [
    ...document.querySelectorAll('input[type="checkbox"]'),
  ].some((checkbox) => checkbox.checked);

  return isSomeSettingCheckboxChecked;
}
