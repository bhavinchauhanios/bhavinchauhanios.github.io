import { useState, type FormEvent } from "react";

const PROJECT_TYPES = ["iOS App", "Cross-platform App", "AI Integration", "Consulting", "Other"];
const BUDGET_RANGES = ["< $2k", "$2k–$5k", "$5k–$15k", "$15k+", "Not sure yet"];

interface FormState {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
  honeypot: string; // should always stay empty; bots tend to fill every field
}

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  projectType: PROJECT_TYPES[0],
  budget: BUDGET_RANGES[0],
  message: "",
  honeypot: "",
};

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

function validate(state: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!state.name.trim()) errors.name = "Please enter your name.";
  if (!state.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!state.message.trim() || state.message.trim().length < 10) {
    errors.message = "Tell me a bit more about your project (10+ characters).";
  }
  return errors;
}

export function ContactForm() {
  const [state, setState] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleChange = (field: keyof FormState, value: string) => {
    setState((s) => ({ ...s, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Honeypot check — if filled, silently reject as spam without alerting the bot.
    if (state.honeypot) {
      setStatus("success");
      return;
    }

    const validationErrors = validate(state);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    if (!FORM_ENDPOINT) {
      // No endpoint configured — tell the developer clearly instead of failing silently.
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: state.name,
          email: state.email,
          projectType: state.projectType,
          budget: state.budget,
          message: state.message,
        }),
      });

      if (!res.ok) throw new Error("Form submission failed");
      setStatus("success");
      setState(INITIAL_STATE);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card gradient-border rounded-lg p-6 sm:p-8" noValidate>
      {/* Honeypot field — hidden from real users, visible to bots */}
      <input
        type="text"
        name="company"
        value={state.honeypot}
        onChange={(e) => handleChange("honeypot", e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-text-secondary">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={state.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full rounded-md border border-border bg-bg-card px-3.5 py-2.5 text-sm text-text-primary outline-none focus:border-teal"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-danger">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm text-text-secondary">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={state.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full rounded-md border border-border bg-bg-card px-3.5 py-2.5 text-sm text-text-primary outline-none focus:border-teal"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-danger">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <span className="mb-1.5 block text-sm text-text-secondary">Project type</span>
        <div className="flex flex-wrap gap-2">
          {PROJECT_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => handleChange("projectType", type)}
              className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                state.projectType === type
                  ? "bg-gradient-to-r from-teal to-blue text-[#04110e] font-medium"
                  : "border border-border text-text-secondary hover:text-text-primary"
              }`}
              aria-pressed={state.projectType === type}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="budget" className="mb-1.5 block text-sm text-text-secondary">
          Budget range
        </label>
        <select
          id="budget"
          value={state.budget}
          onChange={(e) => handleChange("budget", e.target.value)}
          className="w-full rounded-md border border-border bg-bg-card px-3.5 py-2.5 text-sm text-text-primary outline-none focus:border-teal"
        >
          {BUDGET_RANGES.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block text-sm text-text-secondary">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={state.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className="w-full rounded-md border border-border bg-bg-card px-3.5 py-2.5 text-sm text-text-primary outline-none focus:border-teal"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-danger">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-full bg-gradient-to-r from-teal to-blue px-6 py-3 text-sm font-medium text-[#04110e] transition-transform hover:scale-[1.02] disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      <p className="mt-3 text-center text-xs text-text-muted">Typically replies within one business day.</p>

      {status === "success" && (
        <p role="status" className="mt-3 rounded-md bg-success/10 px-4 py-2 text-center text-sm text-success">
          Thanks! Your message is on its way — I'll get back to you within a business day.
        </p>
      )}
      {status === "error" && !FORM_ENDPOINT && (
        <p role="alert" className="mt-3 rounded-md bg-warm/10 px-4 py-2 text-center text-sm text-warm">
          Form endpoint not configured yet. Set VITE_FORM_ENDPOINT in your .env file (see README).
        </p>
      )}
      {status === "error" && FORM_ENDPOINT && (
        <p role="alert" className="mt-3 rounded-md bg-danger/10 px-4 py-2 text-center text-sm text-danger">
          Something went wrong sending your message. Please try again or email me directly.
        </p>
      )}
    </form>
  );
}
