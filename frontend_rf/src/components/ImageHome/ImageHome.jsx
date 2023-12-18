import React from "react";
import LogoEpicureos from "../../assets/images/logoEpicureos.png";
import imagenRestaurant from "../../assets/images/imagenRestaurant.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { mainColors } from "../../styles/mainColors";
import { useNavigate } from "react-router-dom";


function ImageHome({ size = "0" }) {
  let navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          zIndex: -1,
          position: "absolute",
          backgroundColor: mainColors.backBrownOpaque2,
        }}
      ></div>
      <div style={{ paddingTop: "25px" }}></div>
      <img
        src={imagenRestaurant}
        alt="imagenRestaurant"
        style={{
          width: "100%",
          height: "100%",
          zIndex: -2,
          objectFit: "cover",
          position: "absolute",
        }}
      />
      <img src={LogoEpicureos} alt="Epicureos" />

      <h2
        style={{
          fontFamily: "PoppinsMedium",
          fontWeight: "400",
          fontSize: "20px",
          marginBottom: "0px",
          color: mainColors.textWhite,
          textAlign: "left",
        }}
      >
        MERECEDORES DE PLACER
      </h2>
      <h3
        style={{
          fontFamily: "PoppinsMedium",
          fontWeight: "400",
          fontSize: "11px",
          marginBottom: "0px",
          color: mainColors.textWhite,
        }}
      >
        Deleitá tu paladar con nuestra propuesta gastronómica
      </h3>
      <h4
        style={{
          fontFamily: "PoppinsMedium",
          fontWeight: "400",
          fontSize: "10px",
          marginBottom: "0px",
          color: mainColors.textWhite,
        }}
      >
        Lennox 2308, Funes
      </h4>

      <h5
        style={{
          fontFamily: "PoppinsMedium",
          fontWeight: "400",
          fontSize: "15px",
          marginBottom: "0px",
          color: mainColors.textWhite,
        }}
      >
        NUESTROS HORARIOS:
      </h5>

      <h6
        style={{
          fontFamily: "PoppinsMedium",
          fontWeight: "400",
          fontSize: "11px",
          marginBottom: "0px",
          color: mainColors.textWhite,
        }}
      >
        Martes a Jueves: De 12 a 16 y de 19 a 00:30hs
      </h6>

      <h7
        style={{
          fontFamily: "PoppinsMedium",
          fontWeight: "400",
          fontSize: "11px",
          marginBottom: "0px",
          color: mainColors.textWhite,
        }}
      >
        Viernes y Sábados: De 12 a 16 y de 19 a 01:30hs
      </h7>
      <h8
        style={{
          fontFamily: "PoppinsMedium",
          fontWeight: "400",
          fontSize: "11px",
          marginBottom: "0px",
          color: mainColors.textWhite,
          alignItems: "left",
        }}
      >
        Domingos: De 12 a 16 y de 19 a 00:30hs
      </h8>
      <h9
        style={{
          fontFamily: "PoppinsMedium",
          fontWeight: "400",
          fontSize: "11px",
          marginBottom: "0px",
          color: mainColors.textWhite,
        }}
      >
        Lunes: Cerrado
      </h9>

      <Button
        loading={false}
        text={"Reserva"}
        click={() => navigate("/reserve")}
        style={{
          width: "50px",
        }}
      />
    </div>
  );
}

export default ImageHome;