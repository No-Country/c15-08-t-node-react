import React, { useEffect, useState } from "react";
import { mainColors } from "../styles/mainColors";
import { useParams } from "react-router-dom";
import BoxReserve from "../components/BoxReserve/BoxReserve";

import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import ViewDefault from "../components/ViewDefault/ViewDefault";
import moment from "moment";
import LayoutGrid from "../components/LayoutGrid/LayoutGrid";

function PageReservations() {
  const { userId } = useParams();
  const [reserves, setReserves] = useState([]);
  const [loading, setLoading] = useState(false);

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
        setReserves(reserves);
      })
      .catch((error) => console.log(error));
  };

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
          setReserves(reserves);
        })
        .catch((error) => console.log(error));
    };
    handleFetchReserve();
  }, [userId]);
  return (
    <ViewDefault>
      <LayoutGrid>
        <h2
          style={{
            paddingLeft: "10px",
            marginTop: "2vh",
            fontFamily: "PoppinsMedium",
            fontWeight: "800",
            fontSize: "16px",
            textAlign: "left",
            marginBottom: "-5px",
            color: mainColors.textBlack,
            alignSelf: "flex-start",
            gridColumn: "span 2",
          }}
        >
          MIS RESERVAS
        </h2>

        <h2
          style={{
            paddingLeft: "2px",
            marginTop: "2px",
            fontFamily: "PoppinsMedium",
            fontWeight: "300",
            fontSize: "14px",
            textAlign: "left",
            marginBottom: "-5px",
            color: mainColors.textBlack,
            alignSelf: "flex-start",
            gridColumn: "span 2",
          }}
        >
          En curso
        </h2>
      </LayoutGrid>
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
            const date = reserve.date + " " + reserve.schedule;
            if (moment(date).isSameOrAfter() && reserve.status === "reserved") {
              return (
                <BoxReserve
                  after={true}
                  reserveId={reserve.id.slice(-7)}
                  time={reserve.schedule}
                  date={moment(reserve.date).format("DD/MM/YYYY")}
                  people={reserve.diners}
                  cancel={reserve.status === "reserved" ? false : true}
                  onclick={handleFetchReserve}
                ></BoxReserve>
              );
            }
          })
      )}
      <LayoutGrid>
        <h2
          style={{
            paddingLeft: "2px",
            marginTop: "2px",
            fontFamily: "PoppinsMedium",
            fontWeight: "300",
            fontSize: "14px",
            textAlign: "left",
            marginBottom: "-5px",
            color: mainColors.textBlack,
            alignSelf: "flex-start",
            gridColumn: "span 2",
          }}
        >
          Anteriores
        </h2>
      </LayoutGrid>

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
            const date = reserve.date + " " + reserve.schedule;

            if (moment(date).isBefore() || reserve.status !== "reserved") {
              return (
                <BoxReserve
                  reserveId={reserve.id.substring(0, 6)}
                  time={reserve.schedule}
                  date={moment(reserve.date).format("DD/MM/YYYY")}
                  people={reserve.diners}
                  cancel={reserve.status === "reserved" ? false : true}
                  after={false}
                ></BoxReserve>
              );
            }
          })
      )}
    </ViewDefault>
  );
}

export default PageReservations;
