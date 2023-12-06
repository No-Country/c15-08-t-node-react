import React, { useState } from "react";
import Button from "components/Button/Button";

import { InputMail, InputPass } from "components/InputText/InputText";
import LayoutGrid from "components/LayoutGrid/LayoutGrid";
import ViewDefault from "components/ViewDefault/ViewDefault";

import validator from "validator";
import ImageEpicureos from "components/ImageEpicureos/ImageEpicureos";
import LabelLink from "components/LabelLink/LabelLink";
import LabelLinkForgot from "components/LabelLink/LabelLinkForgot";
import { useNavigate } from "react-router-dom";

function PageLogin() {
  let navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);

  const checkHandleLogin = () => {
    if (validator.isEmail(mail) && pass.length > 0) {
      handleLogIn();
      console.log("Valid");
    } else {
      console.log("Not Valid");
    }
    return null;
  };

  const handleLogIn = async () => {
    console.log(mail, pass);
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
          localStorage.setItem("email", mail);
          setMail("");
          setPass("");
          console.log("User Logged");
          alert("User Logged");
          navigate("/home");
          setLoading(false);
        } else if (response.status === 400) {
          console.log("User doesnt exist");
          setMail("");
          setPass("");
          alert("Wrong Password");
          setLoading(false);
        } else {
          setLoading(false);
        }
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
        <InputMail mail={mail} setMail={setMail} />
        <InputPass pass={pass} setPass={setPass} />
        <LabelLinkForgot to={"/forgot"} label={"¿OLVIDASTE TU CONTRASEÑA?"} />
        <Button text={"INGRESA"} loading={loading} click={checkHandleLogin} />
      </LayoutGrid>
    </ViewDefault>
  );
}

export default PageLogin;
