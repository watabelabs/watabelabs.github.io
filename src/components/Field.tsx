const Field = ({
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
}) => {
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
};

export default Field;
