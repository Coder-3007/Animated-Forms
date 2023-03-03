import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const btn = ({ bgColor, btnlabel, textColor, Press }) => {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 1200,
        alignItems: "center",
        width: 350,
        paddingVertical: 5,
        marginVertical: 10,
      }}
    >
      <Text style={{ color: textColor, fontSize: 25, fontWeight: "bold" }}>
        {btnlabel}
      </Text>
    </TouchableOpacity>
  );
};

export default btn;

const styles = StyleSheet.create({});
