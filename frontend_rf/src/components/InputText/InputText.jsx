import React, { useState } from "react";
// @ts-nocheck
import validator from "validator";
//Components
import { styles } from "./styles";
const Input = ({ type, label, value, onChange, validation = true }) => {
  return (
    <div style={{ ...styles.container }}>
      <input
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

const InputTe = ({ type, label, value, onChange, validation = true }) => {
  return (
    <div style={{ ...styles.containernom }}>
      <input
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

export const InputNom = ({ nom, setNom, label }) => {
  const onChangeNom = (event) => {
    setNom(event.target.value);
  };

  return (
    <InputTe type="text" label={label} value={nom} onChange={onChangeNom} />
  );
};

export const InputTel = ({ tel, setTel }) => {
  const onChangeTel = (event) => {
    setTel(event.target.value);
  };

  return (
    <Input type="tel" label="Teléfono" value={tel} onChange={onChangeTel} />
  );
};

export const InputMail = ({ mail, setMail }) => {
  const onChangeMail = (event) => {
    setMail(event.target.value);
  };

  return (
    <Input type="email" label="MAIL" value={mail} onChange={onChangeMail} />
  );
};

export const InputPass = ({ pass, setPass }) => {
  const [error, setError] = useState(true);

  const validate = (value) => {
    setError(false);
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setError(true);
    } else if (pass.length > 0) {
      setError(false);
    }
  };

  const onChangePass = (event) => {
    validate(event.target.value);
    setPass(event.target.value);
  };

  return (
    <Input
      type="password"
      label={"Contraseña"}
      value={pass}
      onChange={onChangePass}
      validation={error}
    />
  );
};

export const InputPassLg = ({ pass, setPass }) => {
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
