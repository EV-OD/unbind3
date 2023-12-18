"use strict";

import { sendMessageFromContent, listen } from "./notifier";
import { getFeature, initializeStore } from "./store";
import removeShorts from "./utils/shorts";
import removeComments from "./utils/comments";
import redirectToSubscription from "./utils/redirectToSubscription";

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
  "youtube-comments": {
    enabled: false,
    website: "youtube",
    refreshOnOff: true,
  },
  "youtube-redirect-to-subscription": {
    enabled: false,
    website: "youtube",
    refreshOnOff: true,
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
    if (feature["youtube-comments"].enabled) {
      removeComments(feature);
    }
    if (feature["youtube-redirect-to-subscription"].enabled) {
      redirectToSubscription(feature);
    }
  }
}

function disableShorts() {
  alert("shorts");
}

function refresh() {
  window.location.reload();
}
