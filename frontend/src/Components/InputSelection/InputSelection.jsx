import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

const InputSelection = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["Opción 1", "Opción 2", "Opción 3"];

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <View>
      <TextInput
        placeholder="Seleccionar una opción"
        value={selectedOption}
        onChangeText={(text) => setSelectedOption(text)}
      />
      {options.map((option) => (
        <Button
          key={option}
          title={option}
          onPress={() => handleSelectOption(option)}
        />
      ))}
      <p>Opción seleccionada: {selectedOption}</p>
    </View>
  );
};

export default InputSelection;
