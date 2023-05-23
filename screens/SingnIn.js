import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "@react-navigation/native";

import Input from "../components/CustomInput";
import colors from "../config/Colors";
import AppButton from "../components/CustomButton";
import LineHorizontal from "../components/LineHorizontal";
import SocialLinks from "../components/SocialLinks";

const SingnIn = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Log in</Text>

      {/* section_1 input fields */}
      <Input lable="Email" placeholder="xyz@gmail.com" />
      <Input lable="Password" placeholder="*******" password />

      {/* section_2 forget password  */}
      <View style={styles.forgetpassword}>
        <Link to={{ screen: "forgotPassword" }}>Forgot Password?</Link>
      </View>

      {/* section_3 login button */}
      <AppButton
        onPress={() => {
          navigation.navigate("signUp");
        }}
        text="Log in"
      />

      {/* section_4 horizontal line */}
      <View style={styles.or}>
        <LineHorizontal />
      </View>

      {/* section_5 social links */}
      <View style={styles.socialLinks}>
        <SocialLinks
          onPress={() => console.warn("google")}
          img={require("../assets/images/google.png")}
        />
        <SocialLinks
          onPress={() => console.warn("facebook")}
          img={require("../assets/images/facebook.png")}
        />
        <SocialLinks
          onPress={() => console.warn("apple")}
          img={require("../assets/images/apple.png")}
        />
      </View>

      {/* section_6 */}
      <View style={styles.registerHereContainer}>
        <Text style={styles.dontHaveAccount}>
          Don’t have an account?{" "}
          <Text style={styles.registerHere}>
            <Link to={{ screen: "signUp" }}>Register Here</Link>
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default SingnIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "20%",
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 800,
    paddingBottom: 20,
  },
  forgetpassword: {
    alignSelf: "flex-end",
    paddingVertical: 5,
  },
  or: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  socialLinks: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  registerHereContainer: {
    alignItems: "center",
  },
  dontHaveAccount: {
    fontSize: 14,
    color: colors.color_text_dark,
  },
  registerHere: {
    color: colors.primary,
    fontWeight: 600,
    fontSize: 14,
  },
});
