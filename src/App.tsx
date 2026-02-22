import { useEffect, useState } from "react";
import Hero from "sections/hero/Hero";
import Stats, { Stat } from "sections/stats/Stats";
import Services from "sections/services/Service";
import About from "sections/about/About";
import Team from "sections/team/Team";
import CTA from "sections/cta/Cta";
import Footer from "sections/footer/Footer";
import ContactDialog from "sections/contact-dialog/ContactDialog";
import Navigation from "sections/navigation/Navigation";

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

const stats: Array<Stat> = [
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
      <Stats stats={stats} />
      <Services services={services} />
      <About techTags={techTags} />
      <Team teamMembers={teamMembers} />
      <CTA onOpenDialog={openDialog} />
      <Footer footerColumns={footerColumns} />
      <ContactDialog
        open={dialogOpen}
        onClose={closeDialog}
        services={services}
      />
    </>
  );
}
