import React from "react";
import LogoEpicureos from "../../assets/images/logoEpicureos.png";
import logochico from "../../assets/images/logochico.png";
import { Link } from "react-router-dom";
import { mainColors } from "../../styles/mainColors";
function ImageEpicureos({ size = "0" }) {
  return (
    <Link
      to={"/home"}
      style={{ textDecoration: "none", color: mainColors.textBlack }}
    >
      {size > "0" && (
        <img
          style={{ width: size, padding: "10px 0px" }}
          src={logochico}
          alt="Epicureos"
        ></img>
      )}
      {size === "0" && <img src={LogoEpicureos} alt="Epicureos"></img>}
    </Link>
  );
}

export default ImageEpicureos;
