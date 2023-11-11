import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  Keyboard,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MiddleLineText from "../MiddleLineText";

import PhoneInput from "react-native-phone-number-input";
import { AntDesign } from "@expo/vector-icons";

const LoginScreen = () => {
  const phoneInput = useRef();
  const [value, setValue] = useState();

  const { navigate } = useNavigation();

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    Keyboard.dismiss();
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={{ flex: 1, height: "100%" }}>
        <View style={styles.imageContainer}>
          <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View>
              <Image
                style={{ resizeMode: "contain", width: "100%" }}
                source={require("../../../assets/images/login_background_v2.png")}
              />
              <Text
                style={{ fontSize: 18, fontWeight: "bold", paddingTop: 15 }}
              >
                Enter your mobile number
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View
          style={{
            marginTop: 15,
            height: 70,
          }}
        >
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="KH"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              console.log("LOg text value", text);
            }}
            withDarkTheme
            withShadow
            autoFocus
            containerStyle={{ width: "100%" }}
          />
        </View>
        <Pressable
          onPress={() => navigate("EnterPassword")}
          style={{
            backgroundColor: "black",
            height: "100%",
            height: 50,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Text
            style={{
              color: "white",
              marginRight: 160,
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Next
          </Text>
          <AntDesign name="arrowright" size={24} color="white" />
        </Pressable>
        <View style={{ paddingVertical: 15 }}>
          <Text style={{ color: "#888888", fontSize: 12 }}>
            By proceeding , you consent to get calls, Whatsapp or SMS messages,
            including bu automated means, from uber and its affiliates to the
            number provided.
          </Text>
        </View>
        <MiddleLineText text="or" />
        <View
          style={{
            marginTop: 20,
            borderWidth: 1,
            borderColor: "black",
            height: 55,
            flexDirection: "row",
            alignItems: "center", // Align items at the start of the flex direction (horizontal)
            paddingLeft: 10,
            justifyContent: "flex-start",
          }}
        >
          <Image
            style={{ resizeMode: "contain", width: 25, height: 25 }}
            source={require("../../../assets/icons/google_icon.png")}
          />
          <Text style={styles.googleText}>Continue with google</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  loginButton: {
    backgroundColor: "blue",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 4,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
  },
  imageContainer: {
    // backgroundColor: "pink",
  },
  googleText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 70,
  },
});

export default LoginScreen;
