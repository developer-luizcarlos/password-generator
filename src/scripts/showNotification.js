import { notification } from "./elements.js";

export default function showNotification(msg) {
  const notificationMsg = notification.querySelector("p");

  notificationMsg.textContent = msg;

  notification.classList.remove("notification--hidden");
  notification.classList.add("notification--show");
}
