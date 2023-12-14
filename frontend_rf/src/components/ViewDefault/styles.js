import { mainColors } from "../../styles/mainColors";

const container = {
  display: "flex",
  flexDirection: "column",
  height: "auto",
  minHeight: "90vh",
  width: "100%",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "15px",
  paddingBottom: "30px",
  backgroundColor: mainColors.backWhite,
};

const backgroundImage = {
  position: "absolute",
  zIndex: "-1",
  width: "100%",
  height: "100%",
  backgroundRepeat: "repeat",
  backgroundSize: "contain",
  backgroundColor: mainColors.backWhiteOpaque,
  objectFit: "cover",
  display: "block",
  backgroundAttachment: "fixed",
};

export const styles = {
  container: container,
  backgroundImage: backgroundImage,
};
