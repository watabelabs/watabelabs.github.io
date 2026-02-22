import { useEffect, useState } from "react";
import FadeIn from "components/fadein/FadeIn";
import ServiceCard from "./ServiceCard";
import ServiceCardSkeleton from "components/ServiceCardSkeleton";

export type Service = {
  icon: string;
  number: string;
  title: string;
  tagline: string;
  items: string[];
};

type ServiceProps = {
  services: Array<Service>;
};

const Services: React.FC<ServiceProps> = ({ services }) => {
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
          maxWidth: "1200px",
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
};

export default Services;
