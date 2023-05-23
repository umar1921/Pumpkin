import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "@react-navigation/native";

import Input from "../components/CustomInput";
import colors from "../config/Colors";
import AppButton from "../components/CustomButton";

const SingnUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Register</Text>

      {/* section_1 input fields */}
      <Input lable="Email" placeholder="xyz@gmail.com" />
      <Input lable="Username" placeholder="John" />
      <Input lable="Password" placeholder="*******" password />

      {/* section_3 login button */}
      <AppButton
        onPress={() => {
          navigation.navigate("forgotPassword");
        }}
        text="Register"
      />

      {/* section_6 */}
      <View style={styles.registerHereContainer}>
        <Text style={styles.alreadyHaveAccount}>
          Already have an account?{" "}
          <Text style={styles.loginHere}>
            <Link to={{ screen: "signIn" }}>Login Here</Link>
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default SingnUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "30%",
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 800,
    paddingBottom: 30,
  },
  registerHereContainer: {
    alignItems: "center",
  },
  alreadyHaveAccount: {
    fontSize: 16,
    color: colors.color_text_dark,
  },
  loginHere: {
    color: colors.primary,
    fontWeight: 800,
    fontSize: 18,
  },
});
