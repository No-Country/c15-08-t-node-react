
import React from "react";
import ImageHome from "../components/ImageHome/ImageHome";
import { useNavigate } from "react-router-dom";
function PageHome() {
  let navigate = useNavigate();


  return (
   
      <ImageHome/>
     
  );
}

export default PageHome;
