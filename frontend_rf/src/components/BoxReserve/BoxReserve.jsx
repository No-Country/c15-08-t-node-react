import React, { useState } from "react";
import { mainColors } from "../../styles/mainColors";
import { LayoutGridReserve } from "../../components/LayoutGrid/LayoutGrid";

import { IoClose } from "react-icons/io5";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import moment from "moment";
function BoxReserve({
  reserveId,
  time,
  date,
  cancel = false,
  people = null,
  after,
  onclick,
}) {
  const [loading, setLoading] = useState(false);
  const [stars, setStars] = useState(0);

  const handleCancel = async () => {
    console.log(moment().subtract(1, "day").format("YYYY-MM-DD"));
    console.log(moment(date, "DD/MM/YYYY").format("YYYY-MM-DD"));
    setLoading(true);
    await fetch(
      `https://restaurant-c2gx.onrender.com/api/v1/booking/deleteReservation/${reserveId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        console.log(response);
        onclick();
        if (response.status === 200) {
          setLoading(false);
          return response.json();
        } else if (response.status === 400) {
          setLoading(false);
        } else {
          setLoading(false);
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        width: "82%",
        height: "auto",
        padding: "5px 10px",
        backgroundColor: mainColors.backWhite,
        boxShadow: "0px 0px 5px 0px rgba(37, 37, 37, .35)",
      }}
    >
      {loading ? (
        <Spinner
          size={17}
          color={mainColors.buttonColor}
          style={{ textAlign: "center", margin: "3vh" }}
        />
      ) : (
        <LayoutGridReserve>
          <h2
            style={{
              fontFamily: "PoppinsMedium",
              fontWeight: "800",
              fontSize: "11px",
              textAlign: "left",
              marginBottom: "0px",
              gridColumn: "span 1",
              color: mainColors.textDisabled,
            }}
          >
            {cancel ? "Reserva cancelada" : "Reserva confirmada"}
          </h2>
          {after &&
          moment().isSameOrBefore(
            moment(date, "DD/MM/YYYY").subtract(1, "day")
          ) ? (
            <div
              style={{
                gridColumn: "span 1",
                alignSelf: "flex-end",
                alignContent: "flex-end",
                marginBottom: "-18px",

                textAlign: "end",
              }}
            >
              <IoClose
                onClick={handleCancel}
                size={30}
                color={mainColors.textDisabled}
              />
            </div>
          ) : null}
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
              gridColumn: "span 2",
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
              textAlign: "left",
              alignSelf: "start",
              marginBottom: "-10px",
              gridColumn: "span 2",
              color: mainColors.textDisabled,
            }}
          >
            {people ? `${people} personas` : ""}
          </h2>
        </LayoutGridReserve>
      )}
    </div>
  );
}

export default BoxReserve;
