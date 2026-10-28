import { useEffect, useRef } from "react";

const KONAMI_SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

/**
 * Listens for the classic Konami code and fires the callback on match.
 */
export function useKonamiCode(onActivate: () => void) {
  const positionRef = useRef(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const expected = KONAMI_SEQUENCE[positionRef.current];
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === expected) {
        positionRef.current += 1;
        if (positionRef.current === KONAMI_SEQUENCE.length) {
          positionRef.current = 0;
          onActivate();
        }
      } else {
        positionRef.current = key === KONAMI_SEQUENCE[0] ? 1 : 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onActivate]);
}
