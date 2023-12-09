import React, { useState, useEffect } from "react";
import { InputMail } from "../components/InputText/InputText";
import { useNavigate } from "react-router-dom";
import LayoutGrid from "../components/LayoutGrid/LayoutGrid";
import ViewDefault from "../components/ViewDefault/ViewDefault";
import Button from "../components/Button/Button";
import ImageEpicureos from "../components/ImageEpicureos/ImageEpicureos";
import { mainColors } from "styles/mainColors";
import validator from "validator";
function PageForgot() {
  const [placeholderMailError, setPlaceholderMailError] = useState(false);
  let navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!validator.isEmail(mail) && mail.length > 0) {
      setPlaceholderMailError(true);
    } else {
      setPlaceholderMailError(false);
    }
  }, [mail, setMail]);

  const checkHandleForgot = () => {
    if (validator.isEmail(mail)) {
      handleForgot();
    } else {
      setPlaceholderMailError(true);
    }
  };
  const handleForgot = async () => {
    setLoading(true);
    await fetch(
      `https://restaurant-c2gx.onrender.com/api/v1/auth/recover/${mail}`,
      {
        method: "POST",
      }
    ).then((response) => {
      console.log(response);
      setLoading(false);
      setMail("");
      navigate("/otpvalidation");
      localStorage.setItem("email", mail);
    });
  };
  return (
    <ViewDefault>
      <ImageEpicureos />
      <div style={{ marginBottom: "20px" }}></div>
      <LayoutGrid>
        <InputMail
          placeholderError={placeholderMailError}
          mail={mail}
          setMail={setMail}
        />
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
        <Button
          text={"Recuperar Contraseña"}
          loading={loading}
          click={checkHandleForgot}
        />
      </LayoutGrid>
    </ViewDefault>
  );
}

export default PageForgot;
