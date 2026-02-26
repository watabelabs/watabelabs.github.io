import { useEffect, useState, useCallback } from "react";
import LogoSVG from "components/logo/LogoSvg";
import ThemeToggle from "components/ThemeToggle";

type NavigationPrps = {
  onOpenDialog: () => void;
};

const navItems = ["Services", "About", "Team", "Contact"];

/* ─────────────────────────────────────────────
   Navigation
───────────────────────────────────────────── */
const Navigation = ({ onOpenDialog }: NavigationPrps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuAnimating, setMenuAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileMenuOpen(false);
      setMenuAnimating(false);
      document
        .querySelector(href)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [],
  );

  const handleMenuClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    scrollTo(e, href);
  };

  const toggleMenu = () => {
    if (!mobileMenuOpen) {
      setMobileMenuOpen(true);
      setMenuAnimating(true);
    } else {
      setMenuAnimating(false);
      setTimeout(() => setMobileMenuOpen(false), 300);
    }
  };

  return (
    <>
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
          background: "#0a192f",
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

        {/* Desktop Nav Links */}
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
          {navItems.map((item) => (
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

        {/* Theme Toggle */}
        <div style={{ marginRight: "1rem" }}>
          <ThemeToggle />
        </div>

        {/* Desktop CTA Button */}
        <button
          onClick={onOpenDialog}
          className="nav-cta-desktop"
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

        {/* Hamburger Menu Button - Mobile */}
        <button
          className="hamburger-btn"
          onClick={toggleMenu}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "var(--text-primary)",
            fontSize: "2.8rem",
            cursor: "pointer",
            padding: "0.5rem",
            width: "60px",
            height: "60px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            className="hamburger-icon"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            {menuAnimating ? "✕" : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#0a192f",
            zIndex: 999,
            animation: menuAnimating
              ? "overlayFadeIn 0.3s ease forwards"
              : "overlayFadeOut 0.3s ease forwards",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "#0a192f",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
              borderRight: "1px solid rgba(244, 150, 37, 0.3)",
              animation: menuAnimating
                ? "slideInLeft 0.3s ease forwards"
                : "slideOutLeft 0.3s ease forwards",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                textAlign: "center",
              }}
            >
              {navItems.map((item, index) => (
                <li
                  key={item}
                  style={{
                    margin: "1.5rem 0",
                    opacity: 0,
                    animation: menuAnimating
                      ? `menuItemFadeIn 0.4s ease forwards ${index * 0.1 + 0.15}s`
                      : "menuItemFadeOut 0.2s ease forwards",
                  }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) =>
                      handleMenuClick(e, `#${item.toLowerCase()}`)
                    }
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      fontWeight: 600,
                      fontSize: "1.5rem",
                      transition: "color 0.3s ease",
                      display: "block",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#F49625")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                toggleMenu();
                onOpenDialog();
              }}
              style={{
                background: "#F49625",
                border: "2px solid #F49625",
                color: "#0a192f",
                padding: "1rem 2rem",
                borderRadius: "4px",
                fontWeight: 700,
                fontSize: "1rem",
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                marginTop: "1rem",
                opacity: 0,
                animation: menuAnimating
                  ? `menuItemFadeIn 0.4s ease forwards ${navItems.length * 0.1 + 0.15}s`
                  : "menuItemFadeOut 0.2s ease forwards",
              }}
            >
              Start a Project
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes overlayFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes overlayFadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideOutLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        @keyframes menuItemFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes menuItemFadeOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
          }
        }

        .hamburger-icon {
          animation: hamburgerIconChange 0.25s ease;
        }

        @keyframes hamburgerIconChange {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(-45deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @media (max-width: 768px) {
          .nav-links-desktop {
            display: none !important;
          }
          .nav-cta-desktop {
            display: none !important;
          }
          .hamburger-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;
