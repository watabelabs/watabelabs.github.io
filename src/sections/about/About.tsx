import FadeIn from "components/fadein/FadeIn";

type AboutProps = {
  techTags: Array<String>;
};

/* ─────────────────────────────────────────────
   About — white section
───────────────────────────────────────────── */
const About = ({ techTags }: AboutProps) => {
  return (
    <section id="about" style={{ padding: "6rem 5%", background: "#ffffff" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        <FadeIn>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              color: "#0a192f",
              fontWeight: 700,
              marginBottom: "1.5rem",
              lineHeight: 1.2,
            }}
          >
            Technical Excellence Meets Strategic Thinking
          </h2>
          <p
            style={{
              color: "#475569",
              marginBottom: "1.5rem",
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            We combine strategic thinking, thoughtful design, and robust
            engineering to ensure solutions that are both technically sound and
            aligned with business objectives.
          </p>
          <p
            style={{
              color: "#475569",
              marginBottom: "2rem",
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            Our technology stack includes enterprise-grade tools and frameworks
            designed for scalability and security. We deploy load-balanced
            multi-server environments with database replication, CI/CD automated
            deployment pipelines, and secure VPN access with firewall
            protection.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {techTags.map((tag, i) => (
              <span
                key={i}
                style={{
                  background: "rgba(244,150,37,0.08)",
                  color: "#F49625",
                  padding: "0.5rem 1rem",
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  border: "1px solid rgba(244,150,37,0.2)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                width: "100%",
                height: "100%",
                border: "2px solid rgba(244,150,37,0.3)",
                borderRadius: "16px",
                zIndex: 0,
              }}
            />
            <div
              style={{
                background: "#f4f7fb",
                padding: "3rem",
                borderRadius: "16px",
                position: "relative",
                zIndex: 1,
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              }}
            >
              <h3
                style={{
                  color: "#0a192f",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  marginBottom: "1rem",
                }}
              >
                Our Approach
              </h3>
              <p
                style={{
                  color: "#475569",
                  lineHeight: 1.8,
                  marginBottom: "2rem",
                }}
              >
                We adopt Agile methodologies and incremental development
                approaches to deliver high-quality, adaptable, and scalable
                solutions. Security is embedded across our full system lifecycle
                — from architecture to deployment and beyond.
              </p>
              <div
                style={{
                  paddingTop: "2rem",
                  borderTop: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                <p
                  style={{
                    color: "#F49625",
                    fontWeight: 600,
                    fontSize: "1.05rem",
                    fontStyle: "italic",
                  }}
                >
                  "Design is not decoration — it is strategy made visible."
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
