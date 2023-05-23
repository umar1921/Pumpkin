import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import colors from "../config/Colors";
import Input from "../components/CustomInput";
import AppButton from "../components/CustomButton";

const ForgotPassword = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../assets/images/forgot_pass_img.png")}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Forgot Password?</Text>
        <Text style={styles.text}>
          Don’t worry we can help you to reset your password via email
        </Text>
        <Input lable="Email" placeholder="xyz@gmail.com" />
        <AppButton
          text="Send reset link"
          onPress={() => {
            console.warn("clicked");
          }}
        />
      </View>
    </Screen>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    paddingTop: "15%",
  },
  image: {
    width: Dimensions.get("window").width,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 800,
    paddingBottom: 20,
    color: colors.color_text_dark,
  },
  text: {
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 19,
    paddingBottom: 10,
  },
});
