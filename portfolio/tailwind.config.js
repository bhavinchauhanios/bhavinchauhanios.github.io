/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        "bg-elevated": "var(--color-bg-elevated)",
        "bg-card": "var(--color-bg-card)",
        "bg-card-hover": "var(--color-bg-card-hover)",
        border: "var(--color-border)",
        "border-strong": "var(--color-border-strong)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-muted": "var(--color-text-muted)",
        teal: "var(--color-accent-teal)",
        blue: "var(--color-accent-blue)",
        warm: "var(--color-accent-warm)",
        success: "var(--color-success)",
        danger: "var(--color-danger)",
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: "var(--fs-xs)",
        sm: "var(--fs-sm)",
        base: "var(--fs-base)",
        lg: "var(--fs-lg)",
        xl: "var(--fs-xl)",
        "2xl": "var(--fs-2xl)",
        "3xl": "var(--fs-3xl)",
        "4xl": "var(--fs-4xl)",
        "5xl": "var(--fs-5xl)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        "glow-teal": "var(--shadow-glow-teal)",
        "glow-blue": "var(--shadow-glow-blue)",
        glass: "var(--glass-glow)",
      },
      maxWidth: {
        content: "var(--max-width)",
      },
      transitionTimingFunction: {
        "out-expo": "var(--ease-out-expo)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(4%, -6%) scale(1.05)" },
          "66%": { transform: "translate(-3%, 4%) scale(0.98)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 0 0 rgba(34, 197, 94, 0.5)" },
          "50%": { opacity: "0.7", boxShadow: "0 0 0 6px rgba(34, 197, 94, 0)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        aurora: "aurora 22s ease-in-out infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
