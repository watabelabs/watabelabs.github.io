import { useEffect, useState } from "react";
import LogoSVG from "components/logo/LogoSvg";

type NavigationPrps = {
  onOpenDialog: () => void;
};

/* ─────────────────────────────────────────────
   Navigation
───────────────────────────────────────────── */
const Navigation = ({ onOpenDialog }: NavigationPrps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "1.25rem 5%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
        background: "rgba(10, 25, 47, 0.97)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(244, 150, 37, 0.12)",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.3)" : "none",
        transition: "box-shadow 0.3s ease",
      }}
    >
      <a
        href="#"
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
        }}
      >
        <LogoSVG animate width={240} />
      </a>

      <ul
        className="nav-links-desktop"
        style={{
          display: "flex",
          gap: "2.5rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {["Services", "About", "Team", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              onClick={(e) => scrollTo(e, `#${item.toLowerCase()}`)}
              style={{
                color: "#a8b2d1",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "0.95rem",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F49625")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#a8b2d1")}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <button
        onClick={onOpenDialog}
        style={{
          background: "transparent",
          border: "2px solid #F49625",
          color: "#F49625",
          padding: "0.65rem 1.5rem",
          borderRadius: "4px",
          fontWeight: 600,
          fontSize: "0.9rem",
          cursor: "pointer",
          fontFamily: "Inter, sans-serif",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#F49625";
          e.currentTarget.style.color = "#0a192f";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "#F49625";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        Start a Project
      </button>
    </nav>
  );
};

export default Navigation;
