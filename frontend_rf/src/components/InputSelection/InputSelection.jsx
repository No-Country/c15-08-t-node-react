// @ts-nocheck
import React from "react";
import Select from "react-select";
import "./inputSelection.css";
import { mainColors } from "../../styles/mainColors";

function InputSelection({ placeholder, options, onChange }) {
  const colorStyles = {
    control: (styles) => ({
      ...styles,
      padding: "6px 17px",
      borderRadius: "0",
      backgroundColor: mainColors.backWhite,
      color: mainColors.textBlack,
    }),
  };
  return (
    <Select
      className="select"
      styles={colorStyles}
      placeholder={placeholder}
      options={options}
      onChange={onChange}
    ></Select>
  );
}

export default InputSelection;
