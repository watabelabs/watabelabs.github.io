/* ─────────────────────────────────────────────
   Services — white background, redesigned cards
───────────────────────────────────────────── */
const ServiceCardSkeleton = () => {
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
};
export default ServiceCardSkeleton;
