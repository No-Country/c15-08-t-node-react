import React from "react";
import ViewDefault from "../components/ViewDefault/ViewDefault";
import { mainColors } from "../styles/mainColors";
import InputOTPValidation from "../components/InputOTPValidation/InputOTPValidation";
import ImageEpicureos from "../components/ImageEpicureos/ImageEpicureos";

function PageOTPValidation({ setUserLogged }) {
  return (
    <ViewDefault>
      <ImageEpicureos />
      <h2
        style={{
          marginTop: "2vh",
          fontFamily: "PoppinsMedium",
          fontWeight: "300",
          fontSize: "12px",
          textAlign: "center",
          marginBottom: "10px",
          color: mainColors.textBlack,
          gridColumn: "span 1",
        }}
      >
        Revisa tu correo por el codigo de verificacion
      </h2>
      <InputOTPValidation setUserLogged={setUserLogged} />
    </ViewDefault>
  );
}

export default PageOTPValidation;
