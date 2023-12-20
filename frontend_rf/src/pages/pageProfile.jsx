// @ts-nocheck
import React, { useState, useEffect } from "react";
import { mainColors } from "../styles/mainColors";

import LayoutGrid from "../components/LayoutGrid/LayoutGrid";
import ViewDefault from "../components/ViewDefault/ViewDefault";


import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import {
  InputPassEditable,
  InputTelEditable,
  InputTextEditable,
} from "../components/InputText/InputEditable";

function PageProfile({ userLoggedIn, setUserLoggedIn }) {
  let navigate = useNavigate();
  const { userId } = useParams();
  const [email, setEmail] = useState(
    JSON.parse(localStorage.getItem("user"))?.email
  );
  const [firstName, setFirstName] = useState(
    JSON.parse(localStorage.getItem("user"))?.firstname
  );
  const [lastName, setLastName] = useState(
    JSON.parse(localStorage.getItem("user"))?.lastname
  );
  const [tel, setTel] = useState(
    JSON.parse(localStorage.getItem("user"))?.phone
  );
  const [pass, setPass] = useState("0000000000");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userLoggedIn) {
      navigate("/signup");
      setUserLoggedIn(false);
    }
  });

  const handleChanges = async () => {
    setLoading(true);
    await fetch(`https://restaurant-c2gx.onrender.com/api/v1/user/user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: userId,
        lastname: lastName,
        firstname: firstName,
        phone: tel,
        email: email,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          alert("Se actualizaron tus datos");
          setLoading(false);
        } else if (response.status === 400) {
          setLoading(false);
        } else {
          setLoading(false);
        }
      })

      .catch((error) => console.log(error));
  };

  return (
    <ViewDefault>
      <h2
        style={{
          paddingLeft: "38px",
          marginTop: "2vh",
          fontFamily: "PoppinsMedium",
          fontWeight: "800",
          fontSize: "16px",
          textAlign: "left",
          marginBottom: "-5px",
          color: mainColors.textBlack,
          alignSelf: "flex-start",
        }}
      >
        MIS DATOS
      </h2>
      <h2
        style={{
          paddingLeft: "35px",
          marginTop: "2px",
          fontFamily: "PoppinsMedium",
          fontWeight: "300",
          fontSize: "14px",
          textAlign: "left",
          marginBottom: "-5px",
          color: mainColors.textBlack,
          alignSelf: "flex-start",
        }}
      >
        Datos de la cuenta
      </h2>
      <LayoutGrid>
        <InputTextEditable label={email} setText={setEmail} text={email} />
        <InputPassEditable pass={pass} setPass={setPass} />
        <Button
          loading={loading}
          text={"Guardar cambios"}
          click={handleChanges}
        />
      </LayoutGrid>
      <h2
        style={{
          paddingLeft: "35px",
          marginTop: "2px",
          fontFamily: "PoppinsMedium",
          fontWeight: "300",
          fontSize: "14px",
          textAlign: "left",
          marginBottom: "-5px",
          color: mainColors.textBlack,
          alignSelf: "flex-start",
        }}
      >
        Datos personales
      </h2>
      <LayoutGrid>
        <InputTextEditable
          label={firstName}
          setText={setFirstName}
          text={firstName?.charAt(0).toUpperCase() + firstName?.slice(1)}
        />
        <InputTextEditable
          label={lastName}
          setText={setLastName}
          text={lastName?.charAt(0).toUpperCase() + lastName?.slice(1)}
        />
        <InputTelEditable tel={tel} setTel={setTel} />
        <Button
          loading={loading}
          text={"Guardar cambios"}
          click={handleChanges}
        />
      </LayoutGrid>
    </ViewDefault>
  );
}

export default PageProfile;
