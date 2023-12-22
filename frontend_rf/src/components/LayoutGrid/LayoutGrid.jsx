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

export function LayoutGrid3({ children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr 2fr",
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

export function LayoutGridReserve({ children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        width: "100%",
        alignContent: "center",
        alignItems: "center",
        marginBottom: "14px",
      }}
    >
      {children}
    </div>
  );
}

export function LayoutGridReservations({ children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "12fr 1fr",
        width: "max(320px, 30%)",
        gap: "3px",
        alignContent: "center",
        alignItems: "center",
        justifyItems: "flex-start",
        marginBottom: "4px",
      }}
    >
      {children}
    </div>
  );
}

export default LayoutGrid;
