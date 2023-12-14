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
          marginTop: "30px",
          fontFamily: "PoppinsMedium",
          fontWeight: "800",
          fontSize: "16px",
          color: mainColors.textBlack,
        }}
      >
        Mis reservas
      </h2>
      {loading ? (
        <Spinner
          size={17}
          color={mainColors.buttonColor}
          style={{ textAlign: "center", marginTop: "2vh" }}
        />
      ) : reserves == undefined ? (
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
          No tenés reservas
        </h2>
      ) : (
        reserves
          .sort((a, b) => (a.date > b.date ? -1 : 1))
          .map((reserve) => (
            <BoxReserve
              reserveId={reserve.id.substring(0, 6)}
              time={reserve.schedule}
              date={moment(reserve.date).format("DD/MM/YYYY")}
            ></BoxReserve>
          ))
      )}
    </ViewDefault>
  );
}

export default PageReservations;
