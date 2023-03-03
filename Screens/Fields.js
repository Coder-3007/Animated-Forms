import { TextInput } from "react-native";
import React from "react";
import { darkGreen } from "./Constants";

const Fields = (props) => {
  return (
    <TextInput
      {...props}
      style={{
        position: "relative",
        alignItems: "center",
        borderRadius: 100,
        color: darkGreen,
        paddingHorizontal: 10,
        height: "7%",
        width: "78%",
        backgroundColor: "rgb(220,220,220)",
        marginVertical: 10,
      }}
      placeholderTextColor={darkGreen}
    ></TextInput>
  );
};

export default Fields;
