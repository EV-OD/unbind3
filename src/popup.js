"use strict";

import "./popup.css";
import { notifyOthers, sendMessageFromPopup } from "./notifier";
import { getFeature, setFeature } from "./store";

async function main() {
  let featureUis = document.querySelectorAll(".feature-ui");
  let feature = await getFeature();
  console.log(feature);
  console.log(featureUis, feature);
  featureUis.forEach(async (el) => {
    let uiData = el.dataset.feature;
    console.log(uiData);
    if (feature) {
      el.checked = feature[uiData];
    }
    el.onclick = async () => {
      setFeature({ ...feature, [uiData]: el.checked }, () => {
        notifyOthers();
      });
    };
  });
}

main();
