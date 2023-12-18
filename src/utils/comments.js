export default function removeComments(feature) {
    let website = window.location.href;
    if (feature["youtube-comments"]) {
      if (
        feature["youtube-comments"].enabled &&
        website.includes(feature["youtube-comments"].website)
      ){
        document.body.appendChild(document.createElement('style')).textContent = '.ytd-comments { display: none !important; }';
      }
    }
}
