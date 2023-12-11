import { mainColors } from "../../styles/mainColors";
import { isMobile } from "react-device-detect";

const height = window.innerHeight;
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
  marginTop: "-10vh",
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
