/* ─────────────────────────────────────────────
   Stats — dark strip
───────────────────────────────────────────── */
export type Stat = {
  value: string;
  label: string;
};

type StatsProps = {
  stats: Array<Stat>;
};

const Stats: React.FC<StatsProps> = ({ stats }) => {
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
};

export default Stats;
