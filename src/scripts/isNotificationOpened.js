import { notification } from "./elements.js";

export default function isNotificationOpened() {
  return notification.classList.contains("notification--show");
}
