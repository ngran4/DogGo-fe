import React, { useContext, useState } from "react";
import { StateContext } from "../context/StateContext";
import DropDownPicker from "react-native-dropdown-picker";
import { View, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const GenderPicker = () => {
  const [stateContext] = useContext(StateContext);
  const { gender, setGender, colors } = stateContext;
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Sex", value: "" },
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ]);

  return (
    <View
      style={{
        borderBottomWidth: 2,
        borderBottomColor: "black",
        alignItems: "flex-start",
        width: screenWidth * 0.28,
        marginTop: 5,
      }}
    >
      <DropDownPicker
        open={open}
        value={gender}
        placeholder="Sex"
        items={[
          { label: "Male", value: "Male" },
          { label: "Female", value: "Female" },
        ]}
        setOpen={setOpen}
        setValue={setGender}
        setItems={setItems}
        style={{
          backgroundColor: colors.background,
          borderColor: colors.background,
          width: screenWidth * 0.3,
          paddingLeft: 0,
          color: "grey",
        }}
        placeholderStyle={{
          color: "grey",
          fontSize: 20,
          fontWeight: 600,
          fontFamily: "OpenSans-Regular",
          paddingLeft: 0,
        }}
        dropDownContainerStyle={{
          backgroundColor: colors.background,
          borderColor: colors.background,
        }}
        listItemLabelStyle={{
          color: "grey",
          fontSize: 15,
          fontWeight: 600,
          fontFamily: "OpenSans-Regular",
        }}
        selectedItemLabelStyle={{
          color: "grey",
          fontSize: 15,
        }}
        listMode="SCROLLVIEW" 
      />
    </View>
  );
};

export default GenderPicker;