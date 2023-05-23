import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

import colors from "../config/Colors";

const CustomButton = ({ onPress, text, backgroundColor = "primary" }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, { backgroundColor: colors[backgroundColor] }]}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginVertical: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: colors.primary,
  },
  text: {
    fontSize: 18,
    color: colors.white,
  },
});
