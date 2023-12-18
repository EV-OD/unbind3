export default function removeShorts(feature) {
  let website = window.location.href;
  if (feature["youtube-shorts"]) {
    if (
      feature["youtube-shorts"].enabled &&
      website.includes(feature["youtube-shorts"].website)
    ) {
      const shortsButton = document.querySelector(
        'ytd-mini-guide-entry-renderer[aria-label="Shorts"]'
      );
      if (shortsButton) {
        shortsButton.remove();
      }

      const carousels = document.querySelectorAll(
        "ytd-rich-section-renderer, ytd-reel-shelf-renderer"
      );
      carousels.forEach((carousel) => {
        carousel.remove();
      });

      const otherShortsButtons = document.querySelectorAll('[title="Shorts"]');
      otherShortsButtons.forEach((node) => node.remove());

      let shortArea = findShortsAnchors();
      shortArea.forEach((elt) => {
        elt.parentElement.parentElement.parentElement.remove();
      });
    }
  }
}

function findShortsAnchors() {
  var allAnchors = document.querySelectorAll("a");

  var shortsAnchors = Array.from(allAnchors).filter(function (anchor) {
    return (
      anchor.getAttribute("href") &&
      anchor.getAttribute("href").startsWith("/shorts/")
    );
  });

  return shortsAnchors;
}
