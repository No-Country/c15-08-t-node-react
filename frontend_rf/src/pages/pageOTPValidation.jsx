import React from "react";
import ViewDefault from "components/ViewDefault/ViewDefault";

import InputOTPValidation from "components/InputOTPValidation/InputOTPValidation";
import ImageEpicureos from "components/ImageEpicureos/ImageEpicureos";

function PageOTPValidation() {
  return (
    <ViewDefault>
      <ImageEpicureos />
      <InputOTPValidation />
    </ViewDefault>
  );
}

export default PageOTPValidation;
