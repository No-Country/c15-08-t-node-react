import React, { useState } from "react";
import { mainColors } from "../assets/colors.js";
import BImage from "../assets/images/backgroundimage.png";
import { InputMail } from "../Components/Input/Input.jsx";
import Button from "../Components/Button/Button";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import Icon from "../assets/images/icon.png";
import { useNavigate } from "react-router-dom";
function ForgotPassword() {
  let navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [loading, setLoading] = useState(false);

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
      navigate("/validation");
      localStorage.setItem("email", mail);
    });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: mainColors.secondaryColorO,
        gap: "20px",
        overflow: "hidden",
      }}
    >
      <img
        alt="Background"
        src={BImage}
        style={{
          position: "absolute",
          zIndex: "-1",
          width: "100vw",
          height: "100vh",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
      />
      <img
        src={Icon}
        style={{
          paddingTop: "0px",
          height: "190px",
          marginBottom: "10px",
        }}
        alt="Epicureos"
      ></img>
      <InputMail mail={mail} setMail={setMail}></InputMail>
      <Button
        bColor={mainColors.buttonColor}
        tColor={mainColors.textColor}
        iColor={mainColors.inactiveColor}
        text={
          loading ? (
            <Spinner
              size={11.2}
              color={mainColors.textColor}
              style={{ textAlign: "center" }}
            />
          ) : (
            "RECUPERAR CONTRASEÑA"
          )
        }
        click={() => handleForgot()}
      ></Button>
    </div>
  );
}

export default ForgotPassword;
