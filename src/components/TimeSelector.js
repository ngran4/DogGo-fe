import React, { useContext, useState } from "react";
import { StateContext } from '../context/StateContext'
import RNPickerSelect from "react-native-picker-select";
import { Button, Text, StyleSheet, View } from "react-native"

const TimeSelector = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [stateContext] = useContext(StateContext);
  const { numWalks, setNumWalks } = stateContext;

  const timeslot = {
    label: "Choose a Time",
    value: null,
  };

  const options = [
    { label: "12:00 am", value: "12am" },
    { label: "1:00 am", value: "1am" },
    { label: "2:00 am", value: "2am" },
    { label: "3:00 am", value: "3am" },
    { label: "4:00 am", value: "4am" },
    { label: "5:00 am", value: "5am" },
    { label: "6:00 am", value: "6am" },
    { label: "7:00 am", value: "7am" },
    { label: "8:00 am", value: "8am" },
    { label: "9:00 am", value: "9am" },
    { label: "10:00 am", value: "10am" },
    { label: "11:00 am", value: "11am" },
    { label: "12:00 pm", value: "12pm" },
    { label: "1:00 pm", value: "1pm" },
    { label: "2:00 pm", value: "2pm" },
    { label: "3:00 pm", value: "3pm" },
    { label: "4:00 pm", value: "4pm" },
    { label: "5:00 pm", value: "5pm" },
    { label: "6:00 pm", value: "6pm" },
    { label: "7:00 pm", value: "7pm" },
    { label: "8:00 pm", value: "8pm" },
    { label: "9:00 pm", value: "9pm" },
    { label: "10:00 pm", value: "10pm" },
    { label: "11:00 pm", value: "11pm" },
    { label: "12:00 pm", value: "12pm" },
  ];

  const dropdownCount = numWalks;
  const dropdowns = [];
  for (let i = 0; i < dropdownCount; i++) {
    dropdowns.push(
      <RNPickerSelect
        placeholder={timeslot}
        items={options}
        onValueChange={(value) => console.log(value)}
        value={selectedValue}
      />
    );
  }

  return (
  <>
  {dropdowns}
  </>
  )
};

export default TimeSelector;