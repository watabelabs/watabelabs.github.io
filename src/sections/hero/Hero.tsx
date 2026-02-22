import "./hero.css";
/* ─────────────────────────────────────────────
   Hero — dark navy with tech grid + glows
───────────────────────────────────────────── */
const Hero: React.FC = () => {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="hero">
      <div className="hero__content">
        <span
          style={{
            color: "#F49625",
            fontWeight: 600,
            fontSize: "0.85rem",
            textTransform: "uppercase",
            letterSpacing: "3px",
            marginBottom: "1.5rem",
            display: "block",
          }}
        >
          Digital Transformation Experts
        </span>

        <h1
          style={{
            fontSize: "clamp(2.8rem, 4.5vw, 4.8rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            color: "#ffffff",
            marginBottom: "1.5rem",
          }}
        >
          We engineer systems that{" "}
          <span style={{ color: "#F49625" }}>enable organizations</span> to
          operate efficiently, transparently, and securely.
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            color: "#8892b0",
            maxWidth: "600px",
            marginBottom: "2.5rem",
            lineHeight: 1.75,
          }}
        >
          Watabe Labs is a premier software development company based in Arusha,
          Tanzania. We bring together senior technologists, system architects,
          and cybersecurity professionals with over a decade of experience
          delivering mission-critical digital systems.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="#services"
            onClick={(e) => scrollTo(e, "#services")}
            style={{
              background: "#F49625",
              color: "#0a192f",
              padding: "1rem 2rem",
              borderRadius: "4px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "1rem",
              border: "2px solid #F49625",
              transition: "all 0.3s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 16px 40px rgba(244,150,37,0.4)";
              e.currentTarget.style.background = "#F7B84B";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.background = "#F49625";
            }}
          >
            Explore Our Work
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "#contact")}
            style={{
              background: "transparent",
              color: "#ccd6f6",
              padding: "1rem 2rem",
              borderRadius: "4px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "1rem",
              border: "2px solid #233554",
              transition: "all 0.3s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#F49625";
              e.currentTarget.style.color = "#F49625";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#233554";
              e.currentTarget.style.color = "#ccd6f6";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
