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
  const [people, setPeople] = useState();

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
          console.log(reserve);
          setTime(reserve.schedule);
          setDate(moment(reserve.date).format("DD/MM/YYYY"));
          setPeople(reserve.diners);
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
          marginTop: "20px",
        }}
      >
        TU RESERVA HA SIDO CONFIRMADA
      </h2>
      {loading ? (
        <Spinner
          size={17}
          color={mainColors.buttonColor}
          style={{ textAlign: "center" }}
        />
      ) : (
        <>
          <div
            style={{
              boxShadow: "1px 1px 6px rgba(0,0,0,.2)",
              margin: "0",
              padding: "20px 0px 0px 0px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
            }}
          >
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
                Cantidad de personas:
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
                {people}
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
                fontWeight: "400",
                fontSize: "16px",
                marginBottom: "20px",
                color: mainColors.textBlack,
              }}
            >
              Te esperamos!
            </h2>
          </div>
          <LayoutGrid>
            <Button
              text={"Ver mis reservas"}
              click={() => navigate(`/reservations/${userId}`)}
            />
          </LayoutGrid>
        </>
      )}
    </ViewDefault>
  );
}

export default PageConfirmation;
