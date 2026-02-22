import FadeIn from "components/fadein/FadeIn";

type CtaProps = {
  onOpenDialog: () => void;
};

/* ─────────────────────────────────────────────
   CTA — back to dark navy
───────────────────────────────────────────── */
const CTA = ({ onOpenDialog }: CtaProps) => {
  return (
    <section
      id="contact"
      style={{
        padding: "7rem 5%",
        background: "#0a192f",
        backgroundImage: `
          radial-gradient(ellipse at 50% 0%, rgba(244,150,37,0.15) 0%, transparent 60%),
          url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F49625' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
        `,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <FadeIn>
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#ffffff",
              fontWeight: 800,
              marginBottom: "1.5rem",
              lineHeight: 1.2,
            }}
          >
            Ready to transform your digital infrastructure?
          </h2>
          <p
            style={{
              color: "#8892b0",
              fontSize: "1.15rem",
              marginBottom: "2.5rem",
              lineHeight: 1.7,
            }}
          >
            We do not simply build software — we engineer systems that enable
            institutions to operate efficiently, transparently, and securely.
          </p>
          <button
            onClick={onOpenDialog}
            style={{
              background: "#F49625",
              color: "#0a192f",
              padding: "1rem 2.5rem",
              borderRadius: "4px",
              fontWeight: 700,
              fontSize: "1rem",
              border: "2px solid #F49625",
              cursor: "pointer",
              fontFamily: "Inter, sans-serif",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 16px 40px rgba(244,150,37,0.35)";
              e.currentTarget.style.background = "#F7B84B";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.background = "#F49625";
            }}
          >
            Start Your Project
          </button>
        </div>
      </FadeIn>
    </section>
  );
};
export default CTA;
