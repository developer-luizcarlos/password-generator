import { switches } from "./elements.js";
import handleSwitchClick from "./handlers/handleSwitchClick.js";

if (switches) {
  switches.forEach((el) => {
    el.addEventListener("click", handleSwitchClick);
  });
}
