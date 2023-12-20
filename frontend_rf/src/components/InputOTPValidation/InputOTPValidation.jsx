// @ts-nocheck
import React, { useState } from "react";
import VerificationInput from "react-verification-input";
import Button from "../../components/Button/Button";
import "./inputOTPValidation.css";
import LayoutGrid from "../../components/LayoutGrid/LayoutGrid";
import { useNavigate } from "react-router-dom";
import { mainColors } from "../../styles/mainColors";
function InputOTPValidation({ setUserLogged }) {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [valNumber, setValNumber] = useState("");
  const [error, setError] = useState(false);

  const handleVerification = async () => {
    console.log(valNumber);

    if (valNumber.length < 6) {
      setError(true);
      return;
    }
    setLoading(true);
    await fetch(`https://restaurant-c2gx.onrender.com/api/v1/auth/validate/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("email"),
        code: valNumber,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("User Verified");
          alert("User Verified");
          setLoading(false);
          setError(false);
          setUserLogged(true);
          navigate("/home");
        } else if (response.status === 400) {
          console.log(error);
          setLoading(false);
          setError(true);
        } else {
          setLoading(false);
          setError(false);
        }
      })

      .catch((error) => console.log(error));
  };
  return (
    <LayoutGrid>
      <VerificationInput
        value={valNumber}
        autoFocus={true}
        onChange={setValNumber}
        classNames={{
          character: "character",
          characterSelected: "character--selected",
          container: "container",
        }}
      />
      {error && (
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
          Codigo Invalido
        </h2>
      )}
      <Button text={"Validar"} loading={loading} click={handleVerification} />
    </LayoutGrid>
  );
}

export default InputOTPValidation;