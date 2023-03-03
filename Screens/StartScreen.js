import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Background from "./Background";
import Btn from "./btn";
import { darkGreen } from "./Constants";

const StartScreen = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 30, marginVertical: 100 }}>
        <Text style={{ color: "white", fontSize: 64 }}>Elite</Text>
        <Text style={{ color: "white", fontSize: 64, marginBottom: 40 }}>
          Restaurant
        </Text>
        <Btn
          bgColor={darkGreen}
          textColor="white"
          btnlabel="SignIn"
          Press={() => props.navigation.navigate("SignIn")}
        />
        <Btn
          bgColor="white"
          textColor={darkGreen}
          btnlabel="SignUp"
          Press={() => props.navigation.navigate("SignUp")}
        />
      </View>
    </Background>
  );
};

export default StartScreen;

const styles = StyleSheet.create({});
