import Button from "../components/Button/Button";
import ViewDefault from "../components/ViewDefault/ViewDefault";
import React from "react";
import { useNavigate } from "react-router-dom";
function PageHome() {
  let navigate = useNavigate();

  return (
    <ViewDefault>
      <Button
        loading={false}
        text={"REGISTRATE"}
        click={() => navigate("/signup")}
      />
      <Button
        loading={false}
        text={"OTPVALIDATION"}
        click={() => navigate("/otpvalidation")}
      />
      <Button
        loading={false}
        text={"RESERVE"}
        click={() => navigate("/reserve")}
      />
    </ViewDefault>
  );
}

export default PageHome;
