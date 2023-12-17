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

let initialState = {
  alerter: false,
};
function main() {
  initializeStore(initialState);
  runStateFeature();
}

async function runStateFeature() {
  let feature = await getFeature();
  if (feature) {
    if (feature.alerter) {
      alerter();
    }
  }
}

function alerter() {
  alert("hello");
}
