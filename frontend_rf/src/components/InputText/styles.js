const { mainColors } = require("../../styles/mainColors");

const container = {
  backgroundColor: mainColors.backWhite,
  display: "flex",
  width: "100%",
  gridColumn: "span 2",
  justifyContent: "center",
  alignItems: "center",
};

const containernom = {
  backgroundColor: mainColors.backWhite,
  display: "flex",
  width: "100%",
  gridColumn: "span 1",
  justifyContent: "center",
  alignItems: "center",
};

const input = {
  backgroundColor: mainColors.backWhite,
  border: "1px solid " + mainColors.buttonColor,
  borderRadius: "0",
  textDecoration: "none",
  width: "100%",
  padding: "16px 17px",
  fontSize: "12px",
  fontFamily: "'LEMONMILK', Helvetica",
};

export const styles = {
  container: container,
  input: input,
  containernom: containernom,
};
