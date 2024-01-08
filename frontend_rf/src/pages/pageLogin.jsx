import React, { useState } from "react";
import Button from "../components/Button/Button";

import { InputMail, InputPass } from "../components/InputText/InputText";
import LayoutGrid from "../components/LayoutGrid/LayoutGrid";
import ViewDefault from "../components/ViewDefault/ViewDefault";
import { mainColors } from "../styles/mainColors";
import validator from "validator";
import ImageEpicureos from "../components/ImageEpicureos/ImageEpicureos";
import LabelLink from "../components/LabelLink/LabelLink";
import LabelLinkForgot from "../components/LabelLink/LabelLinkForgot";
import { useNavigate } from "react-router-dom";

function PageLogin({ setUserLogged }) {
  let navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const checkHandleLogin = () => {
    if (validator.isEmail(mail) && pass.length > 0) {
      handleLogIn();
    }
    return null;
  };

  const handleLogIn = async () => {
    setLoading(true);
    await fetch(`https://restaurant-c2gx.onrender.com/api/v1/auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: mail.toLowerCase(), password: pass }),
    })
      .then((response) => {
        if (response.status === 200) {
          setLoading(false);
          return response.json();
        } else if (response.status === 400) {
          setMail("");
          setPass("");
          setError(true);
          setLoading(false);
        } else {
          setLoading(false);
        }
      })
      .then((user) => {
        setUserLogged(true);
        localStorage.setItem("user", JSON.stringify(user.session));
        localStorage.setItem("email", mail.toLowerCase());
        setMail("");
        setPass("");
        navigate("/home");
      })
      .catch((error) => console.log(error));
  };

  return (
    <ViewDefault>
      <ImageEpicureos />
      <LabelLink
        to={"/signup"}
        label={"¿No tenés una cuenta? "}
        children={
          <span style={{ textDecoration: "underline", fontWeight: "600" }}>
            Registrate
          </span>
        }
      />

      <LayoutGrid>
        {error && (
          <h2
            style={{
              fontFamily: "PoppinsLight",
              fontWeight: "300",
              marginBottom: "-3px",
              fontSize: "13px",
              color: mainColors.textBlack,
              textAlign: "center",
              gridColumn: "span 2",
            }}
          >
            Contraseña incorrecta, intenta otra vez
          </h2>
        )}
        <InputMail placeholderError={undefined} mail={mail} setMail={setMail} />
        <InputPass placeholderError={undefined} pass={pass} setPass={setPass} />
        <LabelLinkForgot to={"/forgot"} label={"¿Olvidaste tu contraseña?"} />
        <Button text={"Ingresá"} loading={loading} click={checkHandleLogin} />
      </LayoutGrid>
    </ViewDefault>
  );
}

export default PageLogin;
