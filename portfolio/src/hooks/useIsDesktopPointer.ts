import { useEffect, useState } from "react";

/**
 * Detects fine-pointer, non-touch devices (i.e. desktop with a mouse).
 * Used to gate the custom cursor so it never breaks touch/mobile interaction.
 */
export function useIsDesktopPointer(): boolean {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(pointer: fine)").matches : false,
  );

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isDesktop;
}
