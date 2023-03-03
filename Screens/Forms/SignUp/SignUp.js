import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Background from "../../Background";
import { darkGreen } from "../../Constants";
import Fields from "../../Fields";
import Btn from "./../../btn";

const SignUp = (props) => {
  return (
    <Background>
      <View style={{ alignItems: "center", width: 400 }}>
        <Text
          style={{
            color: "white",
            fontSize: 64,
            fontWeight: "bold",
            marginTop: 20,
          }}
        >
          SignUp
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 19,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: "white",
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 30,
            alignItems: "center",
          }}
        >
          <Fields placeholder="First Name" />
          <Fields placeholder="Last Name" />
          <Fields
            placeholder="Email / Username"
            keyboardType={"email-address"}
          />
          <Fields placeholder="Contact Number" keyboardType={"number"} />
          {/* keyboardType is for keyboard type in phone */}
          {/* and secureTextEntry is for secure staric password */}
          <Fields placeholder="Password" secureTextEntry={true} />
          <Fields placeholder="Confirm Password" secureTextEntry={true} />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "78%",
              paddingRight: 16,
              marginBottom: 1,
            }}
          >
            <Text
              style={{
                color: "grey",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              By signing in you agree to our{" "}
            </Text>
            <Text
              style={{
                color: darkGreen,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Terms & Conditions
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              width: "78%",
              paddingRight: 16,
              marginBottom: 1,
            }}
          >
            <Text
              style={{
                color: "grey",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              and{" "}
            </Text>
            <Text
              style={{
                color: darkGreen,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Privacy Policy
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnlabel="Signup"
            Press={() => {
              alert("Succesfully Account Created");
              props.navigation.navigate("SignIn");
            }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Already have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("SignIn")}
            >
              <Text
                style={{ color: darkGreen, fontWeight: "bold", fontSize: 17 }}
              >
                Signin
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default SignUp;
