import React from "react";
import LogoEpicureos from "../../assets/images/logoEpicureos.png";
import logochico from "../../assets/images/logochico.png";
import { Link } from "react-router-dom";
import { mainColors } from "../../styles/mainColors";
function ImageEpicureos({ size = "0" }) {
  return (
    <Link
      to={"/home"}
      style={{
        textDecoration: "none",
        color: mainColors.textBlack,
      }}
    >
      {size > "0" && (
        <img
          style={{ width: size, marginLeft: "-30px" }}
          src={logochico}
          alt="Epicureos"
        ></img>
      )}
      {size === "0" && (
        <img
          style={{ paddingTop: "4vh", width: "110px" }}
          src={LogoEpicureos}
          alt="Epicureos"
        ></img>
      )}
    </Link>
  );
}
export function ImageEpicureosSombra({ size = "0" }) {
  return (
    <Link
      to={"/home"}
      style={{
        textDecoration: "none",
        color: mainColors.textBlack,
      }}
    >
      {size > "0" && (
        <img
          style={{ width: size, padding: "15px 0px", marginLeft: "-30px" }}
          src={logochico}
          alt="Epicureos"
        ></img>
      )}
      {size === "0" && (
        <img
          style={{
            paddingTop: "4vh",
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, .25))",
          }}
          src={LogoEpicureos}
          alt="Epicureos"
        ></img>
      )}
    </Link>
  );
}

export default ImageEpicureos;



