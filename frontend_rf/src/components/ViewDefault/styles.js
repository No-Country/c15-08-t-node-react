import { mainColors } from "../../styles/mainColors";

const container = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",
  backgroundColor: mainColors.backWhiteOpaque,
  overflow: "hidden",
};

const backgroundImage = {
  position: "absolute",
  zIndex: "-1",
  width: "100vw",
  height: "100vh",
  backgroundRepeat: "repeat",
  backgroundSize: "contain",
};

export const styles = {
  container: container,
  backgroundImage: backgroundImage,
};
