import FadeIn from "components/fadein/FadeIn";

type TeamMember = {
  icon: string;
  title: string;
  description: string;
};

type TeamProps = {
  teamMembers: Array<TeamMember>;
};

/* ─────────────────────────────────────────────
   Team — light section
───────────────────────────────────────────── */
const Team: React.FC<TeamProps> = ({ teamMembers }) => {
  return (
    <section id="team" style={{ padding: "6rem 5%", background: "#f4f7fb" }}>
      <FadeIn>
        <div
          style={{
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto 4rem",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              color: "#0a192f",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            Our Multidisciplinary Team
          </h2>
          <p style={{ color: "#64748b", fontSize: "1.1rem", lineHeight: 1.7 }}>
            Together, we combine strategic leadership with deep technical
            execution.
          </p>
        </div>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {teamMembers.map((member, i) => (
          <FadeIn key={i}>
            <div
              style={{
                background: "#ffffff",
                textAlign: "center",
                padding: "2rem 1.5rem",
                borderRadius: "16px",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(244,150,37,0.12)";
                e.currentTarget.style.borderColor = "rgba(244,150,37,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
              }}
            >
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  background:
                    "linear-gradient(135deg, rgba(244,150,37,0.1), rgba(50,182,228,0.08))",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.25rem",
                  fontSize: "2rem",
                  border: "2px solid rgba(244,150,37,0.15)",
                }}
              >
                {member.icon}
              </div>
              <h4
                style={{
                  color: "#0a192f",
                  fontSize: "1rem",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                }}
              >
                {member.title}
              </h4>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "0.875rem",
                  lineHeight: 1.5,
                }}
              >
                {member.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
export default Team;
