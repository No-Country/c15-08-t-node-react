import React, { useState } from "react";
import LayoutGrid from "../components/LayoutGrid/LayoutGrid";
import Button from "../components/Button/Button";
import { mainColors } from "../styles/mainColors";
import ViewDefault from "../components/ViewDefault/ViewDefault";
import ImageEpicureos from "../components/ImageEpicureos/ImageEpicureos";
import InputSelection from "../components/InputSelection/InputSelection";

const optionstime = [
  { value: 1, label: "12:00pm" },
  { value: 2, label: "13:00pm" },
  { value: 3, label: "14:00pm" },
  { value: 4, label: "18:00pm" },
  { value: 5, label: "19:00pm" },
  { value: 6, label: "20:00pm" },
];

const optionsdate = [
  { value: "08/12/2023", label: "Viernes 8, Dic" },
  { value: "09/12/2023", label: "Sabado 9, Dic" },
  { value: "10/12/2023", label: "Domingo 10, Dic" },
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

  const handleDate = async (value) => {
    console.log(value.value);
    setDate(value.value);
  };

  const handleTime = async (value) => {
    console.log(value.value);
    setTime(value.value);
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
          onChange={handleDate}
          placeholder={"FECHA"}
          options={optionsdate}
        />
        {date && (
          <InputSelection
            onChange={handleTime}
            placeholder={"HORA"}
            options={optionstime}
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
