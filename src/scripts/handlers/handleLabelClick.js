export default function handleLabelClick(e) {
  const label = e.currentTarget;

  const relatedCheckboxId = label.getAttribute("for");

  const checkbox = document.getElementById(relatedCheckboxId);

  const isChecked = checkbox.checked;

  checkbox.checked = !isChecked;
}
