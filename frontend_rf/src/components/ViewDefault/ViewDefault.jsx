// @ts-nocheck
import React from "react";

import backgroundImg from "../../assets/images/backgroundImg.png";
import { styles } from "./styles";

function ViewDefault({ children }) {
  return (
    <div style={styles.container}>
      {children}
      <img
        alt="Background"
        src={backgroundImg}
        style={styles.backgroundImage}
      />
    </div>
  );
}

export default ViewDefault;
