import React, { useState } from "react";
import Button from "components/Button/Button";

import {
  InputMail,
  InputNom,
  InputPass,
  InputTel,
} from "components/InputText/InputText";
import LayoutGrid from "components/LayoutGrid/LayoutGrid";
import ViewDefault from "components/ViewDefault/ViewDefault";

import ImageEpicureos from "components/ImageEpicureos/ImageEpicureos";
import LabelLink from "components/LabelLink/LabelLink";
import { useNavigate } from "react-router-dom";
import validator from "validator";

function PageSignup() {
  let navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [lastNom, setLastNom] = useState("");
  const [firstNom, setFirstNom] = useState("");
  const [tel, setTel] = useState("");
  const [loading, setLoading] = useState(false);

  const checkHandleSignup = () => {
    if (
      validator.isEmail(mail) &&
      validator.isStrongPassword(pass, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      }) &&
      validator.isMobilePhone(tel.trim(), ["es-AR", "es-MX"]) &&
      firstNom.length > 0 &&
      lastNom.length >= 0
    ) {
      handleSignup();
    } else {
      console.log("Campos Vacios");
      alert("Campos Vacios");
    }
  };

  const handleSignup = async () => {
    console.log(mail, pass, firstNom, tel, lastNom);
    setLoading(true);
    localStorage.clear();
    await fetch(`https://restaurant-c2gx.onrender.com/api/v1/auth/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: mail.toLowerCase(),
        password: pass,
        phone: tel.trim(),
        firstname: firstNom.toUpperCase(),
        lastname: lastNom.toUpperCase(),
      }),
    })
      .then((response) => {
        if (response.status === 201) {
          console.log("User Created");
          setLoading(false);
          navigate("/validation");
          return response.json();
        } else if (response.status === 400) {
          console.log("User already exists");
          setLoading(false);
        } else {
          console.log("Error creating user");
          setLoading(false);
        }
      })
      .then((user) => {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("email", mail.toLowerCase());
      })
      .catch((error) => console.log(error));
  };

  return (
    <ViewDefault>
      <ImageEpicureos />
      <LabelLink
        to={"/login"}
        label={"¿Ya tenés una cuenta? "}
        children={
          <span style={{ textDecoration: "underline", fontWeight: "600" }}>
            Ingresa
          </span>
        }
      />
      <LayoutGrid>
        <InputNom nom={firstNom} setNom={setFirstNom} label={"Nombre"} />
        <InputNom nom={lastNom} setNom={setLastNom} label={"Apellido"} />
        <InputMail mail={mail} setMail={setMail} />
        <InputTel tel={tel} setTel={setTel} />
        <InputPass pass={pass} setPass={setPass} />
        <Button
          text={"REGISTRATE"}
          loading={loading}
          click={checkHandleSignup}
        />
      </LayoutGrid>
    </ViewDefault>
  );
}

export default PageSignup;
