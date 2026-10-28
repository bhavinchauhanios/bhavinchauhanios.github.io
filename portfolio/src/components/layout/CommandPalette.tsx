import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navSections } from "../../data/navigation";
import { profile } from "../../data/profile";
import { useTheme } from "../../hooks/useTheme";
import { SearchIcon } from "../ui/icons";

interface Command {
  id: string;
  label: string;
  group: "Navigate" | "Actions";
  action: () => void;
}

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toggleTheme } = useTheme();

  const commands = useMemo<Command[]>(() => {
    const navCommands: Command[] = navSections.map((s) => ({
      id: `nav-${s.id}`,
      label: `Go to ${s.label}`,
      group: "Navigate",
      action: () => {
        document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" });
      },
    }));

    const actionCommands: Command[] = [
      {
        id: "toggle-theme",
        label: "Toggle theme",
        group: "Actions",
        action: toggleTheme,
      },
      {
        id: "copy-email",
        label: `Copy email (${profile.email})`,
        group: "Actions",
        action: () => navigator.clipboard.writeText(profile.email),
      },
      {
        id: "download-cv",
        label: "Download CV",
        group: "Actions",
        action: () => window.open(profile.cvUrl, "_blank", "noopener,noreferrer"),
      },
      {
        id: "whatsapp",
        label: "Message on WhatsApp",
        group: "Actions",
        action: () => window.open(profile.whatsappHref, "_blank", "noopener,noreferrer"),
      },
    ];

    return [...navCommands, ...actionCommands];
  }, [toggleTheme]);

  const filtered = useMemo(() => {
    if (!query.trim()) return commands;
    const q = query.toLowerCase();
    return commands.filter((c) => c.label.toLowerCase().includes(q));
  }, [commands, query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (open) {
      setQuery("");
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const cmd = filtered[activeIndex];
        if (cmd) {
          cmd.action();
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, filtered, activeIndex, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-start justify-center bg-black/60 pt-24 px-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card w-full max-w-md overflow-hidden rounded-lg"
          >
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <SearchIcon className="text-text-muted" width={18} height={18} />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sections or actions…"
                className="w-full bg-transparent text-sm text-text-primary placeholder:text-text-muted outline-none"
                aria-label="Command palette search"
              />
              <kbd className="rounded border border-border px-1.5 py-0.5 text-[10px] text-text-muted">Esc</kbd>
            </div>
            <ul className="max-h-80 overflow-y-auto py-2" role="listbox">
              {filtered.length === 0 && (
                <li className="px-4 py-6 text-center text-sm text-text-muted">No matches</li>
              )}
              {filtered.map((cmd, i) => (
                <li key={cmd.id} role="option" aria-selected={i === activeIndex}>
                  <button
                    onClick={() => {
                      cmd.action();
                      onClose();
                    }}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors ${
                      i === activeIndex ? "bg-bg-card-hover text-text-primary" : "text-text-secondary"
                    }`}
                  >
                    <span>{cmd.label}</span>
                    <span className="text-[10px] uppercase tracking-wide text-text-muted">{cmd.group}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
