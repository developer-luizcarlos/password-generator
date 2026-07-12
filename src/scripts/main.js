import { generateBtn, labels, switches } from "./elements.js";
import handleGenerateBtnClick from "./handlers/handleGenerateBtnClick.js";
import handleLabelClick from "./handlers/handleLabelClick.js";
import handleSwitchClick from "./handlers/handleSwitchClick.js";

if (generateBtn) {
  generateBtn.addEventListener("click", handleGenerateBtnClick);
}

if (labels) {
  labels.forEach((el) => {
    el.addEventListener("click", handleLabelClick);
  });
}

if (switches) {
  switches.forEach((el) => {
    el.addEventListener("click", handleSwitchClick);
  });
}
