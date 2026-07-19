import { output } from "../elements.js";
import showNotification from "../showNotification.js";

export default function handleCopyBtnClick() {
  const hasOutputText = output.textContent !== "";

  if (!hasOutputText) {
    return;
  }

  try {
    navigator.clipboard.writeText(output.textContent);

    showNotification("Copied to the clipboard");
  } catch (error) {
    const errorMsg = `Could not copy password to clipboard due to the following error: ${error}`;

    showNotification(errorMsg);

    console.error(error);
  }
}
