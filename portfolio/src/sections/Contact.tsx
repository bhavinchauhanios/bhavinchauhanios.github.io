import { CopyEmailButton } from "../components/ui/CopyEmailButton";
import { ContactForm } from "../components/ui/ContactForm";
import { profile } from "../data/profile";
import { LinkedinIcon, WhatsappIcon, ArrowUpRightIcon } from "../components/ui/icons";

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL as string | undefined;

export function Contact() {
  return (
    <section id="contact" className="section-y">
      <div className="container-content">
        <h2 className="font-display text-3xl font-semibold text-text-primary sm:text-4xl">
          Let's build your next mobile app.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <p className="text-text-secondary">
              Send details about your app, or book time directly on my calendar. I typically reply within one
              business day.
            </p>

            <CopyEmailButton />

            <div className="flex flex-wrap gap-3">
              <a
                href={profile.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm text-text-primary hover:bg-bg-card-hover"
              >
                <WhatsappIcon width={16} height={16} /> WhatsApp
              </a>
              <a
                href={profile.socials.find((s) => s.icon === "linkedin")?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm text-text-primary hover:bg-bg-card-hover"
              >
                <LinkedinIcon width={16} height={16} /> LinkedIn
              </a>
            </div>

            <div className="glass-card rounded-lg p-5">
              <h3 className="font-display text-base font-semibold text-text-primary">Book a call</h3>
              {CALENDLY_URL ? (
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal to-blue px-5 py-2.5 text-sm font-medium text-[#04110e]"
                >
                  Open Calendly <ArrowUpRightIcon width={16} height={16} />
                </a>
              ) : (
                <p className="mt-2 text-sm text-text-muted">
                  Calendly placeholder — set <code>VITE_CALENDLY_URL</code> in your .env to enable direct booking.
                </p>
              )}
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
