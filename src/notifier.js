async function sendMessageFromPopup(msg, type) {
  return new Promise((resolve) => {
    if (chrome.tabs) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const tab = tabs[0];
        chrome.tabs.sendMessage(
          tab.id,
          {
            msg: msg,
            type: type ? type : "Message",
          },
          () => {
            resolve();
          }
        );
      });
    }
  });
}

export async function notifyOthers() {
  sendMessageFromPopup("notify", "Notify");
}

async function sendMessageFromContent(msg, type) {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage(
      {
        msg: msg,
        type: type ? type : "Message",
      },
      () => {
        resolve();
      }
    );
  });
}

function listen(func) {
  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    func(request, sender, sendResponse);
    return true;
  });
}

export { sendMessageFromPopup, sendMessageFromContent, listen };
