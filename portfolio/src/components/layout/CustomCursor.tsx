import { useEffect, useRef, useState } from "react";
import { useIsDesktopPointer } from "../../hooks/useIsDesktopPointer";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * Custom cursor that grows on interactive elements. Desktop (fine-pointer) only;
 * falls back to the native cursor on touch devices or reduced-motion preference.
 */
export function CustomCursor() {
  const isDesktop = useIsDesktopPointer();
  const reducedMotion = useReducedMotion();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  useEffect(() => {
    if (!isDesktop || reducedMotion) return;

    document.documentElement.classList.add("custom-cursor-active");
    setIsActive(true);

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      const target = e.target as HTMLElement;
      setIsHoveringInteractive(!!target.closest("a, button, [data-cursor-hover]"));
    };

    let rafId: number;
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      rafId = requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", handleMove);
    rafId = requestAnimationFrame(animateRing);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, [isDesktop, reducedMotion]);

  if (!isDesktop || reducedMotion || !isActive) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[100] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal"
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed top-0 left-0 z-[100] -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal/60 transition-[width,height,opacity] duration-200 ${
          isHoveringInteractive ? "h-10 w-10 opacity-100" : "h-6 w-6 opacity-70"
        }`}
        aria-hidden="true"
      />
    </>
  );
}
