import React from "react";
import LogoEpicureos from "../../assets/images/logoEpicureos.png";
import ImagenRest1 from "../../assets/images/ImagenRest1.png";
import ImagenRest2 from "../../assets/images/ImagenRest2.png";
import ImagenRest3 from "../../assets/images/ImagenRest3.png";
import imagenMesa from "../../assets/images/imagenMesa.png";
import LocationIcon from "../../assets/images/LocationIcon.png";
import Button from "../Button/Button";
import { mainColors } from "../../styles/mainColors";
import { useNavigate } from "react-router-dom";
import { ImageEpicureosSombra } from "../../components/ImageEpicureos/ImageEpicureos";

import HomeInfo from "../../components/HomeInfo/HomeInfo";
import LayoutGrid from "../../components/LayoutGrid/LayoutGrid";

const textShadow = {
  filter: "drop-shadow(1px 1px 15px #000000)",
  color: "#fff",
};

function ImageHome({ size = "0" }) {
  let navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        height: "94vh",
        width: "100vw",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <img
        style={{
          maxWidth: "100%",
          position: "absolute",
          zIndex: "-1",
          objectFit: "contain",
        }}
        src={ImagenRest1}
        alt={"Res"}
      />
      <ImageEpicureosSombra />
      <LayoutGrid>
        <div style={{ margin: "4.4vh 0" }}></div>
        <h2
          style={{
            ...textShadow,
            fontFamily: "PoppinsMedium",
            fontSize: "20px",
            gridColumn: "span 2",
            letterSpacing: "1.5px",
            textAlign: "center",
            marginBottom: "-8px",
          }}
        >
          MERECEDORES DE PLACER
        </h2>
        <h4
          style={{
            ...textShadow,
            fontFamily: "PoppinsThin",
            fontSize: "11px",
            gridColumn: "span 2",
            textAlign: "center",
            fontWeight: "200",
            marginTop: "0",
            marginBottom: "-8px",
          }}
        >
          Deleitá tu paladar con nuestra propuesta gastronómica
        </h4>
        <h4
          style={{
            ...textShadow,
            fontFamily: "PoppinsThin",
            fontSize: "10px",
            gridColumn: "span 2",
            textAlign: "center",
            fontWeight: "200",
            marginTop: "-12px",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              style={{
                marginTop: "-10px",
                paddingTop: "10px",
                marginRight: "-6px",
              }}
              src={LocationIcon}
              alt="Ubicacion"
            />
            Lennox 2308, Funes
          </span>
        </h4>
        <HomeInfo />
        <Button text={"Reservar"} click={() => navigate("/reserve")} />
      </LayoutGrid>
    </div>
  );
}

export default ImageHome;