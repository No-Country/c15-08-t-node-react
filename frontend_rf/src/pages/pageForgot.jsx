import React, { useState } from "react";
import { InputMail } from "../components/InputText/InputText";
import { useNavigate } from "react-router-dom";
import LayoutGrid from "../components/LayoutGrid/LayoutGrid";
import ViewDefault from "../components/ViewDefault/ViewDefault";
import Button from "../components/Button/Button";
import ImageEpicureos from "../components/ImageEpicureos/ImageEpicureos";

function PageForgot() {
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
      navigate("/otpvalidation");
      localStorage.setItem("email", mail);
    });
  };
  return (
    <ViewDefault>
      <ImageEpicureos />
      <LayoutGrid>
        <InputMail mail={mail} setMail={setMail} />
        <Button
          text={"RECUPERAR CONTRASEÑA"}
          loading={loading}
          click={handleForgot}
        />
      </LayoutGrid>
    </ViewDefault>
  );
}

export default PageForgot;
