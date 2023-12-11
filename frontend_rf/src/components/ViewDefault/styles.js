import { mainColors } from "../../styles/mainColors";
import { isMobile } from "react-device-detect";

const height = window.innerHeight - 10;
const container = {
  display: "flex",
  flexDirection: "column",
  height: isMobile ? height : "90vh",
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
  height: isMobile ? height : "90vh",
  backgroundRepeat: "repeat",
  backgroundSize: "contain",
};

export const styles = {
  container: container,
  backgroundImage: backgroundImage,
};
