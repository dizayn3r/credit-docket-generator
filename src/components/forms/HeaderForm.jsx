export default function HeaderForm({ data, onChange }) {
  const inputStyle = {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
    boxSizing: "border-box"
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "500",
    fontSize: "14px"
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2 style={{ fontSize: "18px", marginBottom: "15px", color: "#333" }}>
        Document Header
      </h2>
      
      <div style={{ marginBottom: "15px" }}>
        <label style={labelStyle}>Title</label>
        <input
          type="text"
          value={data.title}
          onChange={(e) => onChange("title", e.target.value)}
          placeholder="e.g., ELSC, New Delhi"
          style={inputStyle}
        />
      </div>

      <div style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Subtitle</label>
          <input
            type="text"
            value={data.subtitle}
            onChange={(e) => onChange("subtitle", e.target.value)}
            placeholder="e.g., Movement Chart / Processing Note"
            style={inputStyle}
          />
        </div>

        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Academic Year</label>
          <input
            type="text"
            value={data.academicYear}
            onChange={(e) => onChange("academicYear", e.target.value)}
            placeholder="e.g., 2025-26"
            style={inputStyle}
          />
        </div>
      </div>
    </div>
  );
}

