import React, { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";

const DatePickerButton = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const currentDate = new Date();
    setSelectedDate(currentDate);
  }, []);

  const onPress = () => {
    const datePicker = new DatePickerButton({
      date: selectedDate,
      mode: "date",
      locale: "es-ES",
    });
    datePicker.show();
    datePicker.onDateChange((newDate) => {
      setSelectedDate(newDate);
      onDateChange(newDate);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fecha</Text>
      <Pressable
        title="Seleccionar fecha"
        onPress={onPress}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 40,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#edf1f3",
    color: "#ffffff",
    borderRadius: 5,
  },
});

export default DatePickerButton;
