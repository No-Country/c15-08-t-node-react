import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ViewDefault from "../components/ViewDefault/ViewDefault";
import Button from "../components/Button/Button";
import { mainColors } from "../styles/mainColors";
import { useNavigate } from "react-router-dom";

import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import moment from "moment";
import LayoutGrid from "../components/LayoutGrid/LayoutGrid";
function PageConfirmation() {
  const userId = JSON.parse(localStorage.getItem("user"))?.id;
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { reserveId } = useParams();
  const [date, setDate] = useState("fecha");
  const [time, setTime] = useState("hora");

  useEffect(() => {
    const handleFetchReserve = async () => {
      setLoading(true);
      await fetch(
        `https://restaurant-c2gx.onrender.com/api/v1/booking/findReservation/${reserveId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            setLoading(false);
            return response.json();
          } else if (response.status === 400) {
            setLoading(false);
          } else {
            setLoading(false);
          }
        })
        .then((reserve) => {
          setTime(reserve.schedule);
          setDate(moment(reserve.date).format("DD/MM/YYYY"));
        })
        .catch((error) => console.log(error));
    };
    handleFetchReserve();
  }, [reserveId]);

  return (
    <ViewDefault>
      <h2
        style={{
          fontFamily: "PoppinsMedium",
          fontWeight: "800",
          fontSize: "16px",
          marginBottom: "20px",
          color: mainColors.textBlack,
        }}
      >
        Tu reserva ha sido confirmada
      </h2>
      {loading ? (
        <Spinner
          size={17}
          color={mainColors.buttonColor}
          style={{ textAlign: "center" }}
        />
      ) : (
        <>
          <LayoutGrid>
            <h2
              style={{
                fontFamily: "PoppinsMedium",
                fontWeight: "300",
                fontSize: "12px",
                marginBottom: "5px",
                color: mainColors.textBlack,
                gridColumn: "span 1",
                textAlign: "left",
              }}
            >
              Fecha de la reserva:
            </h2>
            <h2
              style={{
                fontFamily: "PoppinsMedium",
                fontWeight: "800",
                fontSize: "12px",
                marginBottom: "5px",
                color: mainColors.textBlack,
                gridColumn: "span 1",
                textAlign: "right",
              }}
            >
              {date}
            </h2>

            <h2
              style={{
                fontFamily: "PoppinsMedium",
                fontWeight: "300",
                fontSize: "12px",
                marginBottom: "5px",
                color: mainColors.textBlack,
                gridColumn: "span 1",
                textAlign: "left",
              }}
            >
              Hora de la reserva:
            </h2>
            <h2
              style={{
                fontFamily: "PoppinsMedium",
                fontWeight: "800",
                fontSize: "12px",
                marginBottom: "5px",
                color: mainColors.textBlack,
                gridColumn: "span 1",
                textAlign: "right",
              }}
            >
              {time}
            </h2>

            <h2
              style={{
                fontFamily: "PoppinsMedium",
                fontWeight: "300",
                fontSize: "12px",
                marginBottom: "5px",
                color: mainColors.textBlack,
                gridColumn: "span 1",
                textAlign: "left",
              }}
            >
              Sucursal:
            </h2>
            <h2
              style={{
                fontFamily: "PoppinsMedium",
                fontWeight: "800",
                fontSize: "12px",
                marginBottom: "5px",
                color: mainColors.textBlack,
                gridColumn: "span 1",
                textAlign: "right",
              }}
            >
              Calle No C
            </h2>

            <h2
              style={{
                fontFamily: "PoppinsMedium",
                fontWeight: "300",
                fontSize: "12px",
                marginBottom: "5px",
                color: mainColors.textBlack,
                gridColumn: "span 1",
                textAlign: "left",
              }}
            >
              Código de la reserva:
            </h2>
            <h2
              style={{
                fontFamily: "PoppinsMedium",
                fontWeight: "800",
                fontSize: "12px",
                marginBottom: "5px",
                color: mainColors.textBlack,
                gridColumn: "span 1",
                textAlign: "right",
              }}
            >
              {reserveId}
            </h2>
          </LayoutGrid>
          <h2
            style={{
              fontFamily: "PoppinsMedium",
              fontWeight: "800",
              fontSize: "16px",
              marginBottom: "20px",
              color: mainColors.textBlack,
            }}
          >
            Te esperamos!
          </h2>
          <Button
            text={"Ver mis reservas"}
            click={() => navigate(`/reservations/${userId}`)}
          />
        </>
      )}
    </ViewDefault>
  );
}

export default PageConfirmation;
