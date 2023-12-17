"use strict";

import { sendMessageFromContent, listen } from "./notifier";
import { getFeature, initializeStore } from "./store";

window.onload = () => {
  main();
};
listen((msg, sender, sendResponse) => {
  console.log(msg);
  if (msg.type == "Notify") {
    runStateFeature();
  }
  sendResponse({ response: "success" });
});

function main() {
  initializeStore();
  runStateFeature();
}

async function runStateFeature() {
  let feature = await getFeature();
  console.log(feature);
  if (feature) {
    if (feature.alerter) {
      alerter();
    }
  }
}

function alerter() {
  alert("hello");
}
