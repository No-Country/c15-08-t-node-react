import React from "react";
import { Link } from "react-router-dom";
import { mainColors } from "../../styles/mainColors";
import "./labelLink.css";

function LabelLink({ to, label, children }) {
  return (
    <Link
      to={to}
      style={{ textDecoration: "none", color: mainColors.textBlack }}
    >
      <h2
        style={{
          fontFamily: "PoppinsMedium",
          fontWeight: "400",
          fontSize: "15px",
          marginBottom: "20px",
          color: mainColors.textBlack,
        }}
      >
        {label}
        {children}
      </h2>
    </Link>
  );
}

export default LabelLink;
