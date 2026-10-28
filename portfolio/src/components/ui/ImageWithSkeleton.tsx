import { useState } from "react";

interface ImageWithSkeletonProps {
  src?: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fallbackLabel?: string;
}

/**
 * Lazy-loaded image with a skeleton shimmer while loading. If `src` is
 * missing or fails to load, renders a tasteful gradient placeholder with
 * the app's initial/logo label instead of a broken image.
 */
export function ImageWithSkeleton({ src, alt, className = "", width, height, fallbackLabel }: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  const showPlaceholder = !src || errored;

  return (
    <div className={`relative overflow-hidden bg-bg-card ${className}`}>
      {!loaded && !showPlaceholder && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-bg-card via-bg-card-hover to-bg-card" />
      )}
      {showPlaceholder ? (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-teal/20 to-blue/20">
          <span className="font-display text-2xl font-semibold text-text-secondary">
            {fallbackLabel?.slice(0, 2).toUpperCase() ?? "??"}
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={`h-full w-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </div>
  );
}
