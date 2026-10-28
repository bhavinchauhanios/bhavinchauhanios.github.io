import { useEffect, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Cycles through a list of words with a typewriter effect (type -> pause -> delete -> next).
 * Falls back to simply showing the first word when reduced motion is preferred.
 */
export function useTypewriter(words: string[], typingSpeedMs = 70, pauseMs = 1500) {
  const reducedMotion = useReducedMotion();
  const [text, setText] = useState(reducedMotion ? words[0] ?? "" : "");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion || words.length === 0) return;

    const currentWord = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      const nextText = isDeleting ? currentWord.slice(0, text.length - 1) : currentWord.slice(0, text.length + 1);
      timeout = setTimeout(() => setText(nextText), isDeleting ? typingSpeedMs / 2 : typingSpeedMs);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeedMs, pauseMs, reducedMotion]);

  return text;
}
