// @ts-nocheck
import React, { useState } from "react";
import { styles } from "./styles";
import { mainColors } from "../../styles/mainColors";

import { Spinner } from "react-activity";
import "react-activity/dist/library.css";

function ButtonProfile({ text, click, loading = false }) {
  const [active, setActive] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleActive = {
    backgroundColor: !active
      ? mainColors.buttonColor
      : mainColors.buttonClickedColor,
  };

  const handleClick = clicked ? styles.buttonActive : null;
  return (
    <button
      style={{
        ...styles.buttonDefaultP,
        color: mainColors.textWhite,
        ...handleActive,
        ...handleClick,
      }}
      onClick={click}
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => setActive(false)}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
    >
      {loading ? (
        <Spinner
          size={11.2}
          color={mainColors.textWhite}
          style={{ textAlign: "center" }}
        />
      ) : (
        `${text}`
      )}
    </button>
  );
}

export default ButtonProfile;
