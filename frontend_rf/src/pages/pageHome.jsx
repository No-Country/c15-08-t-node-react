import React from "react";
import ImageHome from "../components/ImageHome/ImageHome";
import FooterHome from "../components/Footer/FooterHome";
import { useNavigate } from "react-router-dom";
function PageHome() {
  let navigate = useNavigate();

  return (
    <div>
      <ImageHome />
      <FooterHome />
    </div>
     
  );
}

export default PageHome;
