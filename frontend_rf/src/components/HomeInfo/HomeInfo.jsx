// @ts-nocheck
import React from "react";
const textShadow = {
  color: "#fff",
  margin: "4px",
  textAlign: "left",
  filter: "drop-shadow(1px 1px 15px rgba(0, 0, 0, .6))",
};
function HomeInfo() {
  return (
    <div
      style={{
        border: "0.5px solid #fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "5px 0px",
        backgroundColor: "rgba(58, 37, 33, .1)",
        gridColumn: "span 2",
      }}
    >
      <h3
        style={{
          ...textShadow,
          color: "#fff",
          margin: "5px",
          fontFamily: "PoppinsThin",
          fontSize: "15px",
          letterSpacing: "1.2px",
          marginTop: "5px",
          marginBottom: "1px",
          alignSelf: "center",
          fontWeight: "600",
        }}
      >
        HORARIOS:
      </h3>
      <div style={{ textAlign: "center" }}>
        <h4
          style={{
            ...textShadow,
            fontFamily: "PoppinsThin",
            fontSize: "11px",
            fontWeight: "300",
          }}
        >
          <span style={{ fontWeight: "600", letterSpacing: "1.2px" }}>
            Martes a Jueves:{" "}
          </span>
          De 12 a 16 y de 19 a 00:30hs
        </h4>

        <h4
          style={{
            ...textShadow,
            fontFamily: "PoppinsThin",
            fontSize: "11px",
            fontWeight: "300",
          }}
        >
          <span style={{ fontWeight: "600", letterSpacing: "1.2px" }}>
            Viernes y Sábados:{" "}
          </span>
          De 12 a 16 y de 19 a 01:30hs
        </h4>

        <h4
          style={{
            ...textShadow,
            fontFamily: "PoppinsThin",
            fontSize: "11px",
            fontWeight: "300",
          }}
        >
          <span style={{ fontWeight: "600", letterSpacing: "1.2px" }}>
            Domingos:{" "}
          </span>
          De 12 a 16 y de 19 a 00:30hs
        </h4>

        <h4
          style={{
            ...textShadow,
            fontFamily: "PoppinsThin",
            fontSize: "11px",
            fontWeight: "300",
          }}
        >
          <span style={{ fontWeight: "600", letterSpacing: "1.2px" }}>
            Lunes:{" "}
          </span>
          Cerrado
        </h4>
      </div>
    </div>
  );
}

export default HomeInfo;
