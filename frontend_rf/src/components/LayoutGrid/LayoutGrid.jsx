import React from "react";

function LayoutGrid({ children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        width: "max(320px, 30%)",
        gap: "11px",
        alignContent: "center",
        alignItems: "center",
        marginBottom: "14px",
      }}
    >
      {children}
    </div>
  );
}

export default LayoutGrid;
