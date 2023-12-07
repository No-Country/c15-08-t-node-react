import React, { useState, useEffect } from "react";
import LayoutGrid from "../components/LayoutGrid/LayoutGrid";
import Button from "../components/Button/Button";
import { mainColors } from "../styles/mainColors";
import ViewDefault from "../components/ViewDefault/ViewDefault";
import ImageEpicureos from "../components/ImageEpicureos/ImageEpicureos";
import InputSelection from "../components/InputSelection/InputSelection";
import { makeObject, makeObjectTime } from "hooks/handlers";

const optionstime = [
  { value: 1, label: "12:00pm" },
  { value: 2, label: "13:00pm" },
  { value: 3, label: "14:00pm" },
  { value: 4, label: "18:00pm" },
  { value: 5, label: "19:00pm" },
  { value: 6, label: "20:00pm" },
];

const optionspeople = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
];

function PageReserve() {
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("");
  const [optionsDate, setOptionsDate] = useState();
  const [optionsTime, setOptionsTime] = useState();
  const [optionsPeople, setOptionsPeople] = useState();
  const [data, setData] = useState();

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
          console.log(makeObject(data));
        });
    };
    fetchDate();
  }, []);

  useEffect(() => {
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

  const handleTime = async (value) => {
    console.log(value.value);
    setTime(value.value);

    console.log(data);
  };

  const handlePeople = async (value) => {
    console.log(value.value);
    setPeople(value.value);
  };
  return (
    <ViewDefault>
      <ImageEpicureos />
      <h2
        style={{
          fontFamily: "Marcellus",
          fontWeight: "400",
          fontSize: "15px",
          marginBottom: "20px",
          color: mainColors.textBlack,
        }}
      >
        Hacé tu reserva, ¡te estamos esperando!
      </h2>

      <LayoutGrid>
        <InputSelection
          onChange={(value) => setDate(value.value)}
          placeholder={"FECHA"}
          options={optionsDate}
        />
        {date && (
          <InputSelection
            onChange={handleTime}
            placeholder={"HORA"}
            options={optionsTime}
          />
        )}
        {date && time && (
          <InputSelection
            onChange={handlePeople}
            placeholder={"PERSONAS"}
            options={optionspeople}
          />
        )}
        <Button
          text={"RESERVAR"}
          loading={loading}
          click={() => console.log("Reservar", date)}
        />
      </LayoutGrid>
    </ViewDefault>
  );
}

export default PageReserve;
