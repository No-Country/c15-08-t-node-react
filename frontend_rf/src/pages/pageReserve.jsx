import React, { useState, useEffect } from "react";
import LayoutGrid from "../components/LayoutGrid/LayoutGrid";
import Button from "../components/Button/Button";
import { mainColors } from "../styles/mainColors";
import ViewDefault from "../components/ViewDefault/ViewDefault";
import ImageEpicureos from "../components/ImageEpicureos/ImageEpicureos";
import InputSelection from "../components/InputSelection/InputSelection";
import {
  makeObject,
  makeObjectPeople,
  makeObjectTime,
} from "../hooks/handlers";


function PageReserve() {
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("");
  const [optionsDate, setOptionsDate] = useState();
  const [optionsTime, setOptionsTime] = useState();
  const [optionsPeople, setOptionsPeople] = useState();
  const [data, setData] = useState({});

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
  }, []);

  useEffect(() => {
    setPeople("");
    setTime("");
    const handleDate = async () => {
      console.log(date);
      await fetch(
        `https://restaurant-c2gx.onrender.com/api/v1/availability/findStripAvailability/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ date: date }),
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
  }, [setDate, date]);

  useEffect(() => {
    const handleTime = async () => {
      let strip = "";
      console.log(time);
      if (parseInt(time) <= 3) {
        strip = "strip1";
      } else {
        strip = "strip2";
      }
      console.log("data", data);
      // @ts-ignore
      console.log(strip);
      console.log(data[strip]);
      // @ts-ignore
      setOptionsPeople(makeObjectPeople(data[strip]));
    };
    handleTime();
  }, [setTime, time]);

  const handlePeople = async (value) => {
    console.log(value.value);
    setPeople(value.value);
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
            onChange={(value) => setTime(value.value)}
            placeholder={"Hora"}
            options={optionsTime}
          />
        )}
        {date && time && (
          <InputSelection
            onChange={(value) => setPeople(value.value)}
            placeholder={"Personas"}
            options={optionsPeople}
          />
        )}
        <Button
          text={"Reservar"}
          loading={loading}
          click={() => console.log("Reservar", date)}
        />
      </LayoutGrid>
    </ViewDefault>
  );
}

export default PageReserve;
