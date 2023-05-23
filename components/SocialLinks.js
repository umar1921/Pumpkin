import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import colors from "../config/Colors";

const SocialLinks = ({ img, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={img} />
    </TouchableOpacity>
  );
};

export default SocialLinks;

const styles = StyleSheet.create({
  container: {
    width: "30%",
    height: 50,
    backgroundColor: colors.grey_light,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
});
