import React, { useEffect, useState } from "react";
import { mainColors } from "../styles/mainColors";
import { useParams } from "react-router-dom";
import BoxReserve from "../components/BoxReserve/BoxReserve";

import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import ViewDefault from "../components/ViewDefault/ViewDefault";
import moment from "moment";
function PageReservations() {
  const { userId } = useParams();
  const [reserves, setReserves] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleFetchReserve = async () => {
      setLoading(true);
      await fetch(
        `https://restaurant-c2gx.onrender.com/api/v1/booking/showReservation/${userId}`,
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
        .then((reserves) => {
          console.log(reserves);
          setReserves(reserves);
        })
        .catch((error) => console.log(error));
    };
    handleFetchReserve();
  }, [userId]);
  return (
    <ViewDefault>
      <h2
        style={{
          paddingLeft: "38px",
          marginTop: "2vh",
          fontFamily: "PoppinsMedium",
          fontWeight: "800",
          fontSize: "16px",
          textAlign: "left",
          marginBottom: "-5px",
          color: mainColors.textBlack,
          alignSelf: "flex-start",
        }}
      >
        MIS RESERVAS
      </h2>
      <h2
        style={{
          paddingLeft: "35px",
          marginTop: "2px",
          fontFamily: "PoppinsMedium",
          fontWeight: "300",
          fontSize: "14px",
          textAlign: "left",
          marginBottom: "-5px",
          color: mainColors.textBlack,
          alignSelf: "flex-start",
        }}
      >
        En curso
      </h2>
      {loading ? (
        <Spinner
          size={17}
          color={mainColors.buttonColor}
          style={{ textAlign: "center", marginTop: "2vh" }}
        />
      ) : reserves === undefined ? (
        <h2
          style={{
            marginTop: "2vh",
            fontFamily: "PoppinsMedium",
            fontWeight: "400",
            fontSize: "14px",
            marginBottom: "10px",
            color: mainColors.textBlack,
          }}
        >
          No tenés reservas en curso
        </h2>
      ) : (
        reserves
          .sort((a, b) => (a.date > b.date ? -1 : 1))
          .map((reserve) => {
            if (moment(reserve.date).isSameOrAfter()) {
              return (
                <BoxReserve
                  reserveId={reserve.id.substring(0, 6)}
                  time={reserve.schedule}
                  date={moment(reserve.date).format("DD/MM/YYYY")}
                  people={reserve.diners}
                  cancel={reserve.status === "reserved" ? false : true}
                ></BoxReserve>
              );
            }
          })
      )}
      <h2
        style={{
          paddingLeft: "35px",
          marginTop: "2px",
          fontFamily: "PoppinsMedium",
          fontWeight: "300",
          fontSize: "14px",
          textAlign: "left",
          marginBottom: "-5px",
          color: mainColors.textBlack,
          alignSelf: "flex-start",
        }}
      >
        Anteriores
      </h2>
      {loading ? (
        <Spinner
          size={17}
          color={mainColors.buttonColor}
          style={{ textAlign: "center", marginTop: "2vh" }}
        />
      ) : reserves === undefined ? (
        <h2
          style={{
            marginTop: "2vh",
            fontFamily: "PoppinsMedium",
            fontWeight: "400",
            fontSize: "14px",
            marginBottom: "10px",
            color: mainColors.textBlack,
          }}
        >
          No tenés reservas pasadas
        </h2>
      ) : (
        reserves
          .sort((a, b) => (a.date > b.date ? -1 : 1))
          .map((reserve) => {
            if (moment(reserve.date).isBefore()) {
              return (
                <BoxReserve
                  reserveId={reserve.id.substring(0, 6)}
                  time={reserve.schedule}
                  date={moment(reserve.date).format("DD/MM/YYYY")}
                ></BoxReserve>
              );
            }
          })
      )}
    </ViewDefault>
  );
}

export default PageReservations;
