// export default function redirectToSubscription(feature) {
//   let website = window.location.href;
//   if (feature["youtube-redirect-to-subscription"]) {
//     if (
//       feature["youtube-redirect-to-subscription"].enabled &&
//       website.includes(feature["youtube-redirect-to-subscription"].website)
//     ) {
//       if (window.location.href === "https://www.youtube.com/") {
//         var subscriptionURL =
//           window.location.protocol +
//           "//" +
//           window.location.host +
//           "/feed/subscriptions";
//         window.location.replace(subscriptionURL);
//       }
//     }
//   }
// }

export default function redirectToSubscription(feature) {
  let website = window.location.href;

  if (feature["youtube-redirect-to-subscription"]) {
    if (
      feature["youtube-redirect-to-subscription"].enabled &&
      website.includes(feature["youtube-redirect-to-subscription"].website)
    ) {
      var currentURL = window.location.href;
      if (currentURL == "https://www.youtube.com/") {
        var subscriptionURL =
          window.location.protocol +
          "//" +
          window.location.host +
          "/feed/subscriptions";
        window.location.replace(subscriptionURL);
      }
      //   if (!/\/subscriptions$/.test(currentURL)) {
      //     var subscriptionURL =
      //       window.location.protocol +
      //       "//" +
      //       window.location.host +
      //       "/feed/subscriptions";

      //     window.location.replace(subscriptionURL);
      //   }
    }
  }
}
