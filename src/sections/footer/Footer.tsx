import LogoSVG from "components/logo/LogoSvg";

/* ─────────────────────────────────────────────
   Footer
───────────────────────────────────────────── */
type FooterLinks = {
  label: string;
  href: string;
};

type FooterColumn = {
  title: string;
  links: Array<FooterLinks>;
};

type FooterProps = {
  footerColumns: Array<FooterColumn>;
};

const Footer = ({ footerColumns }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--bg-tertiary)",
        padding: "4rem 5% 2rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          <div>
            <a
              href="#"
              style={{
                textDecoration: "none",
                display: "inline-block",
                marginBottom: "1rem",
              }}
            >
              <LogoSVG width={280} />
            </a>
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                fontSize: "0.9rem",
                marginBottom: "1.25rem",
              }}
            >
              Strategy, Design & Development. We stand at the intersection of
              strategy, design, and technology.
            </p>
            <div style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>
              <p style={{ marginBottom: "0.5rem" }}>
                📍 Shop #17, PPF Complex, Oloirien, Arusha, Tanzania
              </p>
              <p style={{ marginBottom: "0.5rem" }}>
                📞 +255 767 004 491 / +255 765 342 000
              </p>
              <p style={{ marginBottom: "0.25rem" }}>
                ✉️{" "}
                <a
                  href="mailto:hello@watabelabs.com"
                  style={{ color: "var(--accent-primary)", textDecoration: "none" }}
                >
                  hello@watabelabs.com
                </a>
              </p>
              <p>
                🌐{" "}
                <a
                  href="https://www.watabelabs.com"
                  style={{ color: "var(--accent-primary)", textDecoration: "none" }}
                >
                  www.watabelabs.com
                </a>
              </p>
            </div>
          </div>

          {footerColumns.map((col, i) => (
            <div key={i}>
              <h4
                style={{
                  color: "var(--text-primary)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "1.5rem",
                }}
              >
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {col.links.map((link, j) => (
                  <li key={j} style={{ marginBottom: "0.75rem" }}>
                    <a
                      href={link.href}
                      style={{
                        color: "var(--text-secondary)",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--accent-primary)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-secondary)")
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid var(--bg-tertiary)",
            paddingTop: "2rem",
            textAlign: "center",
            color: "var(--text-secondary)",
            fontSize: "0.875rem",
          }}
        >
          © {currentYear} Watabe Labs Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
