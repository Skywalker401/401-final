export default function referToWikihow(query) {
  let modifiedQuery = query.split(' ').join('+')
  window.open(`https://www.wikihow.com/wikiHowTo?search=${modifiedQuery}`, "_blank");
}