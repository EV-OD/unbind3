"use strict";

import "./popup.css";
import { notifyOthers, sendMessageFromPopup } from "./notifier";
import { getFeature, setFeature } from "./store";
async function main() {
  let featureUis = document.querySelectorAll(".feature-ui");
  let feature = await getFeature();
  featureUis.forEach(async (el) => {
    let uiData = el.dataset.feature;
    if (feature) {
      el.checked = feature[uiData].enabled;
    }
    el.onclick = async () => {
      let realFeature = await getFeature();
      realFeature[uiData].enabled = el.checked;
      setFeature(realFeature, () => {
        notifyOthers();
        if (el.checked == false && realFeature[uiData].refreshOnOff) {
          sendMessageFromPopup("refresh", "Refresh");
        }
      });
    };
  });
}


document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("toggleDarkTheme");

  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
  });
});

main();
