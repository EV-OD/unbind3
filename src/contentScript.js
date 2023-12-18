"use strict";

import { sendMessageFromContent, listen } from "./notifier";
import { getFeature, initializeStore } from "./store";
import removeShorts from "./utils/shorts";

window.onload = () => {
  main();
};
listen((msg, sender, sendResponse) => {
  console.log(msg);
  if (msg.type == "Notify") {
    runStateFeature();
  } else if (msg.type == "Refresh") {
    console.log("refresh");
    refresh();
  }
  sendResponse({ response: "success" });
});

let initialState = {
  "youtube-shorts": {
    enabled: false,
    website: "youtube",
    refreshOnOff: true,
  },
  "youtube-comment": {
    enabled: false,
    website: "youtube",
  },
};

const observer = new MutationObserver((mutations) => {
  let shouldRemoveElements = false;
  for (const mutation of mutations) {
    if (mutation.addedNodes.length > 0) {
      shouldRemoveElements = true;
      break;
    }
  }

  if (shouldRemoveElements) {
    runStateFeature();
  }
});

observer.observe(document.body, { childList: true, subtree: true });

function main() {
  initializeStore(initialState);
  runStateFeature();
}

async function runStateFeature() {
  let feature = await getFeature();
  if (feature) {
    console.log(feature);
    if (feature["youtube-shorts"].enabled) {
      removeShorts(feature);
    }
    if (feature["youtube-comment"].enabled) {
      alert("comment");
    }
  }
}

function disableShorts() {
  alert("shorts");
}

function refresh() {
  window.location.reload();
}
