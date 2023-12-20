import React from "react";
import { mainColors } from "../../styles/mainColors";
import { LayoutGridReserve } from "../../components/LayoutGrid/LayoutGrid";

function BoxReserve({ reserveId, time, date, cancel = false, people = null }) {
  return (
    <div
      style={{
        width: "82%",
        height: "auto",
        padding: "5px 10px",
        backgroundColor: mainColors.backBrownOpaque,
      }}
    >
      <LayoutGridReserve>
        <h2
          style={{
            fontFamily: "PoppinsMedium",
            fontWeight: "800",
            fontSize: "11px",
            textAlign: "left",
            marginBottom: "-10px",
            gridColumn: "span 2",
            color: mainColors.textDisabled,
          }}
        >
          {cancel ? "Reserva cancelada" : "Reserva confirmada"}
        </h2>
        <h2
          style={{
            fontFamily: "PoppinsMedium",
            fontWeight: "400",
            fontSize: "10px",
            textAlign: "left",
            alignSelf: "start",
            marginBottom: "-10px",
            gridColumn: "span 2",
            color: mainColors.textDisabled,
          }}
        >
          {date}
        </h2>
        <h2
          style={{
            fontFamily: "PoppinsMedium",
            fontWeight: "400",
            fontSize: "10px",
            textAlign: "left",
            alignSelf: "start",
            marginBottom: "-10px",
            gridColumn: "span 1",
            color: mainColors.textDisabled,
          }}
        >
          {time}hs
        </h2>
        <h2
          style={{
            fontFamily: "PoppinsMedium",
            fontWeight: "400",
            fontSize: "10px",
            textAlign: "right",
            alignSelf: "start",
            marginBottom: "-10px",
            gridColumn: "span 1",
            color: mainColors.textDisabled,
          }}
        >
          {people ? `${people} personas` : ""}
        </h2>
      </LayoutGridReserve>
    </div>
  );
}

export default BoxReserve;
