import { labels, switches } from "./elements.js";
import handleLabelClick from "./handlers/handleLabelClick.js";
import handleSwitchClick from "./handlers/handleSwitchClick.js";

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
