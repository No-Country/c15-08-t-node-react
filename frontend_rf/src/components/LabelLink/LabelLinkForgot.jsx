import React from "react";
import { Link } from "react-router-dom";
import { mainColors } from "styles/mainColors";
import "./labelLink.css";

function LabelLinkForgot({ to, label }) {
  return (
    <Link
      to={to}
      style={{
        textDecoration: "none",
        color: mainColors.textBlack,
        gridColumn: "span 2",
        marginTop: "-10px",
      }}
    >
      <h2
        style={{
          fontFamily: "Marcellus",
          fontWeight: "400",
          fontSize: "12px",
          paddingLeft: "2px",
          color: mainColors.textBlack,
          textAlign: "left",
        }}
      >
        {label}
      </h2>
    </Link>
  );
}

export default LabelLinkForgot;
