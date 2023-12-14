import React from "react";
import { mainColors } from "../../styles/mainColors";
import moment from "moment";
import LayoutGrid from "../../components/LayoutGrid/LayoutGrid";

function BoxReserve({ reserveId, time, date }) {
  const passed = moment(date).isBefore();
  return (
    <div
      style={{
        width: "82%",
        height: "auto",
        padding: "10px",
        backgroundColor: mainColors.backBrownOpaque,
      }}
    >
      <LayoutGrid>
        <h2
          style={{
            fontFamily: "PoppinsMedium",
            fontWeight: "800",
            fontSize: "14px",
            textAlign: "left",
            margin: "0",
            gridColumn: "span 1",
            color: mainColors.textBlack,
          }}
        >
          Fecha: {date}
        </h2>
        <h2
          style={{
            fontFamily: "PoppinsMedium",
            fontWeight: "800",
            fontSize: "10px",
            textAlign: "right",
            alignSelf: "start",
            margin: "0",
            gridColumn: "span 1",
            color: mainColors.textBlack,
          }}
        >
          {reserveId}
        </h2>
        <h2
          style={{
            fontFamily: "PoppinsMedium",
            fontWeight: "400",
            margin: "0",
            fontSize: "14px",
            color: mainColors.textBlack,
            textAlign: "left",
          }}
        >
          Hora: {time}
        </h2>
        <h2
          style={{
            fontFamily: "PoppinsMedium",
            margin: "0",
            fontWeight: "800",
            fontSize: "24px",
            color: mainColors.textBlack,
            textAlign: "center",
            gridColumn: "span 2",
          }}
        >
          {!passed ? "En curso" : "Pasada"}
        </h2>
      </LayoutGrid>
    </div>
  );
}

export default BoxReserve;
