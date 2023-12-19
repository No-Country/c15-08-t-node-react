// @ts-nocheck
import React, { useState, useEffect } from "react";
import { mainColors } from "../styles/mainColors";

import LayoutGrid from "../components/LayoutGrid/LayoutGrid";
import ViewDefault from "../components/ViewDefault/ViewDefault";

import ImageEpicureos from "../components/ImageEpicureos/ImageEpicureos";
import { Link, useParams } from "react-router-dom";
import ButtonProfile from "../components/Button/ButtonProfile";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import {
  InputPassShort,
  InputTelShort,
} from "../components/InputText/InputText";
function PageProfile({ userLoggedIn, setUserLoggedIn }) {
  let navigate = useNavigate();
  const { userId } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tel, setTel] = useState("");
  const [pass, setPass] = useState("");

  const handleLogOut = () => {
    localStorage.clear();
    setUserLoggedIn(false);
    navigate("/home");
  };
  useEffect(() => {
    if (!userLoggedIn) {
      navigate("/signup");
      setUserLoggedIn(false);
    }
  });
  return (
    <ViewDefault>
      <h2
        style={{
          marginTop: "2vh",
          fontFamily: "PoppinsMedium",
          fontWeight: "800",
          fontSize: "18px",
          textAlign: "center",
          marginBottom: "10px",
          color: mainColors.textBlack,
        }}
      >
        Perfil
      </h2>
      <LayoutGrid>
        <h2
          style={{
            marginTop: "2vh",
            fontFamily: "PoppinsMedium",
            fontWeight: "800",
            fontSize: "14px",
            textAlign: "left",
            marginBottom: "10px",
            color: mainColors.textBlack,
            gridColumn: "span 1",
          }}
        >
          Nombre
        </h2>

        <h2
          style={{
            marginTop: "2vh",
            fontFamily: "PoppinsMedium",
            fontWeight: "800",
            fontSize: "14px",
            textAlign: "left",
            marginBottom: "10px",
            color: mainColors.textBlack,
            gridColumn: "span 1",
          }}
        >
          Apellido
        </h2>
        <h2
          style={{
            marginTop: "2vh",
            fontFamily: "PoppinsMedium",
            fontWeight: "300",
            fontSize: "14px",
            textAlign: "left",
            marginBottom: "10px",
            color: mainColors.textBlack,
            gridColumn: "span 1",
          }}
        >
          Stefano
        </h2>
        <h2
          style={{
            marginTop: "2vh",
            fontFamily: "PoppinsMedium",
            fontWeight: "300",
            fontSize: "14px",
            textAlign: "left",
            marginBottom: "10px",
            color: mainColors.textBlack,
            gridColumn: "span 1",
          }}
        >
          Frisoni
        </h2>
        <h2
          style={{
            marginTop: "2vh",
            fontFamily: "PoppinsMedium",
            fontWeight: "800",
            fontSize: "14px",
            textAlign: "left",
            marginBottom: "10px",
            color: mainColors.textBlack,
            gridColumn: "span 1",
          }}
        >
          Telefono
        </h2>
        <h2
          style={{
            marginTop: "2vh",
            fontFamily: "PoppinsMedium",
            fontWeight: "300",
            fontSize: "14px",
            textAlign: "left",
            marginBottom: "10px",
            color: mainColors.textBlack,
            gridColumn: "span 1",
          }}
        >
          6141694297
        </h2>
        <InputTelShort tel={tel} setTel={setTel} />

        <ButtonProfile
          text={"Cambiar"}
          click={() => console.log("Cambiar telefono")}
        />
        <InputPassShort pass={pass} setPass={setPass} />
        <ButtonProfile
          text={"Cambiar"}
          click={() => console.log("Cambiar contrasena")}
        />
        <Button
          text={"Mis reservas"}
          click={() => navigate(`/reservations/${userId}`)}
        />
        <Button text={"Cerrar sesión"} click={handleLogOut} />
      </LayoutGrid>
    </ViewDefault>
  );
}

export default PageProfile;
