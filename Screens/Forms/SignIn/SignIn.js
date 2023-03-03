import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Background from "../../Background";
import { darkGreen } from "../../Constants";
import Fields from "../../Fields";
import Btn from "./../../btn";

const SignIn = (props) => {
  return (
    <Background>
      <View style={{ alignItems: "center", width: 400 }}>
        <Text
          style={{
            color: "white",
            fontSize: 64,
            fontWeight: "bold",
            marginVertical: 10,
          }}
        >
          SignIn
        </Text>
        <View
          style={{
            backgroundColor: "white",
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 40,
              color: darkGreen,
              fontWeight: "bold",
            }}
          >
            Welcome Back
          </Text>
          <Text
            style={{
              color: "grey",
              fontSize: 19,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            Signin to your account
          </Text>
          <Fields
            placeholder="Email / Username"
            keyboardType={"email-address"}
          />
          {/* keyboardType is for keyboard type in phone */}
          {/* and secureTextEntry is for secure staric password */}
          <Fields placeholder="Password" secureTextEntry={true} />
          <View
            style={{
              alignItems: "flex-end",
              width: "78%",
              paddingRight: 16,
              marginBottom: 200,
            }}
          >
            <Text
              style={{
                color: darkGreen,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Forget Password
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnlabel="Signin"
            Press={() => alert("Signed In")}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Don't have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("SignUp")}
            >
              <Text
                style={{ color: darkGreen, fontWeight: "bold", fontSize: 17 }}
              >
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default SignIn;
