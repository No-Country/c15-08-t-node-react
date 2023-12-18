import React from "react";
import ViewDefault from "../components/ViewDefault/ViewDefault";

import InputOTPValidation from "../components/InputOTPValidation/InputOTPValidation";
import ImageEpicureos from "../components/ImageEpicureos/ImageEpicureos";

function PageOTPValidation({ setUserLogged }) {
  return (
    <ViewDefault>
      <ImageEpicureos />
      <InputOTPValidation setUserLogged={setUserLogged} />
    </ViewDefault>
  );
}

export default PageOTPValidation;
