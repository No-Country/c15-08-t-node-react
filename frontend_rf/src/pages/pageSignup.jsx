import React, { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import { mainColors } from "../styles/mainColors";
import {
  InputMail,
  InputNom,
  InputPass,
  InputTel,
} from "../components/InputText/InputText";
import LayoutGrid from "../components/LayoutGrid/LayoutGrid";
import ViewDefault from "../components/ViewDefault/ViewDefault";

import ImageEpicureos from "../components/ImageEpicureos/ImageEpicureos";
import LabelLink from "../components/LabelLink/LabelLink";
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

  const [camposVacios, setCamposVacios] = useState(false);
  const [mailUsed, setMailUsed] = useState(false);

  const [placeholderMailError, setPlaceholderMailError] = useState(false);
  const [placeholderTelError, setPlaceholderTelError] = useState(false);
  const [placeholderPassError, setPlaceholderPassError] = useState(false);

  useEffect(() => {
    setMailUsed(false);
    if (!validator.isEmail(mail) && mail.length > 0) {
      setPlaceholderMailError(true);
    } else {
      setPlaceholderMailError(false);
    }
  }, [mail, setMail]);

  useEffect(() => {
    if (
      !validator.isStrongPassword(pass, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      }) &&
      pass.length > 0
    ) {
      setPlaceholderPassError(true);
    } else {
      setPlaceholderPassError(false);
    }
  }, [pass, setPass]);

  useEffect(() => {
    if (
      !validator.isMobilePhone(tel.trim(), ["es-AR", "es-MX"]) &&
      tel.length > 0
    ) {
      setPlaceholderTelError(true);
    } else {
      setPlaceholderTelError(false);
    }
  }, [tel, setTel]);

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
      setCamposVacios(false);
      handleSignup();
    } else {
      console.log("Campos Vacios");
      setCamposVacios(true);
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
          navigate("/otpvalidation");
          return response.json();
        } else if (response.status === 400) {
          console.log("User already exists");
          setMailUsed(true);
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
            Ingresá
          </span>
        }
      />
      <LayoutGrid>
        <InputNom
          nom={firstNom}
          setNom={setFirstNom}
          label={"Nombre"}
          placeholderError={undefined}
        />
        <InputNom
          nom={lastNom}
          setNom={setLastNom}
          label={"Apellido"}
          placeholderError={undefined}
        />
        <InputMail
          placeholderError={placeholderMailError}
          mail={mail}
          setMail={setMail}
        />
        {mailUsed && (
          <h2
            style={{
              fontFamily: "PoppinsLight",
              fontWeight: "300",
              marginTop: "-5px",
              fontSize: "11px",
              color: mainColors.textBlack,
              textAlign: "left",
              gridColumn: "span 2",
              paddingLeft: "2px",
            }}
          >
            Este mail ya esta en uso
          </h2>
        )}
        {placeholderMailError && (
          <h2
            style={{
              fontFamily: "PoppinsLight",
              fontWeight: "300",
              marginTop: "-5px",
              fontSize: "11px",
              color: mainColors.textBlack,
              textAlign: "left",
              gridColumn: "span 2",
              paddingLeft: "2px",
            }}
          >
            Por favor, introducí un mail válido
          </h2>
        )}
        <InputTel
          placeholderError={placeholderTelError}
          tel={tel}
          setTel={setTel}
        />
        {placeholderTelError && (
          <h2
            style={{
              fontFamily: "PoppinsLight",
              fontWeight: "300",
              marginTop: "-5px",
              fontSize: "11px",
              color: mainColors.textBlack,
              textAlign: "left",
              gridColumn: "span 2",
              paddingLeft: "2px",
            }}
          >
            Por favor, introducí un teléfono válido
          </h2>
        )}
        <InputPass
          placeholderError={placeholderPassError}
          pass={pass}
          setPass={setPass}
        />
        {placeholderPassError && (
          <h2
            style={{
              fontFamily: "PoppinsLight",
              fontWeight: "300",
              marginTop: "-5px",
              fontSize: "11px",
              color: mainColors.textBlack,
              textAlign: "left",
              gridColumn: "span 2",
              paddingLeft: "2px",
            }}
          >
            Minimo 8 caractéres, 1 minúscula, 1 mayúscula y un caracter especial
            (@ , $ , %)
          </h2>
        )}
        {camposVacios && (
          <h2
            style={{
              fontFamily: "PoppinsLight",
              fontWeight: "300",
              fontSize: "11px",
              marginBottom: "20px",
              color: mainColors.textBlack,
              textAlign: "center",
              gridColumn: "span 2",
            }}
          >
            Favor llenar todos los campos
          </h2>
        )}
        <Button
          text={"Registrate"}
          loading={loading}
          click={checkHandleSignup}
        />
      </LayoutGrid>
    </ViewDefault>
  );
}

export default PageSignup;
