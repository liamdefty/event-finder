import { getHighlightedParts } from '../utils/textHighlight';

interface HighlightedTextProps {
  text: string;
  query: string;
}

export function HighlightedText({ text, query }: HighlightedTextProps) {
  const parts = getHighlightedParts(text, query);

  return (
    <>
      {parts.map((part, index) =>
        part.isHighlighted ? (
          <mark key={index} className="bg-yellow-200 font-semibold">
            {part.text}
          </mark>
        ) : (
          <span key={index}>{part.text}</span>
        )
      )}
    </>
  );
}
