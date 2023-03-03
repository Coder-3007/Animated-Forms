import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

const Background = ({ children }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/2.jpg")}
        style={{ height: "100%" }}
      />
      <View style={{ position: "absolute" }}>{children}</View>
    </View>
  );
};

export default Background;

const styles = StyleSheet.create({});
