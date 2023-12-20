import React from "react";
// @ts-nocheck
//Components
import { styles } from "./styles";
import "./inputText.css";
const Input = ({ type, label, value, onChange, placeholderError = false }) => {
  return (
    <div style={{ ...styles.container }}>
      <input
        autoComplete="false"
        className={placeholderError ? "placeholderError error" : ""}
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

const InputTe = ({
  type,
  label,
  value,
  onChange,
  placeholderError = false,
}) => {
  return (
    <div style={{ ...styles.containernom }}>
      <input
        className={placeholderError ? "placeholderError error" : ""}
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

export const InputNom = ({ nom, setNom, label, placeholderError }) => {
  const onChangeNom = (event) => {
    setNom(event.target.value);
  };

  return (
    <InputTe
      placeholderError={placeholderError}
      type="text"
      label={label}
      value={nom}
      onChange={onChangeNom}
    />
  );
};

export const InputTel = ({ tel, setTel, placeholderError }) => {
  const onChangeTel = (event) => {
    setTel(event.target.value);
  };

  return (
    <Input
      placeholderError={placeholderError}
      type="tel"
      label="Teléfono"
      value={tel}
      onChange={onChangeTel}
    />
  );
};

export const InputTelShort = ({ tel, setTel, placeholderError }) => {
  const onChangeTel = (event) => {
    setTel(event.target.value);
  };

  return (
    <InputTe
      placeholderError={placeholderError}
      type="tel"
      label="Teléfono"
      value={tel}
      onChange={onChangeTel}
    />
  );
};

export const InputMail = ({ mail, setMail, placeholderError }) => {
  const onChangeMail = (event) => {
    setMail(event.target.value);
  };

  return (
    <Input
      placeholderError={placeholderError}
      type="email"
      label="Mail"
      value={mail}
      onChange={onChangeMail}
    />
  );
};

export const InputPass = ({ pass, setPass, placeholderError }) => {
  const onChangePass = (event) => {
    setPass(event.target.value);
  };

  return (
    <Input
      type="password"
      label={"Contraseña"}
      value={pass}
      onChange={onChangePass}
      placeholderError={placeholderError}
    />
  );
};

export const InputPassShort = ({ pass, setPass, placeholderError }) => {
  const onChangePass = (event) => {
    setPass(event.target.value);
  };

  return (
    <InputTe
      type="password"
      label={"Contraseña"}
      value={pass}
      onChange={onChangePass}
      placeholderError={placeholderError}
    />
  );
};

export const InputPassLg = ({ pass, setPass, placeholderError }) => {
  const onChangePass = (event) => {
    setPass(event.target.value);
  };

  return (
    <>
      <Input
        type="password"
        label={"Contraseña"}
        value={pass}
        onChange={onChangePass}
      />
    </>
  );
};
