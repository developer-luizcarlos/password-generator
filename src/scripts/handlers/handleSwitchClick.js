export default function handleSwitchClick(e) {
  const switchEl = e.currentTarget;
  const checkbox = switchEl.querySelector("input[type='checkbox']");

  const isChecked = checkbox.checked;

  checkbox.checked = !isChecked;
}
