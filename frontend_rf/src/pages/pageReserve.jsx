import React, { useState, useEffect } from "react";
import LayoutGrid from "../components/LayoutGrid/LayoutGrid";
import Button from "../components/Button/Button";
import { mainColors } from "../styles/mainColors";
import ViewDefault from "../components/ViewDefault/ViewDefault";
import ImageEpicureos from "../components/ImageEpicureos/ImageEpicureos";
import InputSelection from "../components/InputSelection/InputSelection";

import { useNavigate } from "react-router-dom";
import {
  makeObject,
  makeObjectPeople,
  makeObjectTime,
} from "../hooks/handlers";

function PageReserve({ userLoggedIn }) {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [time2, setTime2] = useState("");
  const [people, setPeople] = useState("");
  const [people2, setPeople2] = useState("");
  const [optionsDate, setOptionsDate] = useState();
  const [optionsTime, setOptionsTime] = useState();
  const [optionsPeople, setOptionsPeople] = useState();
  const [data, setData] = useState({});
  const [strip, setStrip] = useState("");

  useEffect(() => {
    if (!userLoggedIn) {
      navigate("/signup");
    }
  });

  useEffect(() => {
    const fetchDate = async () => {
      await fetch(
        `https://restaurant-c2gx.onrender.com/api/v1/availability/findDateAvailability/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          // @ts-ignore
          setOptionsDate(makeObject(data));
        });
    };
    fetchDate();
  }, [userLoggedIn]);

  useEffect(() => {
    const handleDate = async () => {
      console.log(date);
      await fetch(
        `https://restaurant-c2gx.onrender.com/api/v1/availability/findStripAvailability/${date}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // @ts-ignore
          setOptionsTime(makeObjectTime(data));
          // @ts-ignore
          setData(data);
        });
      console.log(date);
    };
    handleDate();
  }, [date, setDate]);

  useEffect(() => {
    const handleTime = async () => {
      let strip = "";
      console.log(time);
      if (parseInt(time) <= 3) {
        strip = "strip1";
        setStrip(strip);
      } else {
        strip = "strip2";
        setStrip(strip);
      }
      console.log("data", data);
      // @ts-ignore
      console.log(strip);
      console.log(data[strip]);
      // @ts-ignore
      setOptionsPeople(makeObjectPeople(data[strip]));
    };
    handleTime();
  }, [setTime, time, data]);

  const handleReservation = async () => {
    console.log(date, time, people);
    setLoading(true);
    if (date === "" || time === "" || people === "") {
      setLoading(false);
      return;
    }
    await fetch(
      `https://restaurant-c2gx.onrender.com/api/v1/booking/createbooking/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: date,
          schedule: time2,
          strip: strip,
          diners: parseInt(people2),
          status: "reserved",
          userId: JSON.parse(localStorage.getItem("user")).id,
        }),
      }
    )
      .then((response) => {
        if (response.status === 200) {
          console.log("Reserva Creada");
          setLoading(false);

          return response.json();
        } else if (response.status === 400) {
          setLoading(false);
        } else {
          setLoading(false);
        }
      })
      .then((numreserva) => {
        console.log(numreserva);
        navigate(`/confirmation/${numreserva}`);
      })
      .catch((error) => console.log(error));
  };
  return (
    <ViewDefault>
      <ImageEpicureos />
      <h2
        style={{
          fontFamily: "PoppinsMedium",
          fontWeight: "400",
          fontSize: "14px",
          marginBottom: "10px",
          color: mainColors.textBlack,
        }}
      >
        Hacé tu reserva, ¡te estamos esperando!
      </h2>

      <LayoutGrid>
        <InputSelection
          onChange={(value) => setDate(value.value)}
          placeholder={"Fecha"}
          options={optionsDate}
        />
        {date && (
          <InputSelection
            onChange={(value) => {
              setTime(value.value);
              setTime2(value.label);
            }}
            placeholder={"Hora"}
            options={optionsTime}
          />
        )}
        {date && time && (
          <InputSelection
            onChange={(value) => {
              setPeople(value.value);
              setPeople2(value.label);
            }}
            placeholder={"Personas"}
            options={optionsPeople}
          />
        )}
        <Button text={"Reservar"} loading={loading} click={handleReservation} />
      </LayoutGrid>
    </ViewDefault>
  );
}

export default PageReserve;
