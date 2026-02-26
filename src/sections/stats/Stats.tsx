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
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--bg-tertiary)",
        borderBottom: "1px solid var(--bg-tertiary)",
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
                color: "var(--accent-primary)",
                marginBottom: "0.5rem",
                lineHeight: 1,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                color: "var(--text-secondary)",
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
