import { useState } from "react";
import { CopyIcon, CheckIcon } from "./icons";
import { profile } from "../../data/profile";

/**
 * Click-to-copy email button with a small toast confirmation.
 */
export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — fail silently, email is still visible as text.
    }
  };

  return (
    <div className="relative inline-flex">
      <button
        onClick={handleCopy}
        className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm text-text-primary transition-colors hover:bg-bg-card-hover"
        aria-live="polite"
      >
        {copied ? <CheckIcon width={16} height={16} className="text-success" /> : <CopyIcon width={16} height={16} />}
        {profile.email}
      </button>
      {copied && (
        <span
          role="status"
          className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-success/90 px-3 py-1 text-xs font-medium text-[#04150a]"
        >
          Copied to clipboard!
        </span>
      )}
    </div>
  );
}
