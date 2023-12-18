import { notifyOthers } from "./notifier";

export async function initializeStore(initialState) {
  const { feature } = await chrome.storage.sync.get(["feature"]);
  if (!feature) {
    setFeature(initialState, () => {
      console.log("done");
    });
    notifyOthers();
  }
}

export function setFeature(obj, func) {
  console.log(obj);
  chrome.storage.sync.set({ feature: obj }).then(() => {
    func();
  });
}

export async function getFeature() {
  const { feature } = await chrome.storage.sync.get(["feature"]);
  return feature;
}
