import { notification } from "./elements.js";

export default function closeNotification() {
  notification.classList.remove("notification--show");
  notification.classList.add("notification--hidden");
}
