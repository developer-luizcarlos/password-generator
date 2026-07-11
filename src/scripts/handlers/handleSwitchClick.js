export default function handleSwitchClick(e) {
  if (!e.target.classList.contains("switch")) {
    return;
  }

  const element = e.currentTarget;
  const innerCheckbox = element.querySelector("input[type='checkbox']");

  const isChecked = innerCheckbox.checked;

  innerCheckbox.checked = !isChecked;
}
