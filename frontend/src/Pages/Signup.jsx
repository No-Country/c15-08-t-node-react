import React from "react";
import Button from "../Components/Button/Button.jsx";
import { mainColors } from "../assets/colors.js";
import { InputNom,InputTel, InputMail, InputPass } from "../Components/Input/Input.jsx";


function Signup() {
    return (
      <div
        style={{

          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: mainColors.secondaryColor,
          gap: "10px",
        }}
      >
        <h1
          style={{ fontFamily: "Marcellus", fontWeight: "300", fontSize: "35px" }}
        >
          Lorem Ipsum
        </h1>
        <a
          href="#2"
          style={{ textDecoration: "none", color: mainColors.primaryColor }}
        >
          <h2
            style={{
              fontFamily: "LEMONMILK",
              fontWeight: "300",
              fontSize: "14px",
            }}
          >
            YA TIENES UNA CUENTA INICIA SESIÓN
          </h2>
        </a>
        <InputNom></InputNom>
        <InputTel></InputTel>
        <InputMail></InputMail>
        <InputPass></InputPass>
        <a
          href="#2"
          style={{
            maxWidth: "400px",
            width: "80%",
            alignSelf: "center",
            textAlign: "left",
            textDecoration: "none",
            color: mainColors.primaryColor,
          }}
        >
          <h2
            style={{
              fontFamily: "LEMONMILK",
              fontWeight: "300",
              fontSize: "12px",
            }}
          >
            ¿OLVIDASTE TU CONTRASEÑA?
          </h2>
        </a>
  
        <Button
          bColor={mainColors.primaryColor}
          tColor={mainColors.textColor}
          iColor={mainColors.inactiveColor}
          text={"REGISTRATE"}
        ></Button>
      </div>
    );
  }
  
  export default Signup;
  