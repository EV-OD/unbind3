import { notifyOthers } from "./notifier";

chrome.history.onVisited.addListener(() => {
  notifyOthers();
});
