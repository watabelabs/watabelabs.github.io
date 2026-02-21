import { useEffect, useRef, useState, useId, type ReactNode } from "react";

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
interface Service {
  icon: string;
  number: string;
  title: string;
  tagline: string;
  items: string[];
}

const services: Service[] = [
  {
    icon: "💻",
    number: "01",
    title: "Enterprise Software Development",
    tagline:
      "Scalable, mission-critical platforms built for governments and institutions.",
    items: [
      "Financial Accounting & Reporting Systems",
      "Planning & Budgeting Platforms",
      "Monitoring & Evaluation Systems",
      "Health Information Systems",
      "Revenue Collection Platforms",
      "Microservice & Monolithic Architectures",
    ],
  },
  {
    icon: "🎨",
    number: "02",
    title: "Web Design & Development",
    tagline: "Purposeful digital experiences that convert, engage, and last.",
    items: [
      "Corporate Website Design",
      "Government & Institutional Portals",
      "Custom Web Application Development",
      "UI/UX Strategy & Prototyping",
      "Responsive & Mobile-Optimized Design",
      "API-Driven Web Systems",
    ],
  },
  {
    icon: "📊",
    number: "03",
    title: "Data Processing & Analytics",
    tagline: "Transform raw data into decisions with real-time intelligence.",
    items: [
      "Data Warehouse Development",
      "ETL Pipeline Architecture",
      "Real-Time Dashboards & KPI Systems",
      "Monitoring & Evaluation Frameworks",
      "Data Governance & Quality Assurance",
      "Statistical Analysis & Reporting",
    ],
  },
  {
    icon: "🔗",
    number: "04",
    title: "Systems Integration",
    tagline: "Seamless interoperability across your entire digital ecosystem.",
    items: [
      "RESTful & GraphQL APIs",
      "Secure Interoperability Gateways",
      "Protocol Mediation (HTTP, AMQP)",
      "Government e-Payment Integration",
      "Cross-Platform System Integration",
      "Middleware Architecture",
    ],
  },
  {
    icon: "🔒",
    number: "05",
    title: "Information Security",
    tagline: "Embed security at every layer — from architecture to deployment.",
    items: [
      "Vulnerability Assessments",
      "Penetration Testing",
      "ISO 27000-Aligned Security Policies",
      "Encryption & Access Control",
      "Secure Infrastructure Design",
      "Disaster Recovery Strategy",
    ],
  },
  {
    icon: "📚",
    number: "06",
    title: "Consultancy & Training",
    tagline: "Strategic guidance and capacity building for your team.",
    items: [
      "ICT Strategy Development",
      "Enterprise Architecture Design",
      "Systems Audit & Optimization",
      "End-User Training (Onsite & Virtual)",
      "Technical Team Capacity Building",
      "Documentation & Knowledge Repositories",
    ],
  },
  {
    icon: "🤖",
    number: "07",
    title: "Artificial Intelligence & ML",
    tagline: "Intelligent systems that learn, adapt, and automate at scale.",
    items: [
      "Machine Learning Model Development",
      "Natural Language Processing",
      "Predictive Analytics & Forecasting",
      "AI-Powered Process Automation",
      "LLM Integration & Deployment",
      "Computer Vision Solutions",
    ],
  },
  {
    icon: "🗺️",
    number: "08",
    title: "GIS & Geospatial Solutions",
    tagline:
      "Location intelligence and spatial systems for data-driven governance.",
    items: [
      "Web-Based GIS Platforms",
      "Spatial Data Analysis & Visualization",
      "Remote Sensing Integration",
      "Interactive Mapping Dashboards",
      "Geospatial Database Design",
      "Government Land & Asset Management",
    ],
  },
  {
    icon: "🏥",
    number: "09",
    title: "Health Information Systems",
    tagline:
      "Digital health platforms that improve outcomes and streamline care delivery.",
    items: [
      "Electronic Medical Records (EMR)",
      "Hospital Management Systems",
      "Community Health Tracking",
      "Disease Surveillance Systems",
      "DHIS2 Implementation & Support",
      "Health Data Integration & Interoperability",
    ],
  },
];

const stats = [
  { value: "2022", label: "Founded" },
  { value: "10+", label: "Years Experience" },
  { value: "9", label: "Core Services" },
  { value: "24/7", label: "Support" },
];

const teamMembers = [
  {
    icon: "👨‍💼",
    title: "Certified Project Managers",
    description: "Ensuring timely delivery and strategic alignment",
  },
  {
    icon: "🏗️",
    title: "Senior Software Architects",
    description: "Designing scalable, future-proof systems",
  },
  {
    icon: "💻",
    title: "Full-Stack Developers",
    description: "Building robust, efficient applications",
  },
  {
    icon: "🗄️",
    title: "Database Engineers",
    description: "Managing complex data architectures",
  },
  {
    icon: "🎨",
    title: "UI/UX Specialists",
    description: "Creating intuitive, beautiful interfaces",
  },
  {
    icon: "🔐",
    title: "Cybersecurity Experts",
    description: "Protecting your digital assets",
  },
  {
    icon: "📋",
    title: "Systems Analysts",
    description: "Bridging business and technology",
  },
  {
    icon: "✅",
    title: "QA Engineers",
    description: "Ensuring quality and reliability",
  },
];

const techTags = [
  "Elixir / Phoenix",
  "Ruby on Rails",
  "Golang",
  "Java Spring Boot",
  "Python",
  "React",
  "Angular",
  "VueJS",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "Ubuntu Linux",
  "Nginx",
  "PHP Laravel",
];

const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Enterprise Software", href: "#services" },
      { label: "AI & Machine Learning", href: "#services" },
      { label: "GIS & Geospatial", href: "#services" },
      { label: "Health Information Systems", href: "#services" },
      { label: "Cybersecurity", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#team" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "GitHub", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
];

/* ─────────────────────────────────────────────
   Logo SVG — with draw animation
───────────────────────────────────────────── */
function LogoSVG({
  animate = false,
  width = 140,
}: {
  animate?: boolean;
  width?: number;
}) {
  const uid = useId();
  const hexStrokeId = `hex-stroke-${uid}`;
  const wordmarkClipId = `wm-clip-${uid}`;

  return (
    <svg
      width={width}
      viewBox="0 0 299 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Watabe Labs"
      style={{ display: "block" }}
    >
      {animate && (
        <defs>
          {/* Wordmark wipe reveal */}
          <clipPath id={wordmarkClipId} clipPathUnits="userSpaceOnUse">
            <rect x="63" y="0" height="72" width="236">
              <animate
                attributeName="width"
                from="0"
                to="236"
                begin="0.85s"
                dur="0.7s"
                fill="freeze"
                calcMode="spline"
                keyTimes="0;1"
                keySplines="0.4 0 0.2 1"
              />
            </rect>
          </clipPath>
        </defs>
      )}

      {/* ── Hexagon icon ── */}
      {animate ? (
        <>
          {/* Stroke that draws */}
          <path
            id={hexStrokeId}
            pathLength="100"
            className="logo-hex-stroke"
            d="M62.7715 53.1982L62.0996 17.3457L30.7148 0L0 18.5088L0.672852 54.3613L32.0566 71.7061Z"
          />
          <path
            pathLength="100"
            className="logo-hex-stroke"
            style={{ animationDelay: "0.08s" }}
            d="M3.31055 52.7734L2.69434 19.999L30.7715 3.0791L59.4619 18.9365L60.0762 51.709L31.999 68.6279Z"
          />
          {/* Filled version fades in after stroke */}
          <g className="logo-hex-fill">
            <path
              d="M62.7715 53.1982L62.0996 17.3457L30.7148 0L0 18.5088L0.672852 54.3613L32.0566 71.7061L62.7715 53.1982ZM3.31055 52.7734L2.69434 19.999L30.7715 3.0791L59.4619 18.9365L60.0762 51.709L31.999 68.6279L3.31055 52.7734Z"
              fill="#32B6E4"
            />
            <path
              d="M33.7521 35.7115L32.4188 62.3782L31.0854 35.7115H33.7521Z"
              fill="#32B6E4"
            />
            <path
              d="M31.7388 34.5643L54.1974 22.8229L33.0988 36.8589L31.7388 34.5643Z"
              fill="#32B6E4"
            />
            <path
              d="M31.8301 36.9081L6.19678 22.8228L33.0074 34.5148L31.8301 36.9081Z"
              fill="#32B6E4"
            />
          </g>
        </>
      ) : (
        <g>
          <path
            d="M62.7715 53.1982L62.0996 17.3457L30.7148 0L0 18.5088L0.672852 54.3613L32.0566 71.7061L62.7715 53.1982ZM3.31055 52.7734L2.69434 19.999L30.7715 3.0791L59.4619 18.9365L60.0762 51.709L31.999 68.6279L3.31055 52.7734Z"
            fill="#32B6E4"
          />
          <path
            d="M33.7521 35.7115L32.4188 62.3782L31.0854 35.7115H33.7521Z"
            fill="#32B6E4"
          />
          <path
            d="M31.7388 34.5643L54.1974 22.8229L33.0988 36.8589L31.7388 34.5643Z"
            fill="#32B6E4"
          />
          <path
            d="M31.8301 36.9081L6.19678 22.8228L33.0074 34.5148L31.8301 36.9081Z"
            fill="#32B6E4"
          />
        </g>
      )}

      {/* ── Watabe wordmark ── */}
      <g clipPath={animate ? `url(#${wordmarkClipId})` : undefined}>
        {/* Orange wordmark: w a t a b e */}
        <path
          d="M81.2375 54.6053L70.158 18.2417H76.0292L83.889 46.0826H84.2678L92.033 18.2417H97.9989L105.669 45.9879H106.048L113.908 18.2417H119.779L108.7 54.6053H103.207L95.2527 26.6697H94.6845L86.7299 54.6053H81.2375Z"
          fill="#F49625"
        />
        <path
          d="M137.866 55.4576C135.562 55.4576 133.471 55.0236 131.593 54.1555C129.714 53.2717 128.223 52.0012 127.118 50.344C126.013 48.671 125.461 46.6508 125.461 44.2834C125.461 42.2 125.871 40.5113 126.692 39.2171C127.513 37.9071 128.61 36.8812 129.983 36.1394C131.356 35.3976 132.871 34.8452 134.528 34.4822C136.201 34.1035 137.882 33.8036 139.571 33.5826C141.78 33.2985 143.572 33.0855 144.945 32.9434C146.334 32.7856 147.344 32.5252 147.975 32.1622C148.622 31.7992 148.946 31.1678 148.946 30.2682V30.0788C148.946 27.743 148.307 25.9279 147.028 24.6338C145.766 23.3396 143.848 22.6925 141.275 22.6925C138.608 22.6925 136.517 23.2764 135.002 24.4444C133.487 25.6123 132.421 26.8591 131.806 28.1849L126.503 26.291C127.45 24.0814 128.712 22.361 130.291 21.13C131.885 19.8831 133.621 19.0151 135.499 18.5258C137.393 18.0208 139.255 17.7682 141.086 17.7682C142.254 17.7682 143.595 17.9103 145.111 18.1944C146.642 18.4627 148.117 19.023 149.538 19.8752C150.974 20.7275 152.166 22.0138 153.113 23.7341C154.059 25.4545 154.533 27.7588 154.533 30.647V54.6053H148.946V49.6811H148.662C148.283 50.4702 147.652 51.3146 146.768 52.2142C145.884 53.1139 144.708 53.8793 143.24 54.5107C141.773 55.142 139.981 55.4576 137.866 55.4576ZM138.719 50.4387C140.928 50.4387 142.791 50.0047 144.306 49.1366C145.837 48.2685 146.989 47.148 147.762 45.7749C148.551 44.4017 148.946 42.9576 148.946 41.4425V36.3288C148.709 36.6129 148.188 36.8733 147.383 37.1101C146.594 37.331 145.679 37.5283 144.637 37.7019C143.611 37.8598 142.609 38.0018 141.631 38.1281C140.668 38.2386 139.887 38.3333 139.287 38.4122C137.835 38.6016 136.477 38.9093 135.215 39.3355C133.968 39.7458 132.958 40.3692 132.184 41.2057C131.427 42.0264 131.048 43.147 131.048 44.5675C131.048 46.5088 131.766 47.9766 133.202 48.9709C134.655 49.9494 136.493 50.4387 138.719 50.4387Z"
          fill="#F49625"
        />
        <path
          d="M180.545 18.2417V22.9766H161.7V18.2417H180.545ZM167.193 9.52959H172.78V44.1887C172.78 45.767 173.009 46.9507 173.466 47.7398C173.94 48.5132 174.54 49.034 175.266 49.3023C176.007 49.5548 176.789 49.6811 177.609 49.6811C178.225 49.6811 178.73 49.6495 179.125 49.5864C179.519 49.5075 179.835 49.4444 180.072 49.397L181.208 54.416C180.829 54.558 180.3 54.7 179.622 54.8421C178.943 54.9999 178.083 55.0788 177.041 55.0788C175.463 55.0788 173.916 54.7395 172.401 54.0608C170.902 53.3822 169.655 52.3484 168.661 50.9595C167.682 49.5706 167.193 47.8187 167.193 45.7038V9.52959Z"
          fill="#F49625"
        />
        <path
          d="M199.65 55.4576C197.346 55.4576 195.255 55.0236 193.376 54.1555C191.498 53.2717 190.007 52.0012 188.902 50.344C187.797 48.671 187.245 46.6508 187.245 44.2834C187.245 42.2 187.655 40.5113 188.476 39.2171C189.297 37.9071 190.394 36.8812 191.767 36.1394C193.14 35.3976 194.655 34.8452 196.312 34.4822C197.985 34.1035 199.666 33.8036 201.355 33.5826C203.564 33.2985 205.356 33.0855 206.729 32.9434C208.118 32.7856 209.128 32.5252 209.759 32.1622C210.406 31.7992 210.73 31.1678 210.73 30.2682V30.0788C210.73 27.743 210.091 25.9279 208.812 24.6338C207.549 23.3396 205.632 22.6925 203.059 22.6925C200.392 22.6925 198.301 23.2764 196.786 24.4444C195.27 25.6123 194.205 26.8591 193.59 28.1849L188.287 26.291C189.233 24.0814 190.496 22.361 192.074 21.13C193.668 19.8831 195.405 19.0151 197.283 18.5258C199.177 18.0208 201.039 17.7682 202.87 17.7682C204.038 17.7682 205.379 17.9103 206.894 18.1944C208.425 18.4627 209.901 19.023 211.322 19.8752C212.758 20.7275 213.949 22.0138 214.896 23.7341C215.843 25.4545 216.317 27.7588 216.317 30.647V54.6053H210.73V49.6811H210.446C210.067 50.4702 209.436 51.3146 208.552 52.2142C207.668 53.1139 206.492 53.8793 205.024 54.5107C203.556 55.142 201.765 55.4576 199.65 55.4576ZM200.502 50.4387C202.712 50.4387 204.574 50.0047 206.09 49.1366C207.62 48.2685 208.773 47.148 209.546 45.7749C210.335 44.4017 210.73 42.9576 210.73 41.4425V36.3288C210.493 36.6129 209.972 36.8733 209.167 37.1101C208.378 37.331 207.463 37.5283 206.421 37.7019C205.395 37.8598 204.393 38.0018 203.414 38.1281C202.452 38.2386 201.67 38.3333 201.071 38.4122C199.619 38.6016 198.261 38.9093 196.999 39.3355C195.752 39.7458 194.742 40.3692 193.968 41.2057C193.211 42.0264 192.832 43.147 192.832 44.5675C192.832 46.5088 193.55 47.9766 194.986 48.9709C196.438 49.9494 198.277 50.4387 200.502 50.4387Z"
          fill="#F49625"
        />
        <path
          d="M227.272 54.6053V6.1205H232.859V24.0182H233.333C233.743 23.3869 234.311 22.582 235.037 21.6035C235.779 20.6091 236.836 19.7253 238.21 18.9519C239.598 18.1628 241.477 17.7682 243.844 17.7682C246.906 17.7682 249.605 18.5337 251.941 20.0646C254.277 21.5956 256.099 23.7657 257.409 26.575C258.719 29.3844 259.374 32.6988 259.374 36.5182C259.374 40.3692 258.719 43.7073 257.409 46.5324C256.099 49.3418 254.284 51.5198 251.964 53.0665C249.644 54.5975 246.969 55.3629 243.939 55.3629C241.603 55.3629 239.733 54.9762 238.328 54.2029C236.923 53.4137 235.842 52.522 235.085 51.5277C234.327 50.5176 233.743 49.6811 233.333 49.0182H232.67V54.6053H227.272ZM232.765 36.4235C232.765 39.1697 233.167 41.5924 233.972 43.6915C234.777 45.7749 235.953 47.4084 237.499 48.5921C239.046 49.76 240.94 50.344 243.181 50.344C245.517 50.344 247.466 49.7285 249.029 48.4974C250.607 47.2505 251.791 45.5776 252.58 43.4785C253.385 41.3636 253.787 39.0119 253.787 36.4235C253.787 33.8667 253.393 31.5624 252.604 29.5107C251.83 27.4431 250.654 25.8096 249.076 24.6101C247.514 23.3948 245.549 22.7872 243.181 22.7872C240.908 22.7872 238.999 23.3632 237.452 24.5154C235.905 25.6517 234.737 27.2458 233.948 29.2976C233.159 31.3336 232.765 33.7089 232.765 36.4235Z"
          fill="#F49625"
        />
        <path
          d="M283.167 55.3629C279.663 55.3629 276.641 54.5896 274.1 53.0428C271.574 51.4803 269.625 49.3023 268.252 46.5088C266.895 43.6994 266.216 40.4324 266.216 36.7076C266.216 32.9829 266.895 29.7 268.252 26.8591C269.625 24.0024 271.535 21.7771 273.981 20.183C276.444 18.5732 279.316 17.7682 282.599 17.7682C284.493 17.7682 286.363 18.0839 288.21 18.7152C290.056 19.3465 291.737 20.3724 293.252 21.7928C294.767 23.1975 295.975 25.0599 296.874 27.38C297.774 29.7 298.224 32.5567 298.224 35.95V38.3175H270.193V33.4879H292.542C292.542 31.4362 292.132 29.6053 291.311 27.9955C290.506 26.3857 289.354 25.1151 287.854 24.1839C286.371 23.2528 284.619 22.7872 282.599 22.7872C280.373 22.7872 278.448 23.3396 276.822 24.4444C275.212 25.5334 273.973 26.9538 273.105 28.7057C272.237 30.4576 271.803 32.3358 271.803 34.3402V37.5599C271.803 40.3061 272.277 42.6341 273.224 44.5438C274.187 46.4377 275.52 47.8819 277.225 48.8762C278.929 49.8547 280.91 50.344 283.167 50.344C284.635 50.344 285.961 50.1388 287.144 49.7285C288.344 49.3023 289.378 48.671 290.246 47.8345C291.114 46.9822 291.784 45.9248 292.258 44.6622L297.656 46.1773C297.087 48.0081 296.133 49.618 294.791 51.0069C293.449 52.38 291.792 53.4532 289.819 54.2266C287.847 54.9841 285.629 55.3629 283.167 55.3629Z"
          fill="#F49625"
        />
      </g>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Scroll-reveal wrapper
───────────────────────────────────────────── */
function FadeIn({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-in ${className}`}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Navigation
───────────────────────────────────────────── */
function Navigation({ onOpenDialog }: { onOpenDialog: () => void }) {
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
}

/* ─────────────────────────────────────────────
   Hero — dark navy with tech grid + glows
───────────────────────────────────────────── */
function Hero() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "8rem 5% 5rem",
        position: "relative",
        overflow: "hidden",
        background: "#0a192f",
        backgroundImage: `
          radial-gradient(ellipse at 78% 18%, rgba(244, 150, 37, 0.18) 0%, transparent 45%),
          radial-gradient(ellipse at 12% 80%, rgba(50, 182, 228, 0.1) 0%, transparent 40%),
          linear-gradient(rgba(50, 182, 228, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(50, 182, 228, 0.04) 1px, transparent 1px),
          linear-gradient(rgba(50, 182, 228, 0.015) 1px, transparent 1px),
          linear-gradient(90deg, rgba(50, 182, 228, 0.015) 1px, transparent 1px)
        `,
        backgroundSize:
          "auto, auto, 100px 100px, 100px 100px, 20px 20px, 20px 20px",
      }}
    >
      <div style={{ maxWidth: "900px", position: "relative", zIndex: 1 }}>
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
            fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)",
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
}

/* ─────────────────────────────────────────────
   Stats — dark strip
───────────────────────────────────────────── */
function Stats() {
  return (
    <section
      style={{
        padding: "4.5rem 5%",
        background: "#0a192f",
        borderTop: "1px solid #233554",
        borderBottom: "1px solid #233554",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "2rem",
          textAlign: "center",
        }}
      >
        {stats.map((stat, i) => (
          <div key={i}>
            <div
              style={{
                fontSize: "3rem",
                fontWeight: 800,
                color: "#F49625",
                marginBottom: "0.5rem",
                lineHeight: 1,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                color: "#8892b0",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontSize: "0.85rem",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Services — white background, redesigned cards
───────────────────────────────────────────── */
function ServiceCardSkeleton() {
  return (
    <div
      style={{
        background: "#fff",
        padding: "2.5rem",
        borderRadius: "20px",
        border: "1px solid rgba(0,0,0,0.06)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        overflow: "hidden",
      }}
    >
      <div
        className="skeleton-block"
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "14px",
          marginBottom: "1.25rem",
        }}
      />
      <div
        className="skeleton-block"
        style={{ height: "1.25rem", width: "80%", marginBottom: "0.75rem" }}
      />
      <div
        className="skeleton-block"
        style={{ height: "0.875rem", width: "60%", marginBottom: "1.5rem" }}
      />
      {[90, 75, 85, 70].map((w, i) => (
        <div
          key={i}
          className="skeleton-block"
          style={{
            height: "0.75rem",
            width: `${w}%`,
            marginBottom: "0.625rem",
          }}
        />
      ))}
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="service-card-redesigned">
      <span className="service-number-watermark">{service.number}</span>
      <div className="service-icon-wrap">
        <span style={{ fontSize: "1.5rem" }}>{service.icon}</span>
      </div>
      <h3 className="service-card-title">{service.title}</h3>
      <p className="service-card-tagline">{service.tagline}</p>
      <ul className="service-items-list">
        {service.items.slice(0, 4).map((item, i) => (
          <li key={i} className="service-item-row">
            <span className="service-item-dot" />
            {item}
          </li>
        ))}
        {service.items.length > 4 && (
          <li className="service-item-more">
            +{service.items.length - 4} more
          </li>
        )}
      </ul>
    </div>
  );
}

function Services() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="services"
      style={{ padding: "6rem 5%", background: "#f4f7fb" }}
    >
      <FadeIn>
        <div
          style={{
            textAlign: "center",
            maxWidth: "800px",
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
            Our Core Services
          </h2>
          <p style={{ color: "#64748b", fontSize: "1.1rem", lineHeight: 1.7 }}>
            We specialize in building secure, scalable, and interoperable
            enterprise platforms that power governments, institutions, and
            organizations across multiple sectors.
          </p>
        </div>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.75rem",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {!loaded
          ? Array(6)
              .fill(null)
              .map((_, i) => <ServiceCardSkeleton key={i} />)
          : services.map((service, i) => (
              <FadeIn key={i}>
                <ServiceCard service={service} />
              </FadeIn>
            ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   About — white section
───────────────────────────────────────────── */
function About() {
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
}

/* ─────────────────────────────────────────────
   Team — light section
───────────────────────────────────────────── */
function Team() {
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
}

/* ─────────────────────────────────────────────
   CTA — back to dark navy
───────────────────────────────────────────── */
function CTA({ onOpenDialog }: { onOpenDialog: () => void }) {
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
}

/* ─────────────────────────────────────────────
   Footer
───────────────────────────────────────────── */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#0a192f",
        borderTop: "1px solid #233554",
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
                color: "#8892b0",
                lineHeight: 1.7,
                fontSize: "0.9rem",
                marginBottom: "1.25rem",
              }}
            >
              Strategy, Design & Development. We stand at the intersection of
              strategy, design, and technology.
            </p>
            <div style={{ color: "#8892b0", fontSize: "0.875rem" }}>
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
                  style={{ color: "#F49625", textDecoration: "none" }}
                >
                  hello@watabelabs.com
                </a>
              </p>
              <p>
                🌐{" "}
                <a
                  href="https://www.watabelabs.com"
                  style={{ color: "#F49625", textDecoration: "none" }}
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
                  color: "#ffffff",
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
                        color: "#8892b0",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#F49625")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#8892b0")
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
            borderTop: "1px solid #233554",
            paddingTop: "2rem",
            textAlign: "center",
            color: "#8892b0",
            fontSize: "0.875rem",
          }}
        >
          © {currentYear} Watabe Labs Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   Contact Dialog
───────────────────────────────────────────── */
const serviceOptions = [...services.map((s) => s.title), "Other"];

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

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
      <label
        htmlFor={id}
        style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#374151" }}
      >
        {label}
        {required && (
          <span style={{ color: "#F49625", marginLeft: "2px" }}>*</span>
        )}
      </label>
      {children}
      {error && (
        <span
          style={{
            fontSize: "0.78rem",
            color: "#ef4444",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden
          >
            <circle cx="6" cy="6" r="5.5" stroke="#ef4444" />
            <path
              d="M6 3.5v3M6 8.5v.01"
              stroke="#ef4444"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
          {error}
        </span>
      )}
    </div>
  );
}

function ContactDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

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
}

/* ─────────────────────────────────────────────
   App
───────────────────────────────────────────── */
export default function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  useEffect(() => {
    // Re-observe fade-in elements after skeleton resolves
    const observe = () => {
      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add("visible");
          }),
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
      );
      document
        .querySelectorAll(".fade-in")
        .forEach((el) => observer.observe(el));
    };
    observe();
    const t = setTimeout(observe, 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Navigation onOpenDialog={openDialog} />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Team />
      <CTA onOpenDialog={openDialog} />
      <Footer />
      <ContactDialog open={dialogOpen} onClose={closeDialog} />
    </>
  );
}
