import React, { useState } from "react";
// @ts-nocheck
//Components
import { mainColors } from "../../styles/mainColors";
import { styles } from "./styles";
import "./inputText.css";

export const InputPassEditable = ({ pass, setPass }) => {
  const onChangePass = (event) => {
    setPass(event.target.value);
  };

  return (
    <>
      <InputEditable
        type="password"
        label={"Contraseña"}
        value={pass}
        onChange={onChangePass}
      />
    </>
  );
};

export const InputTelEditable = ({ tel, setTel }) => {
  const onChangePass = (event) => {
    setTel(event.target.value);
  };

  return (
    <>
      <InputEditable
        type="tel"
        label={"Teléfono"}
        value={tel}
        onChange={onChangePass}
      />
    </>
  );
};
export const InputTextEditable = ({ text, setText, label }) => {
  const onChangeText = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <InputEditable2
        type="text"
        label={label}
        value={text}
        onChange={onChangeText}
      />
    </>
  );
};

const InputEditable = ({ type, label, value, onChange }) => {
  const [disabled, setDisabled] = useState(true);
  return (
    <div style={{ ...styles.container }}>
      <input
        disabled={disabled}
        autoComplete="false"
        style={styles.input}
        type={type}
        id={type}
        value={value}
        onChange={onChange}
        placeholder={label}
      />
      <div
        onClick={() => {
          setDisabled(!disabled);
        }}
        style={{ width: "auto", height: "auto" }}
      >
        <h2
          style={{
            color: disabled
              ? mainColors.buttonColor
              : mainColors.buttonClickedColor,
            paddingLeft: "10px",
            marginTop: "2vh",
            fontFamily: "PoppinsMedium",
            fontWeight: disabled ? "800" : "200",
            fontSize: "14px",
            textAlign: "left",
            marginBottom: "10px",
          }}
        >
          Editar
        </h2>
      </div>
    </div>
  );
};

const InputEditable2 = ({ type, label, value, onChange }) => {
  const [disabled, setDisabled] = useState(true);
  return (
    <div style={{ ...styles.container }}>
      <input
        disabled={disabled}
        autoComplete="false"
        style={styles.input}
        type={type}
        id={type}
        value={value}
        onChange={onChange}
        placeholder={label}
      />
    </div>
  );
};
