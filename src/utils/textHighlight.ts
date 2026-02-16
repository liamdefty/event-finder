export function getHighlightedParts(
  text: string,
  query: string
): Array<{ text: string; isHighlighted: boolean }> {
  if (!query.trim()) {
    return [{ text, isHighlighted: false }];
  }

  const parts: Array<{ text: string; isHighlighted: boolean }> = [];
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();

  let currentIndex = 0;
  let matchIndex = lowerText.indexOf(lowerQuery, currentIndex);

  while (matchIndex !== -1) {
    if (matchIndex > currentIndex) {
      parts.push({
        text: text.substring(currentIndex, matchIndex),
        isHighlighted: false,
      });
    }

    parts.push({
      text: text.substring(matchIndex, matchIndex + query.length),
      isHighlighted: true,
    });

    currentIndex = matchIndex + query.length;
    matchIndex = lowerText.indexOf(lowerQuery, currentIndex);
  }

  if (currentIndex < text.length) {
    parts.push({
      text: text.substring(currentIndex),
      isHighlighted: false,
    });
  }

  return parts;
}
