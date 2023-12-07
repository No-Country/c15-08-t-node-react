import Button from "../components/Button/Button";
import ViewDefault from "../components/ViewDefault/ViewDefault";
import React from "react";
import ImageEpicureos from "../components/ImageEpicureos/ImageEpicureos";
import { useNavigate } from "react-router-dom";
function PageHome() {
  let navigate = useNavigate();

  return (
    <ViewDefault>
      <ImageEpicureos />
      <Button
        loading={false}
        text={"REGISTRATE"}
        click={() => navigate("/signup")}
      />
      <Button
        loading={false}
        text={"RESERVA"}
        click={() => navigate("/reserve")}
      />
    </ViewDefault>
  );
}

export default PageHome;
