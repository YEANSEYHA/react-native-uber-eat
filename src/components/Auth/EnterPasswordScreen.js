import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { updateAuthentication } from "../../redux/Auth/auth";

const EnterPasswordScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState();
  const { navigate } = useNavigation();

  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    Keyboard.dismiss();
  }, []);

  const handleClickedLogin = () => {
    dispatch(updateAuthentication());
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.containerView}>
          <Text style={styles.welcomeBack}>Welcome back Jonh,</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Plase enter your password"
              secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={styles.toggleButton}
            >
              {showPassword ? (
                <EntypoIcon name="eye-with-line" size={26} color="black" />
              ) : (
                <EntypoIcon name="eye" size={26} color="black" />
              )}
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 25 }}>
            <View style={styles.suggestionContainer}>
              <Text style={styles.suggetionText}>
                I've forgotten my password
              </Text>
            </View>
            <View style={styles.suggestionContainer}>
              <Text style={styles.suggetionText}>I cant sign in</Text>
            </View>
          </View>
          <View style={styles.bottomTextContainer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Pressable
                onPress={() => navigate("LogIn")}
                style={styles.arrowContainer}
              >
                <AntDesign name="arrowleft" size={24} color="black" />
              </Pressable>
              <Pressable
                onPress={handleClickedLogin}
                style={styles.arrowContainerNext}
              >
                <Text style={styles.nextTitle}>Next</Text>
                <AntDesign name="arrowright" size={24} color="#7F7F7F" />
              </Pressable>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerView: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  welcomeBack: {
    paddingVertical: 40,
    fontSize: 20,
    fontWeight: "500",
    color: "black",
  },
  inputContainer: {
    backgroundColor: "#EEEEEE",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    height: 50,
  },
  toggleButton: {
    alignItems: "center",
    alignSelf: "center",
    marginRight: 20,
  },
  input: {
    fontSize: 18,
    marginLeft: 20,
  },
  suggestionContainer: {
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderRadius: 25,
    backgroundColor: "#EEEEEE",
    alignSelf: "flex-start",
  },
  suggetionText: {
    color: "black",
    fontWeight: "600",
    fontSize: 16,
  },
  bottomTextContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  arrowContainer: {
    width: 56,
    height: 56,
    backgroundColor: "#EEEEEE",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 28,
  },
  arrowContainerNext: {
    width: 150,
    height: 56,
    backgroundColor: "#EEEEEE",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 28,
  },
  nextTitle: {
    color: "#7F7F7F",
    fontSize: 20,
    fontWeight: "600",
    paddingRight: 15,
  },
});

export default EnterPasswordScreen;
