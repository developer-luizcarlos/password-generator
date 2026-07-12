export default function isAnyCheckboxChecked() {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");

  const isAnyChecked = [...checkboxes].some((el) => el.checked);

  return isAnyChecked;
}
