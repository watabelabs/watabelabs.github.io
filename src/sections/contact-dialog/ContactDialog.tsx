import { useEffect, useState } from "react";
import Field from "components/Field";
import { Service } from "sections/services/Service";

type FormState = {
  name: string;
  email: string;
  organization: string;
  service: string;
  message: string;
};

const emptyForm: FormState = {
  name: "",
  email: "",
  organization: "",
  service: "",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(f: FormState): Partial<Record<keyof FormState, string>> {
  const e: Partial<Record<keyof FormState, string>> = {};
  if (!f.name.trim()) e.name = "Your name is required.";
  if (!f.email.trim()) e.email = "Email address is required.";
  else if (!EMAIL_RE.test(f.email)) e.email = "Enter a valid email address.";
  if (!f.service) e.service = "Please select a service.";
  if (!f.message.trim()) e.message = "Please describe your project.";
  return e;
}

type ContactDialogProps = {
  open: boolean;
  onClose: () => void;
  services: Array<Service>;
};

const ContactDialog: React.FC<ContactDialogProps> = ({
  open,
  onClose,
  services,
}: ContactDialogProps) => {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const serviceOptions = [...services.map((s) => s.title), "Other"];

  /* Close on Escape */
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* Reset form when dialog opens */
  useEffect(() => {
    if (open) {
      setForm(emptyForm);
      setErrors({});
      setStatus("idle");
    }
  }, [open]);

  if (!open) return null;

  const set =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setStatus("submitting");
    try {
      const data = new FormData(e.currentTarget);
      const res = await fetch("https://formspree.io/f/mlgwpjrk", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="dialog-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="dialog-card">
        {/* ── Header ── */}
        <div
          style={{
            background: "linear-gradient(135deg, #0a192f 0%, #112240 100%)",
            padding: "2rem 2rem 1.75rem",
            borderRadius: "20px 20px 0 0",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              background: "linear-gradient(90deg, #F49625, #F7B84B)",
              borderRadius: "20px 20px 0 0",
            }}
          />
          <button
            onClick={onClose}
            aria-label="Close dialog"
            style={{
              position: "absolute",
              top: "1.25rem",
              right: "1.25rem",
              background: "rgba(255,255,255,0.08)",
              border: "none",
              borderRadius: "8px",
              width: "36px",
              height: "36px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s ease",
              color: "#a8b2d1",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.15)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.08)")
            }
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
            >
              <path
                d="M2 2l12 12M14 2L2 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.875rem",
              marginBottom: "0.5rem",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                background:
                  "linear-gradient(135deg, rgba(244,150,37,0.2), rgba(247,184,75,0.1))",
                border: "1px solid rgba(244,150,37,0.3)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.25rem",
              }}
            >
              🚀
            </div>
            <div>
              <h2
                id="dialog-title"
                style={{
                  color: "#ffffff",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                Start Your Project
              </h2>
              <p
                style={{
                  color: "#8892b0",
                  fontSize: "0.8125rem",
                  margin: 0,
                  marginTop: "2px",
                }}
              >
                Tell us about your idea — we'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div style={{ padding: "1.75rem 2rem 2rem" }}>
          {status === "success" ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  background:
                    "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(16,185,129,0.06))",
                  border: "2px solid rgba(16,185,129,0.3)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.25rem",
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M5 14l7 7L23 7"
                    stroke="#10b981"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#0a192f",
                  marginBottom: "0.5rem",
                }}
              >
                Inquiry Sent Successfully!
              </h3>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "0.9375rem",
                  lineHeight: 1.6,
                  marginBottom: "1.75rem",
                }}
              >
                Thank you, <strong>{form.name}</strong>. We've received your
                inquiry and will reach out to <strong>{form.email}</strong>{" "}
                within 24 hours.
              </p>
              <button
                onClick={onClose}
                style={{
                  background: "#0a192f",
                  color: "#ffffff",
                  border: "none",
                  padding: "0.75rem 2rem",
                  borderRadius: "8px",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  cursor: "pointer",
                  transition: "background 0.2s ease",
                  fontFamily: "Inter, sans-serif",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#112240")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#0a192f")
                }
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Honeypot — spam protection */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                style={{
                  display: "none",
                  visibility: "hidden",
                  position: "absolute",
                  left: "-9999px",
                }}
                aria-hidden="true"
              />
              <input
                type="hidden"
                name="_subject"
                value="New Project Inquiry — Watabe Labs"
              />

              <div
                className="dialog-form-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.125rem",
                  marginBottom: "1.125rem",
                }}
              >
                <Field id="name" label="Your Name" required error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={set("name")}
                    className={`dialog-input${errors.name ? " field-error" : ""}`}
                    autoComplete="name"
                  />
                </Field>
                <Field
                  id="email"
                  label="Email Address"
                  required
                  error={errors.email}
                >
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={set("email")}
                    className={`dialog-input${errors.email ? " field-error" : ""}`}
                    autoComplete="email"
                  />
                </Field>
                <Field
                  id="organization"
                  label="Organization"
                  error={errors.organization}
                >
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    placeholder="Your company or institution"
                    value={form.organization}
                    onChange={set("organization")}
                    className="dialog-input"
                    autoComplete="organization"
                  />
                </Field>
                <Field
                  id="service"
                  label="Service Needed"
                  required
                  error={errors.service}
                >
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={set("service")}
                    className={`dialog-input${errors.service ? " field-error" : ""}`}
                    style={{ cursor: "pointer" }}
                  >
                    <option value="" disabled>
                      Select a service…
                    </option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <Field
                  id="message"
                  label="More Information"
                  required
                  error={errors.message}
                >
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Describe your project, goals, timeline, or any specific requirements…"
                    value={form.message}
                    onChange={set("message")}
                    className={`dialog-input${errors.message ? " field-error" : ""}`}
                    style={{ resize: "vertical", minHeight: "110px" }}
                  />
                </Field>
              </div>

              {status === "error" && (
                <div
                  style={{
                    background: "rgba(239,68,68,0.07)",
                    border: "1px solid rgba(239,68,68,0.25)",
                    borderRadius: "8px",
                    padding: "0.75rem 1rem",
                    marginBottom: "1.25rem",
                    fontSize: "0.875rem",
                    color: "#dc2626",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="7"
                      stroke="#dc2626"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8 4.5v4M8 10.5v.01"
                      stroke="#dc2626"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  Something went wrong. Please try again or email us directly at{" "}
                  <a
                    href="mailto:hello@watabelabs.com"
                    style={{ color: "#dc2626", fontWeight: 600 }}
                  >
                    hello@watabelabs.com
                  </a>
                </div>
              )}

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "0.75rem",
                }}
              >
                <button
                  type="button"
                  onClick={onClose}
                  style={{
                    background: "transparent",
                    border: "1.5px solid #e2e8f0",
                    color: "#64748b",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "8px",
                    fontWeight: 600,
                    fontSize: "0.9375rem",
                    cursor: "pointer",
                    fontFamily: "Inter, sans-serif",
                    transition: "border-color 0.2s ease, color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#cbd5e1";
                    e.currentTarget.style.color = "#374151";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#e2e8f0";
                    e.currentTarget.style.color = "#64748b";
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  style={{
                    background: status === "submitting" ? "#d97706" : "#F49625",
                    color: "#0a192f",
                    border: "none",
                    padding: "0.75rem 2rem",
                    borderRadius: "8px",
                    fontWeight: 700,
                    fontSize: "0.9375rem",
                    cursor: status === "submitting" ? "not-allowed" : "pointer",
                    fontFamily: "Inter, sans-serif",
                    transition: "background 0.2s ease, transform 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    minWidth: "140px",
                    justifyContent: "center",
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "submitting")
                      e.currentTarget.style.background = "#F7B84B";
                  }}
                  onMouseLeave={(e) => {
                    if (status !== "submitting")
                      e.currentTarget.style.background = "#F49625";
                  }}
                >
                  {status === "submitting" ? (
                    <>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                        style={{ animation: "spin 0.8s linear infinite" }}
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeOpacity="0.25"
                        />
                        <path
                          d="M12 2a10 10 0 0 1 10 10"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    "Send Inquiry"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactDialog;
