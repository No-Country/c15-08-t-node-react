import React, { useState } from "react";
import InputSelection from "../Components/InputSelection/InputSelection";
import "react-activity/dist/library.css";

const Reservation = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div>
      <InputSelection
        selectedOption={selectedOption}
        onSelectOption={(option) => {
          setSelectedOption(option);
          alert(`La opción seleccionada es: ${option}`);
        }}
      />
    </div>
  );
};

export default Reservation;
